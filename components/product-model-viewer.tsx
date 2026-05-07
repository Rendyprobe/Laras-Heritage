"use client";

import { type HTMLAttributes, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { cn } from "@/lib/utils";

type ProductModelViewerProps = HTMLAttributes<HTMLDivElement> & {
  modelSrc: string;
  className?: string;
  "data-reveal"?: string;
  "data-reveal-delay"?: string;
};

function disposeMaterial(material: THREE.Material) {
  for (const value of Object.values(material)) {
    if (value instanceof THREE.Texture) {
      value.dispose();
    }
  }

  material.dispose();
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) {
      return;
    }

    child.geometry.dispose();

    if (Array.isArray(child.material)) {
      child.material.forEach(disposeMaterial);
    } else {
      disposeMaterial(child.material);
    }
  });
}

export function ProductModelViewer({
  modelSrc,
  className,
  ...props
}: ProductModelViewerProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    setStatus("loading");

    let model: THREE.Object3D | null = null;
    let disposed = false;

    const scene = new THREE.Scene();
    const modelRoot = new THREE.Group();
    const animationStartedAt = performance.now();
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.className = "h-full w-full";
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 2.15;
    controls.maxDistance = 4.8;
    controls.target.set(0, 0, 0);

    scene.add(modelRoot);
    scene.add(new THREE.HemisphereLight(0xfff7e8, 0x4f6a57, 2.8));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(3.2, 3.8, 2.8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xdde5d6, 1.8);
    rimLight.position.set(-2.8, 1.4, -2.4);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xc7a46a, 18, 7);
    fillLight.position.set(-1.6, 0.8, 2.4);
    scene.add(fillLight);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.05, 64),
      new THREE.MeshBasicMaterial({
        color: 0x23322c,
        opacity: 0.08,
        transparent: true,
      }),
    );
    shadow.position.y = -0.86;
    shadow.rotation.x = -Math.PI / 2;
    scene.add(shadow);

    camera.position.set(0.52, 0.32, 3.3);
    let lastRenderAt = 0;

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();

      if (width === 0 || height === 0) {
        return;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const loader = new GLTFLoader();

    loader.load(
      modelSrc,
      (gltf) => {
        if (disposed) {
          disposeObject(gltf.scene);
          return;
        }

        model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z);
        const scale = maxDimension > 0 ? 1.42 / maxDimension : 1;

        model.position.set(
          -center.x * scale,
          -center.y * scale - 0.02,
          -center.z * scale,
        );
        model.scale.setScalar(scale);

        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) {
            return;
          }

          child.castShadow = true;
          child.receiveShadow = true;

          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];

          materials.forEach((material) => {
            if (material instanceof THREE.MeshStandardMaterial) {
              material.roughness = Math.max(material.roughness, 0.42);
              material.envMapIntensity = 0.85;
            }
          });
        });

        modelRoot.add(model);
        setStatus("ready");
      },
      undefined,
      () => {
        if (!disposed) {
          setStatus("error");
        }
      },
    );

    renderer.setAnimationLoop(() => {
      const now = performance.now();

      if (now - lastRenderAt < 33) {
        return;
      }

      lastRenderAt = now;
      const elapsed = (now - animationStartedAt) / 1000;

      if (reduceMotionQuery.matches) {
        modelRoot.rotation.y = -0.72;
        modelRoot.rotation.x = 0;
        modelRoot.position.y = 0;
      } else {
        modelRoot.rotation.y = -0.72 + elapsed * 0.18;
        modelRoot.rotation.x = Math.sin(elapsed * 0.36) * 0.018;
        modelRoot.position.y = Math.sin(elapsed * 0.7) * 0.018;
      }
      controls.update();
      renderer.render(scene, camera);
    });

    return () => {
      disposed = true;
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      controls.dispose();

      if (model) {
        modelRoot.remove(model);
        disposeObject(model);
      }

      shadow.geometry.dispose();
      disposeMaterial(shadow.material);
      renderer.dispose();

      if (host.contains(renderer.domElement)) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [modelSrc]);

  return (
    <div
      {...props}
      className={cn(
        "relative min-h-[24rem] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_50%_36%,var(--model-glow-1),var(--model-glow-2)_42%,var(--model-glow-3)_74%,transparent_100%)]",
        className,
      )}
      aria-label="Model 3D produk Laras Heritage"
    >
      <div ref={hostRef} className="absolute inset-0" />

      {status !== "ready" ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="rounded-full border border-brand-olive/10 bg-brand-surface/78 px-4 py-2 text-sm font-semibold text-brand-ink/68 shadow-[0_18px_40px_-30px_rgba(35,50,44,0.42)]">
            {status === "loading"
              ? "Memuat model 3D"
              : "Model 3D belum bisa dimuat"}
          </div>
        </div>
      ) : null}
    </div>
  );
}

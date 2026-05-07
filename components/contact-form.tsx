"use client";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";

type ContactFormProps = {
  whatsappLink: string;
};

type FormState = {
  name: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  interest: "Info Produk",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm({ whatsappLink }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const whatsappMessageLink = useMemo(() => {
    const message = [
      "Halo Laras Heritage, saya ingin menghubungi tim Anda.",
      "",
      `Nama: ${values.name || "-"}`,
      `Kebutuhan: ${values.interest}`,
      `Pesan: ${values.message || "-"}`,
    ].join("\n");
    const separator = whatsappLink.includes("?") ? "&" : "?";

    return `${whatsappLink}${separator}text=${encodeURIComponent(message)}`;
  }, [values.interest, values.message, values.name, whatsappLink]);

  const handleChange =
    (field: keyof FormState) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Nama wajib diisi.";
    if (!values.message.trim()) nextErrors.message = "Pesan wajib diisi.";

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setStatus("success");
    window.open(whatsappMessageLink, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label data-reveal-text="1" className="grid gap-2">
          <span className="text-sm font-semibold text-brand-ink">Nama</span>
          <input
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            className="h-12 rounded-2xl border border-brand-olive/12 bg-brand-surface px-4 text-sm text-brand-ink placeholder:text-brand-ink/35"
            placeholder="Nama lengkap Anda"
          />
          {errors.name ? (
            <span className="text-sm text-brand-danger">{errors.name}</span>
          ) : null}
        </label>

        <label data-reveal-text="2" className="grid gap-2">
          <span className="text-sm font-semibold text-brand-ink">
            Tipe kebutuhan
          </span>
          <select
            value={values.interest}
            onChange={handleChange("interest")}
            className="h-12 rounded-2xl border border-brand-olive/12 bg-brand-surface px-4 text-sm text-brand-ink"
          >
            <option>Info Produk</option>
            <option>Reseller</option>
            <option>Investor / Strategic Partner</option>
          </select>
        </label>
      </div>

      <label data-reveal-text="3" className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">Pesan</span>
        <textarea
          value={values.message}
          onChange={handleChange("message")}
          rows={6}
          className="rounded-[24px] border border-brand-olive/12 bg-brand-surface px-4 py-4 text-sm leading-7 text-brand-ink placeholder:text-brand-ink/35"
          placeholder="Ceritakan kebutuhan Anda, produk yang ingin diketahui, atau bentuk kemitraan yang ingin didiskusikan."
        />
        {errors.message ? (
          <span className="text-sm text-brand-danger">{errors.message}</span>
        ) : null}
      </label>

      <div
        data-reveal-text="4"
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-sm leading-7 text-brand-ink/65">
          Pesan akan terbuka di WhatsApp dengan isi yang sudah tersusun.
        </p>
        <Button type="submit">
          Kirim via WhatsApp
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      {status === "success" ? (
        <div className="rounded-[20px] border border-brand-olive/12 bg-brand-leaf/50 px-4 py-3 text-sm text-brand-ink/78">
          WhatsApp sudah dibuka dengan pesan dari form.
        </div>
      ) : null}
    </form>
  );
}

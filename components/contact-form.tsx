"use client";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";

type ContactFormProps = {
  email: string;
};

type FormState = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  interest: "Info Produk",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm({ email }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const mailtoLink = useMemo(() => {
    const subject = `[Arunika Heritage] ${values.interest} - ${values.name || "Prospect"}`;
    const body = [
      `Nama: ${values.name}`,
      `Email: ${values.email}`,
      `Kebutuhan: ${values.interest}`,
      "",
      "Pesan:",
      values.message,
    ].join("\n");

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, values.email, values.interest, values.message, values.name]);

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
    if (!values.email.trim()) {
      nextErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Format email belum valid.";
    }
    if (!values.message.trim()) nextErrors.message = "Pesan wajib diisi.";

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setStatus("success");
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-brand-ink">Nama</span>
          <input
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            className="h-12 rounded-2xl border border-brand-olive/12 bg-white px-4 text-sm text-brand-ink placeholder:text-brand-ink/35"
            placeholder="Nama lengkap Anda"
          />
          {errors.name ? (
            <span className="text-sm text-[#A04E45]">{errors.name}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-brand-ink">Email</span>
          <input
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            className="h-12 rounded-2xl border border-brand-olive/12 bg-white px-4 text-sm text-brand-ink placeholder:text-brand-ink/35"
            placeholder="nama@email.com"
          />
          {errors.email ? (
            <span className="text-sm text-[#A04E45]">{errors.email}</span>
          ) : null}
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">Tipe kebutuhan</span>
        <select
          value={values.interest}
          onChange={handleChange("interest")}
          className="h-12 rounded-2xl border border-brand-olive/12 bg-white px-4 text-sm text-brand-ink"
        >
          <option>Info Produk</option>
          <option>Reseller</option>
          <option>Distributor</option>
          <option>Retail / Hospitality</option>
          <option>Investor / Strategic Partner</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">Pesan</span>
        <textarea
          value={values.message}
          onChange={handleChange("message")}
          rows={6}
          className="rounded-[24px] border border-brand-olive/12 bg-white px-4 py-4 text-sm leading-7 text-brand-ink placeholder:text-brand-ink/35"
          placeholder="Ceritakan kebutuhan Anda, produk yang ingin diketahui, atau bentuk kemitraan yang ingin didiskusikan."
        />
        {errors.message ? (
          <span className="text-sm text-[#A04E45]">{errors.message}</span>
        ) : null}
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-brand-ink/65">
          Form ini akan menyiapkan draft email agar percakapan bisa langsung
          diteruskan ke tim kami.
        </p>
        <Button type="submit">
          Kirim via Email
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      {status === "success" ? (
        <div className="rounded-[20px] border border-brand-olive/12 bg-brand-leaf/50 px-4 py-3 text-sm text-brand-ink/78">
          Draft email berhasil disiapkan. Jika email client tidak terbuka
          otomatis, Anda tetap dapat menghubungi kami lewat detail kontak di
          samping.
        </div>
      ) : null}
    </form>
  );
}

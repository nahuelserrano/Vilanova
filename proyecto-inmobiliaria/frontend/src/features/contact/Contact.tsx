"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT } from "./contact-info";
import { submitContact } from "./api";

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.793.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.002 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.663 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.459-8.395" />
    </svg>
  );
}

const CONTACT_ICONS: Array<LucideIcon | typeof WhatsappIcon> = [
  MapPin,
  Phone,
  WhatsappIcon,
  Mail,
  Clock,
];

const inputClass =
  "w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none";
const inputErrorClass =
  "border-red-400 focus:border-red-500";

type FormErrors = {
  name?: string;
  phone?: string;
  message?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const SUCCESS_MESSAGE =
  "¡Mensaje enviado correctamente! Recibimos tu consulta y nos pondremos en contacto con vos a la brevedad.";
const ERROR_MESSAGE =
  "No pudimos enviar tu consulta. Revisá los datos e intentá nuevamente.";

function validate(values: { name: string; phone: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  const name = values.name.trim();

  if (!name) {
    errors.name = "El nombre y apellido es obligatorio.";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñüÜ' -]+$/.test(name)) {
    errors.name = "El nombre solo puede contener letras y espacios.";
  } else if (name.length < 2 || name.length > 100) {
    errors.name = "El nombre debe tener entre 2 y 100 caracteres.";
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "El teléfono es obligatorio.";
  } else if (!/^\+?[0-9\s()-]{6,20}$/.test(phone)) {
    errors.phone = "El teléfono tiene un formato inválido.";
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = "El mensaje no puede estar vacío.";
  } else if (message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const isLoading = status === "submitting";

  function handleChange(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") setStatus("idle");
    setServerMessage("");
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      await submitContact({
        name: values.name.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
      });

      setStatus("success");
      setValues({ name: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof Error && error.message ? error.message : ERROR_MESSAGE);
    }
  }

  return (
    <section id="contacto" className="container-page scroll-mt-28 pt-4 pb-16 sm:scroll-mt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-7">
          <p className="text-base font-semibold tracking-[0.2em] text-gold uppercase">
            Estamos para ayudarte
          </p>
          <h2 className="text-4xl font-bold text-charcoal sm:text-5xl">Hablemos</h2>
          <p className="max-w-md text-lg text-charcoal/80">
            Contanos qué estás buscando o en qué podemos ayudarte. Te
            respondemos el mismo día.
          </p>

          <ul className="space-y-5">
            {CONTACT.map(({ text, href }, index) => {
              const Icon = CONTACT_ICONS[index];
              return (
                <li key={`${text}-${index}`} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-cream-soft">
                    <Icon className="h-5 w-5 text-gold" aria-hidden />
                  </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-base font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    {text}
                  </a>
                ) : (
                  <span className="text-base font-medium text-charcoal">{text}</span>
                )}
                  </li>
                );
            })}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg shadow-charcoal/5">
          <div className="mb-8 flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-soft">
              <MessageCircle className="h-6 w-6 text-gold" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl text-charcoal">Envianos tu consulta</h3>
              <div className="mt-1 h-1 w-16 rounded-full bg-gold" />
            </div>
          </div>

          {status === "success" && (
            <div
              aria-live="polite"
              className="mb-6 flex items-start gap-2 rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-800"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" aria-hidden />
              {SUCCESS_MESSAGE}
            </div>
          )}

          {status === "error" && (
            <div
              aria-live="assertive"
              className="mb-6 flex items-start gap-2 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800"
            >
              <AlertCircle className="h-5 w-5 shrink-0 text-red-600" aria-hidden />
              {serverMessage || ERROR_MESSAGE}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
                  Nombre y apellido
                </span>
                <input
                  type="text"
                  name="nombre"
                  value={values.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  disabled={isLoading}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`${inputClass} ${errors.name ? inputErrorClass : ""}`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1.5 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
                  Teléfono
                </span>
                <input
                  type="tel"
                  inputMode="tel"
                  name="contacto"
                  value={values.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  disabled={isLoading}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  className={`${inputClass} ${errors.phone ? inputErrorClass : ""}`}
                />
                {errors.phone && (
                  <p id="contact-phone-error" className="mt-1.5 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
                ¿En qué podemos ayudarte?
              </span>
              <textarea
                name="mensaje"
                rows={6}
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                disabled={isLoading}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${inputClass} ${errors.message ? inputErrorClass : ""}`}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1.5 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal py-4 text-sm font-semibold text-cream transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-gold" aria-hidden />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 text-gold" aria-hidden />
                  Enviar consulta
                </>
              )}
            </button>

            <p className="flex items-center gap-2 text-xs text-charcoal/60">
              <ShieldCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              Tu consulta es confidencial. Te responderemos a la brevedad.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

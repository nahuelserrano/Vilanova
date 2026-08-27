import Link from "next/link";
import { HelpCircle, MessageCircle } from "lucide-react";

export default function ContactBanner({
  title,
  subtitle,
  actionLabel,
  actionHref,
}: {
  title: string;
  subtitle: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <section className="rounded-2xl border border-line bg-cream-soft px-5 py-4">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal">
            <HelpCircle className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="text-base font-semibold text-charcoal">{title}</h2>
            <p className="mt-0.5 text-xs text-charcoal/70">{subtitle}</p>
          </div>
        </div>

        <Link href={actionHref} className="btn btn-gold shrink-0 px-5 py-2.5 text-sm">
          <MessageCircle className="h-4 w-4" aria-hidden />
          {actionLabel}
        </Link>
      </div>
    </section>
  );
}

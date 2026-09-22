import Image from "next/image";
import Link from "next/link";
import { business, legalLinks, site } from "@/lib/content";
import { tapHover } from "@/lib/motionClasses";
import { InstagramIcon, MailIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full">
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={174}
                height={171}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xs text-navy/50">{site.tagline}</p>
          </div>

          <div className="flex items-center gap-5 text-navy/60">
            <a
              href={`mailto:${site.email}`}
              className={`transition-colors hover:text-rose-deep ${tapHover}`}
              aria-label="Scrivici una email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:text-rose-deep ${tapHover}`}
              aria-label="Seguici su Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-navy/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-navy/45">
            © {year} {business.legalName} · P.IVA {business.piva} · Tutti i
            diritti riservati
          </p>
          <nav className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-navy/50 transition-colors hover:text-rose-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import { tapHover } from "@/lib/motionClasses";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="block h-11 w-11 overflow-hidden rounded-full"
        >
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={174}
            height={171}
            className="h-full w-full object-cover"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-rose-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contatti"
          className={`hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream hover:bg-navy-2 md:inline-block ${tapHover}`}
        >
          Scrivici
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-full border border-navy/15 p-2 text-navy md:hidden ${tapHover}`}
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy/10 bg-cream px-6 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-navy/80 hover:bg-cream-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contatti"
            onClick={() => setOpen(false)}
            className={`mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-cream hover:bg-navy-2 ${tapHover}`}
          >
            Scrivici
          </Link>
        </nav>
      )}
    </header>
  );
}

import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Assistenza — Gia Digital Lab",
  description: "Come contattare Gia Digital Lab per domande o assistenza.",
};

export default function AssistenzaPage() {
  return (
    <LegalLayout title="Assistenza" updated="23 settembre 2026">
      <section>
        <p>
          Hai una domanda sui nostri servizi o vuoi sapere se possiamo
          aiutarti con la tua attività? Siamo raggiungibili direttamente,
          senza moduli da compilare.
        </p>
      </section>

      <section>
        <h2>Come contattarci</h2>
        <ul>
          {team.map((person) => (
            <li key={person.name}>
              {person.name}:{" "}
              <a href={person.phoneHref} className="text-rose-deep hover:text-navy">
                {person.phone}
              </a>
            </li>
          ))}
          <li>
            Email:{" "}
            <a href={`mailto:${site.email}`} className="text-rose-deep hover:text-navy">
              {site.email}
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="text-rose-deep hover:text-navy"
            >
              {site.instagram.handle}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Domande frequenti</h2>
        <p>
          <strong className="text-navy">Come vi contatto?</strong>
          <br />
          Scrivici via email, telefono o Instagram: trovi tutti i riferimenti
          qui sopra.
        </p>
        <p>
          <strong className="text-navy">Lavorate solo a Torino?</strong>
          <br />
          Siamo basate a Torino e lavoriamo volentieri anche con attività di
          Torino e dintorni.
        </p>
        <p>
          <strong className="text-navy">Quanto tempo per una risposta?</strong>
          <br />
          Cerchiamo di risponderti il prima possibile a email, messaggi e
          chiamate.
        </p>
      </section>
    </LegalLayout>
  );
}

import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { business, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Termini e condizioni — Gia Digital Lab",
  description: "Termini e condizioni d'uso del sito di Gia Digital Lab.",
};

export default function TerminiPage() {
  const year = new Date().getFullYear();

  return (
    <LegalLayout title="Termini e condizioni" updated="23 settembre 2026">
      <section>
        <h2>1. Oggetto</h2>
        <p>
          Le presenti condizioni regolano l&rsquo;utilizzo del sito di{" "}
          {business.legalName} (Gabi e Giulia), P.IVA {business.piva}.
          Navigando su questo sito accetti le condizioni descritte di
          seguito.
        </p>
      </section>

      <section>
        <h2>2. Contenuti del sito</h2>
        <p>
          Il sito ha finalità informative: presenta chi siamo, i servizi che
          offriamo, alcuni progetti e casi studio realizzati per i nostri
          clienti, e i nostri contatti.
        </p>
      </section>

      <section>
        <h2>3. Proprietà intellettuale e diritti riservati</h2>
        <p>
          Testi, immagini, fotografie, loghi e grafiche presenti su questo
          sito sono di proprietà di {business.legalName} o vengono utilizzati
          con l&rsquo;autorizzazione dei rispettivi titolari, inclusi i
          clienti citati nei progetti e nei casi studio. È vietata la
          riproduzione, copia o ridistribuzione dei contenuti senza
          autorizzazione scritta.
        </p>
        <p>© {year} {business.legalName}. Tutti i diritti riservati.</p>
      </section>

      <section>
        <h2>4. Utilizzo del sito</h2>
        <p>
          Ti impegni a utilizzare il sito in modo lecito, senza compiere
          azioni che possano danneggiarne il funzionamento o la sicurezza.
        </p>
      </section>

      <section>
        <h2>5. Link esterni</h2>
        <p>
          Il sito può contenere link a servizi di terze parti, ad esempio
          Instagram. Non siamo responsabili dei contenuti o delle policy dei
          siti esterni a cui questi link rimandano.
        </p>
      </section>

      <section>
        <h2>6. Limitazione di responsabilità</h2>
        <p>
          Ci impegniamo a mantenere le informazioni presenti sul sito
          aggiornate e corrette, ma non garantiamo l&rsquo;assenza di errori
          o interruzioni del servizio. Le informazioni sul sito non
          costituiscono un&rsquo;offerta contrattuale vincolante: i dettagli
          di una collaborazione vengono sempre definiti direttamente con il
          cliente.
        </p>
      </section>

      <section>
        <h2>7. Legge applicabile e foro competente</h2>
        <p>
          Le presenti condizioni sono regolate dalla legge italiana. Per
          qualsiasi controversia è competente il foro di {business.city}.
        </p>
      </section>

      <section>
        <h2>8. Contatti</h2>
        <p>
          Per domande su questi termini, scrivici a{" "}
          <a href={`mailto:${site.email}`} className="text-rose-deep hover:text-navy">
            {site.email}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}

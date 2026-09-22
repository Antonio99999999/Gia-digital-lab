import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { business, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy — Gia Digital Lab",
  description: "Informativa sulla privacy del sito di Gia Digital Lab.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Informativa sulla privacy" updated="23 settembre 2026">
      <section>
        <h2>1. Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento è {business.legalName} (Gabi e Giulia),
          P.IVA {business.piva}, con sede in {business.city},{" "}
          {business.country}. Per qualsiasi richiesta relativa al trattamento
          dei dati puoi scrivere a{" "}
          <a href={`mailto:${site.email}`} className="text-rose-deep hover:text-navy">
            {site.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2>2. Natura del sito</h2>
        <p>
          Questo è un sito vetrina a scopo informativo: presenta i servizi, i
          progetti e i contatti di {business.legalName}. Il sito non include
          moduli di contatto, aree riservate, e-commerce o altre
          funzionalità che richiedano l&rsquo;inserimento di dati personali
          da parte di chi lo visita.
        </p>
      </section>

      <section>
        <h2>3. Dati raccolti</h2>
        <p>
          Non raccogliamo, archiviamo né trattiamo alcun dato personale
          tramite questo sito. I link a email e numero di telefono presenti
          nella pagina aprono semplicemente il client di posta o l&rsquo;app
          telefonica del tuo dispositivo: un&rsquo;eventuale comunicazione
          che scegli di inviarci (email, messaggio, chiamata) avviene
          direttamente tra te e noi, fuori da questo sito.
        </p>
      </section>

      <section>
        <h2>4. Cookie</h2>
        <p>
          Questo sito non utilizza cookie di profilazione, cookie di analisi
          (analytics) né cookie di tracciamento di terze parti. Non sono
          quindi necessari banner o richieste di consenso relative ai
          cookie.
        </p>
      </section>

      <section>
        <h2>5. Dati tecnici di navigazione</h2>
        <p>
          Come qualsiasi sito web, l&rsquo;infrastruttura che lo ospita può
          registrare automaticamente alcuni dati tecnici (ad esempio
          indirizzo IP, tipo di browser, data e ora della visita) per motivi
          di sicurezza e per il corretto funzionamento del servizio. Questi
          dati sono gestiti dal fornitore di hosting, non vengono incrociati
          con altre informazioni e non sono utilizzati da noi per
          identificare chi visita il sito.
        </p>
      </section>

      <section>
        <h2>6. Link a servizi di terze parti</h2>
        <p>
          Il sito contiene un link al profilo Instagram{" "}
          {site.instagram.handle}. Una volta seguito quel link, la
          navigazione su Instagram è regolata dall&rsquo;informativa privacy
          di Meta, indipendente da questo sito.
        </p>
      </section>

      <section>
        <h2>7. I tuoi diritti</h2>
        <p>
          Anche se questo sito non raccoglie dati, se ci scrivi direttamente
          (ad esempio via email) hai comunque diritto, in qualsiasi momento,
          di chiedere accesso, rettifica, cancellazione o limitazione dei
          dati che eventualmente ci hai fornito in quella comunicazione,
          scrivendo a {site.email}.
        </p>
      </section>

      <section>
        <h2>8. Modifiche a questa informativa</h2>
        <p>
          Questa informativa può essere aggiornata nel tempo. La data di
          ultimo aggiornamento è indicata in cima alla pagina.
        </p>
      </section>
    </LegalLayout>
  );
}

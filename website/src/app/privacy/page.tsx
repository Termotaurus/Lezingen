import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid - Tom Termote',
  description: 'Privacybeleid voor de website van Tom Termote. Wij gebruiken geen cookies en verzamelen geen persoonlijke gegevens van bezoekers.',
};

const LAST_UPDATED = '30 oktober 2026';

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-vives-teal">Privacybeleid</h1>

        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Laatst bijgewerkt: {LAST_UPDATED}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Algemeen</h2>
            <p>
              Wij hechten veel waarde aan uw privacy. Deze website is ontworpen om informatief te zijn zonder uw persoonlijke gegevens te verzamelen of uw gedrag te volgen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Cookies</h2>
            <p>
              <strong>Deze website maakt geen gebruik van cookies.</strong>
            </p>
            <p>
              Wij plaatsen geen functionele, analytische of marketingcookies op uw apparaat. U hoeft daarom geen cookiebanner te accepteren wanneer u onze site bezoekt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Gegevensverzameling</h2>
            <p>
              Wij verzamelen geen persoonlijke gegevens via deze website. Er zijn geen contactformulieren, nieuwsbriefinschrijvingen of gebruikersaccounts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Hosting en Externe Diensten</h2>
            <p>
              Om deze website aan te bieden en actuele informatie te tonen, maken wij gebruik van twee externe infrastructuurdiensten:
            </p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li>
                <strong>Vercel (Hosting):</strong> Deze website wordt gehost op Vercel. Vercel kan technisch noodzakelijke serverlogbestanden bijhouden (zoals geanonimiseerde of kortstondige IP-adressen) voor beveiligingsdoeleinden en om de stabiliteit van de dienst te garanderen. Meer informatie vindt u in de{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-vives-red hover:underline">
                  Vercel Privacy Policy
                </a>.
              </li>
              <li>
                <strong>Supabase (Database voor de kalender):</strong> Voor het weergeven van de geplande vormingen op de kalenderpagina haalt de server gegevens op uit een database bij Supabase. Hierbij worden geen persoonsgegevens van websitebezoekers opgeslagen of gevolgd; de verbinding wordt enkel op serverniveau gebruikt om de publieke kalenderitems in te laden. Meer informatie vindt u in de{' '}
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-vives-red hover:underline">
                  Supabase Privacy Policy
                </a>.
              </li>
            </ul>
            <p>
              Geen van deze gegevens wordt door ons gebruikt voor marketing, profilering of tracking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Contact</h2>
            <p>
              Als u vragen heeft over dit privacybeleid, kunt u contact met ons opnemen via de contactgegevens die op de website worden vermeld.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

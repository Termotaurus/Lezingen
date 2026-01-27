import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Tom Termote',
  description: 'Privacy policy for Tom Termote website. We do not use cookies or collect personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacybeleid</h1>

      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
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
            Deze website wordt gehost op <strong>Vercel</strong>. Vercel kan technisch noodzakelijke logbestanden bijhouden (zoals IP-adressen) voor beveiligingsdoeleinden en om de stabiliteit van de dienst te garanderen. Deze gegevens worden niet gebruikt voor marketing of tracking.
          </p>
          <p>
            Voor meer informatie over hoe Vercel met gegevens omgaat, verwijzen wij u naar de <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vercel Privacy Policy</a>.
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
  );
}

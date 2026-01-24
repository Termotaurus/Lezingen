import React from "react";

export default function PracticalInfoPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg prose-headings:text-vives-teal prose-a:text-vives-red mx-auto text-gray-700">
          <h1 className="text-4xl font-bold text-vives-teal mb-8">Praktische info</h1>

          <h2 className="text-2xl font-bold text-vives-teal mt-8 mb-4">Kostprijs</h2>
          <p>De tarieven zijn exclusief verplaatsingskosten.</p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Doelgroep
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Duur sessie
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Grootte groep
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Prijs
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                    - 12 jaar
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    2 uur<br/><span className="text-xs italic">(geen pauze)</span>
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    Onbeperkt<br/><span className="text-xs italic">(Samenwerkingen met meerdere basisscholen kan)</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    € 500
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                    - 18 jaar
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    2 lesuren<br/><span className="text-xs italic">(geen pauze)</span>
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    Onbeperkt
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    € 500
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                    Volwassenen<br/><span className="text-xs font-normal text-gray-500">(of ouder-kind of lezingen na 16u)</span>
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    2 uur<br/><span className="text-xs italic">(geen pauze)</span>
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    Onbeperkt
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    € 750
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="italic">Verplaatsingskosten: € 0,50 / kilometer (vanuit Desselgem en terug)</p>

          <h2 className="text-2xl font-bold text-vives-teal mt-12 mb-4">Benodigdheden</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Microfoon / headset indien groep groter dan 50 personen</li>
            <li>HDMI-aansluiting voor projectie (Ik breng mijn eigen Windowslaptop mee.)</li>
            <li>Geluid voor mijn laptop via audiojack, rechtstreeks via HDMI of Bluetooth</li>
            <li>Laptop graag zo dicht mogelijk bij mij (voor de pointer)</li>
          </ul>

          <h2 className="text-2xl font-bold text-vives-teal mt-12 mb-4">Boekingsinformatie</h2>
          <p>
            Wil je er de volgende keer als eerste bij zijn? Noteer <strong>15 juni 2026</strong> dan met stip in je agenda.
            Dan openen we de inschrijvingen voor het nieuwe seizoen. Wees er snel bij, want de plaatsen zijn beperkt en de kalender loopt razendsnel vol!
          </p>
          <p>
            <strong>Zo meld je je aan:</strong> Stuur je aanvraag naar <a href="mailto:tom.termote@vives.be">tom.termote@vives.be</a>.
            Hoe flexibeler je aanvraag (qua datum en locatie), hoe groter de kans dat we een match vinden in onze planning.
          </p>
          <p>
            Ik ben geen zelfstandige, maar maak deel uit van het team van <a href="https://www.vives.be/nl/continue">Vives Continue</a>. het platform voor levenslang leren van <a href= "www.vives.be">Hogeschool VIVES</a>. 
            Onze missie? Mijn technologische expertise delen met de wereld buiten de campus, zodat we samen de toekomst vormgeven.
          </p>
        </div>
      </div>
    </section>
  );
}

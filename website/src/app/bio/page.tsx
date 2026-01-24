import React from "react";

export default function BioPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg prose-headings:text-vives-teal prose-a:text-vives-red mx-auto text-gray-700">
          <h1 className="text-4xl font-bold text-vives-teal mb-8">Over Tom Termote</h1>

          <p className="lead italic text-xl text-gray-600 mb-8">
            &quot;Grip op de digitale wereld, van speelplaats tot werkplaats.&quot;
          </p>

          <p>
            Als docent aan de Hogeschool VIVES en expert bij VIVES Continue heb ik een heldere missie: ik vertaal complexe digitale thema’s naar hapklare, praktijkgerichte adviezen. Met meer dan 170 sessies per jaar ben ik een van de meest gevraagde sprekers in Vlaanderen op het gebied van digitale veiligheid en mediawijsheid.
          </p>

          <h2>Kritisch oog, warm hart voor tech</h2>
          <p>
            Mijn basis ligt in het onderwijs. Binnen VIVES Technology geef ik les aan technologische opleidingen met oog op de toekomst: Elektronica-ICT en Zorg- en sporttechnologie. Mijn benadering? Kritisch, maar vol overtuiging. Ik hou oprecht van technologie en de mogelijkheden die het biedt, maar ik verlies nooit de risico&apos;s uit het oog. Die balans tussen passie en een gezonde dosis scepsis is precies wat ik mijn studenten en publiek wil meegeven.
          </p>

          <h2>De menselijke firewall versterken</h2>
          <p>
            In een wereld vol firewalls en antivirussoftware word ik vaak gevraagd om de belangrijkste schakel te belichten: de mens. Ik geloof niet in gortdroge technische handleidingen. In plaats daarvan train ik professionals en burgers om digitale verleidingstrucs en phishing te doorzien door kritisch naar hun eigen gedrag te kijken. Verwacht van mij geen stoffige sessies, maar dynamische lezingen vol humor en herkenbare praktijkvoorbeelden.
          </p>

          <h2>Digitale opvoeding voor elke generatie</h2>
          <p>
            Technologie stopt voor mij niet bij de kantoordeur; ik duik ook diep in de sociale impact ervan. Van de eerste smartphone in de lagere school tot sessies voor ouders over TikTok en cyberpesten: ik spreek de taal van zowel de tiener als de senior.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Auteur & expert:</strong> Ik schrijf regelmatig voor platformen zoals Mamabaas.</li>
            <li><strong>Podcasts:</strong> Je kunt me vaak horen als gast in diverse podcasts over digitalisering.</li>
            <li><strong>Gids:</strong> Ik help gezinnen en ouderen om met vertrouwen en plezier hun weg te vinden in de digitale wereld.</li>
          </ul>

          <p className="mt-8 font-medium text-vives-teal">
            Mijn doel? Zorgen dat jij, ongeacht je leeftijd of achtergrond, technologie niet alleen begrijpt, maar er ook veilig en slim de vruchten van plukt.
          </p>
        </div>
      </div>
    </section>
  );
}

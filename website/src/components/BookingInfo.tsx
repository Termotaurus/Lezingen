import React from "react";
import ObfuscatedEmail from "./ObfuscatedEmail";

export default function BookingInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg prose-headings:text-vives-teal prose-a:text-vives-red mx-auto text-gray-700">
          <h2 className="text-3xl font-bold text-vives-teal mb-6">Klaar voor een jaar vol groei?</h2>

          <p>
            Bedankt voor je enorme enthousiasme! Voor het schooljaar '25-'26 zijn onze vormingen momenteel volledig volgeboekt.
          </p>

          <p>
            Wil je er de volgende keer als eerste bij zijn? Noteer <strong>15 juni 2026</strong> dan met stip in je agenda. Dan openen we de inschrijvingen voor het nieuwe seizoen. Wees er snel bij, want de plaatsen zijn beperkt en de kalender loopt razendsnel vol!
          </p>

          <p>
            <strong>Zo meld je je aan:</strong> Stuur je aanvraag naar <ObfuscatedEmail email="tom.termote@vives.be" />. Hoe flexibeler je aanvraag (qua datum en locatie), hoe groter de kans dat we een match vinden in onze planning.
          </p>

          <p className="mt-8 font-medium italic text-vives-teal">
            Samen bouwen we aan de toekomst bij <a href="https://www.vives.be/nl/continue">VIVES Continue</a>: de plek voor levenslang leren en inspiratie.
          </p>
        </div>
      </div>
    </section>
  );
}

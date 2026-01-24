import React from "react";

export default function KalenderPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-vives-teal mb-8">
          Beschikbaar vanaf september 2026
        </h1>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-lg aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
             <span className="text-gray-400 font-medium text-xl">Coming Soon</span>
          </div>
        </div>

        <p className="text-lg text-gray-600">
            De kalender wordt binnenkort opengesteld. Houd deze pagina in de gaten!
        </p>
      </div>
    </section>
  );
}

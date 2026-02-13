import React from "react";
import Link from "next/link";

interface RecommendationItem {
  title: string;
  description: string;
  url: string;
  category: "Lezen" | "Audiovisueel";
}

const recommendationItems: RecommendationItem[] = [
  {
    title: "The amazing generation",
    description: "Hoe kom je los van je telefoon?",
    url: "https://www.standaardboekhandel.be/p/the-amazing-generation-9789025914264",
    category: "Lezen",
  },
  {
    title: "Mentaal kapitaal voor jongeren",
    description: "Zo vergroot je de veerkracht en focus van je tiener",
    url: "https://www.betterminds.com/nl/books/mentaal-kapitaal-voor-jongeren",
    category: "Lezen",
  },
  {
    title: "Focus is het nieuwe goud",
    description: "Efficiënt werken en stressvrij leven in een wereld vol afleiding",
    url: "https://elkegeraerts.com/nl/boek-focus-is-het-nieuwe-goud/",
    category: "Lezen",
  },
  {
    title: "Inside",
    description: "Bo Burnham filmde deze muzikale comedyspecial in zijn eentje tijdens een zeer ongebruikelijk jaar. Hij is ook de enige acteur.",
    url: "https://www.netflix.com/be/title/81289483",
    category: "Audiovisueel",
  },
  {
    title: "VPRO Tegenlicht",
    description: "Heel wat kritische documentaires over nieuwe media en de samenleving",
    url: "https://tegenlicht.vpro.nl/",
    category: "Audiovisueel",
  },
];

export default function AanradersPage() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-vives-teal mb-4">Aanraders</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Een lijst van boeken en films die ik de moeite waard vind om te bekijken om te reflecteren over de topics waarover ik spreek.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recommendationItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full mb-2 ${
                    item.category === "Lezen"
                      ? "text-vives-teal bg-teal-50"
                      : "text-vives-red bg-red-50"
                  }`}>
                    {item.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-vives-red font-medium hover:text-red-700 transition-colors group"
                  >
                    Bekijk
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

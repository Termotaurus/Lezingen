import React from "react";
import Link from "next/link";

interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Radio 1: De wereld vandaag",
    description: "Interview over TikTok en Europese regelgeving",
    url: "https://www.vrt.be/vrtmax/luister/radio/d/de-wereld-vandaag~11-10/de-wereld-vandaag~11-35604-0/fragment~b01a5dcb-b666-4242-8f8b-5971785e0475/",
    category: "Interview",
  },
  {
    title: "Interview met de krant De Morgen",
    description: "\"We laten onze kinderen massaal in de steek\": expert over schermgebruik.",
    url: "https://www.demorgen.be/tech-wetenschap/we-laten-onze-kinderen-massaal-in-de-steek-expert-over-schermgebruik~b18931da/",
    category: "Interview",
  },
  {
    title: "Auteur Mamabaas en Tieners in huis",
    description: "Als expert en auteur deel ik mijn inzichten over digitale opvoeding bij Mamabaas.",
    url: "https://www.mamabaas.be/onze-experts/tom-termote",
    category: "Artikel",
  },
  {
    title: "Docent opleiding Elektronica-ICT",
    description: "Docent aan de bacheloropleiding Elektronica-ICT bij VIVES Technology.",
    url: "https://www.vives.be/nl/technology/elektronica-ict",
    category: "Onderwijs",
  },
  {
    title: "Docent opleiding Zorg- en sporttechnologie",
    description: "Docent aan de bacheloropleiding Zorg- en sporttechnologie bij VIVES Gezondheidszorg.",
    url: "https://www.vives.be/nl/gezondheidszorg-technology/sporttechnologie",
    category: "Onderwijs",
  },
  {
    title: "Podcast: Ouders komen SAMEN van Mars",
    description: "Te gast in de podcast over opvoeden in een digitaal tijdperk.",
    url: "https://open.spotify.com/episode/5s60mv5CrYB5JPu7EB58r6",
    category: "Podcast",
  },
  {
    title: "Special: Ouders komen SAMEN van Mars",
    description: "\"Snapchat: echt een vuilbak?\" Een waarschuwing voor ouders over de risico's.",
    url: "https://www.mamabaas.be/kids/opvoeding/snapchat-echt-een-vuilbak-tom-termote-waarschuwt-ouders-ze-krijgen-dpics-binnen",
    category: "Podcast",
  },
  {
    title: "Podcast: Ip de kaffie",
    description: "De menselijke factor van cybersecurity: een gesprek over veiligheid en gedrag.",
    url: "https://open.spotify.com/episode/51OVGQuZ1pyyhWaqWO05cG",
    category: "Podcast",
  },
  {
    title: "Op papier Podcast",
    description: "Gesprek over wat mij creatief drijft om te doen wat ik doe",
    url: "https://open.spotify.com/episode/3gFVknsUKXlQ7miBwcrJCq",
    category: "Podcast",
  },
];

export default function PublicatiesPage() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-vives-teal mb-4">Online Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Een overzicht van interviews, artikels, podcasts en mijn werk in het onderwijs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-vives-teal bg-teal-50 rounded-full mb-2">
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
                    Lees meer
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

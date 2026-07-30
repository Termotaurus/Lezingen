import React from "react";
import Link from "next/link";

interface RecommendationItem {
  title: string;
  description: string;
  url: string;
  category: "Lezen" | "Audiovisueel" | "Vorming en informatie";
}

const recommendationItems: RecommendationItem[] = [
  {
    title: "Bad News",
    description: "Een interactief online spel waarin spelers zelf in de schoenen van een fake news-verspreider stappen. Door de mechanismen achter desinformatie en manipulatie te doorgronden, word je beter bestand tegen nepnieuws.",
    url: "https://www.getbadnews.com/nl",
    category: "Vorming en informatie",
  },
  {
    title: "Mediawijs",
    description: "Het Vlaams Kenniscentrum Digitale en Mediawijsheid met informatie en materialen voor iedereen die actief en kritisch wil omgaan met digitale technologie.",
    url: "https://www.mediawijs.be/nl",
    category: "Vorming en informatie",
  },
  {
    title: "Kids Unplugged",
    description: "Een beweging van ouders en experts die pleiten voor het uitstellen van smartphonegebruik bij kinderen om de kindertijd te beschermen.",
    url: "https://www.kidsunplugged.be/",
    category: "Vorming en informatie",
  },
  {
    title: "MediaNest",
    description: "Dé website over mediaopvoeding waar ouders terecht kunnen voor een antwoord op al hun vragen over de digitale wereld van hun kind.",
    url: "https://www.medianest.be/",
    category: "Vorming en informatie",
  },
  {
    title: "Digisaurus",
    description: "Inspiratie en versterking voor ouders en opvoeders die zich soms een 'dinosaurus' voelen in de digitale leefwereld van kinderen en jongeren.",
    url: "https://www.digisaurus.be/",
    category: "Vorming en informatie",
  },
  {
    title: "Mediavista",
    description: "Partner voor lezingen en workshops over mediawijsheid en cyberbewustzijn, met een focus op preventie en sensibilisering.",
    url: "https://www.mediavista.be/",
    category: "Vorming en informatie",
  },
  {
    title: "Francien Regelink",
    description: "Ervaringsdeskundige en expert op het gebied van online shaming en sexting, die het gesprek hierover op een rake manier aangaat.",
    url: "https://francienregelink.nl/",
    category: "Vorming en informatie",
  },
  {
    title: "Schermwijs",
    description: "Een onmisbaar boek vol praktische tips, inzichten en handvatten voor ouders en opvoeders om kinderen en jongeren wegwijs te maken in de digitale wereld en hen op te voeden tot bewuste mediagebruikers.",
    url: "https://www.lannoo.com/nl-nl/gezin-relaties/schermwijs-9789059969346",
    category: "Lezen",
  },
  {
    title: "Waarom een smartphone kan wachten",
    description: "Dit boek toont aan de hand van wetenschappelijke inzichten en getuigenissen waarom het loont om het smartphonegebruik bij jonge kinderen uit te stellen, met praktische tips om hiermee aan de slag te gaan.",
    url: "https://www.borgerhoff-lamberigts.be/shop/boeken/waarom-een-smartphone-kan-wachten",
    category: "Lezen",
  },
  {
    title: "Goed Genoeg – Opvoeden in tijden van hoge verwachtingen",
    description: "Siska Schoeters gaat in gesprek met topexperts (waaronder Tom Termote) over de uitdagingen van het hedendaagse ouderschap. Een boek vol eerlijke antwoorden, herkenbare verhalen en concrete tips over o.a. schermtijd en sociale media.",
    url: "https://www.mamabaas.be/kids/opvoeding/het-boek-goed-genoeg-opvoeden-tijden-van-hoge-verwachtingen-van-siska-schoeters-er",
    category: "Lezen",
  },
  {
    title: "Kwetsbare jongeren begeleiden in een digitale wereld",
    description: "Een praktisch boek dat heldere antwoorden biedt op 13 concrete vragen over mediaopvoeding bij kwetsbare jongeren, gericht op professionals in de jeugdhulp en het jeugdwerk.",
    url: "https://www.mediawijs.be/nl/kwetsbarejongeren",
    category: "Lezen",
  },
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
  {
    title: "Persoonlijke playlist digitale media",
    description: "Dit is mijn persoonlijke playlist voor alles wat mij kritisch doet nadenken over digitale media.",
    url: "https://youtube.com/playlist?list=PLvPbWxMWEmalB9Kv9H6SL_mzWkEhDyJzb&si=cxn48JrPBqtZ2PQ2",
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
            Naast boeken en films zijn er ook heel wat sterke organisaties en platformen die je op weg helpen in de digitale wereld. Hieronder vind je een selectie van interessante websites en initiatieven rond mediawijsheid en online veiligheid.
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
                      : item.category === "Audiovisueel"
                      ? "text-vives-red bg-red-50"
                      : "text-blue-600 bg-blue-50"
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

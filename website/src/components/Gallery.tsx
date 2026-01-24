import Image from "next/image";

const images = [
  "/images/IMG-20241016-WA0002.jpg",
  "/images/IMG-20241016-WA0003.jpg",
  "/images/IMG-20241016-WA0004.jpg",
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-vives-teal">In Beeld</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Image
                src={src}
                alt={`Tom Termote ${index + 1}`}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

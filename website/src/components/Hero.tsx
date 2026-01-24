import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-vives-teal text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Tom Termote
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-light">
                    Docent & Cybersecurity Expert
                </p>
                <div className="h-1 w-20 bg-vives-red rounded-full"></div>
                <p className="text-lg text-gray-100 max-w-lg italic">
                    &quot;Is cybersecurity saai? Niet als je het mij vraagt.&quot;
                </p>
            </div>

             <div className="relative h-[400px] w-full lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-gray-800">
                <Image
                    src="/images/IMG-20241016-WA0002.jpg"
                    alt="Tom Termote"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>

        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-vives-red rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
}

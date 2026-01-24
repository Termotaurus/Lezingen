import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-20 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
           <Image
            src="/images/CONTINUE_VIVES_RGB_LOGO.png"
            alt="VIVES Logo"
            width={150}
            height={50}
            className="h-10 w-auto object-contain mb-4"
          />
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} VIVES Hogeschool. All rights reserved.
          </p>
        </div>

        <div className="text-gray-600 text-sm text-center md:text-right">
           <p className="font-semibold text-vives-teal">Tom Termote</p>
           <p>Docent ICT en publiek spreker over mediawijsheid en cyberveiligheid</p>
        </div>
      </div>
    </footer>
  );
}

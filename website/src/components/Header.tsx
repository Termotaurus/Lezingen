import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/CONTINUE_VIVES_RGB_LOGO.png"
            alt="VIVES Logo"
            width={150}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/bio" className="text-gray-700 hover:text-vives-teal font-medium transition-colors">
            Wie ben ik?
          </Link>
          <Link href="/praktische-info" className="text-gray-700 hover:text-vives-teal font-medium transition-colors">
            Praktische info
          </Link>
          <Link href="#" className="bg-vives-red text-white px-6 py-2.5 rounded-full font-medium hover:bg-red-700 transition-colors">
            Kalender
          </Link>
        </nav>
      </div>
    </header>
  );
}

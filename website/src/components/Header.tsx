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
      </div>
    </header>
  );
}

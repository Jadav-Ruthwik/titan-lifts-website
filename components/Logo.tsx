import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="TITAN LIFTS"
        width={220}
        height={90}
        priority
        className="h-14 w-auto object-contain"
      />
    </Link>
  );
}

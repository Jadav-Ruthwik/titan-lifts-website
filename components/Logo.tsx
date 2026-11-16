import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/titan-lifts-logo.png"
        alt="TITAN LIFTS"
        width={220}
        height={90}
        priority
        className={`h-14 w-auto object-contain ${
          light ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}

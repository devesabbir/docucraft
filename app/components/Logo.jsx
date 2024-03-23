import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          width={100}
          height={24}
          src="/icons/logo.svg"
          alt="Protocol"
          className="h-6 w-auto"
        />
      </Link>
    </div>
  );
}

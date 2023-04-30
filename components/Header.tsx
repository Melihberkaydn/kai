import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "./Icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <SiteIcon />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight align-text-top">
          KAi
        </h1>
      </Link>
    </header>
  );
}

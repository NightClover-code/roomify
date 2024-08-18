import { satoshi } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-2 text-2xl font-bold">
        <Image src="/logo.svg" alt="Roomify Logo" width={33} height={30} />
        <h1 className={cn("font-bold", satoshi.className)}>Roomify</h1>
      </div>
    </Link>
  );
}

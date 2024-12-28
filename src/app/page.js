"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href={"/3.pages-and-layout/About"}>About</Link>
      <br />
      <Link href={"/1.Route/Home"}>Home</Link>
      <br />
      <button onClick={() => router.push("/1.Route/Home")}>Home</button>
      <br />
      <Link href={"/2.linking-and-navigating/contact/986"}>Click Me</Link>
    </div>
  );
}

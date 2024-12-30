"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Link href={"/3.pages-and-layout/About"}>About</Link>
      <br />
      <Link href={"/1.Route/Home"}>Home</Link>
      <br />
      <button
        className="p-4 bg-red-500"
        onClick={() => router.push("/1.Route/Home")}
      >
        Home
      </button>
      <br />
      <Link href={"/2.linking-and-navigating/contact/986"}>Click Me</Link>
    </div>
  );
}

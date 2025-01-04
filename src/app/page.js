// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div className="">
//       <Link href={"/3.pages-and-layout/About"}>About</Link>
//       <br />
//       <Link href={"/1.Route/Home"}>Home</Link>
//       <br />
//       <button
//         className="p-4 bg-red-500"
//         onClick={() => router.push("/1.Route/Home")}
//       >
//         Home
//       </button>
//       <br />
//       <Link href={"/admin2"}>Gallery</Link>
//       <br />
//       <Link href={"/2.linking-and-navigating/contact/986"}>Click Me</Link>
//     </div>
//   );
// }

export async function getData() {
  //{cache:"no-cache"}
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
    next: { revalidate: 60 }, //60seconds
  });
  if (!res.ok) {
    throw Error("cannot get data on fetch !");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="">
      <h1>DAta fetching</h1>
      <img src={data?.message} alt="dog-api" />
    </div>
  );
}

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

// //Data Fetching on the Server with Fetch API

// export async function getData() {
//   //{cache:"no-cache"}
//   const res = await fetch("https://dog.ceo/api/breeds/image/random", {
//     cache: "no-store",
//     next: { revalidate: 60 }, //60seconds
//   });
//   if (!res.ok) {
//     throw Error("cannot get data on fetch !");
//   }
//   return res.json();
// }

// export default async function Home() {
//   const data = await getData();
//   return (
//     <div className="">
//       <h1>DAta fetching</h1>
//       <img src={data?.message} alt="dog-api" />
//     </div>
//   );
// }

//Data fetching on the Client using third party libraries SWR(react hook for data fetching)

//SWR is lightweight ,realTime,suspense,pagination,SSR(serverside rendering)/SSG(static side generation) ready ,Typescript Ready etc
//npm i swr

// "use client";
// import useSWR from "swr";
// export function getData() {
//   const fetcher = (url) => fetch(url).then((r) => r.json());
//   const { data, error, isLoading } = useSWR(
//     "https://dog.ceo/api/breeds/image/random",
//     fetcher
//   );

//   return data;
// }

// export async function fetcher(url) {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw Error("no response found");
//   }
//   return res.json();
// }

// export default function Home() {
//   // const data = getData();
//   const { data, error, isLoading, isValidating, mutate } = useSWR(
//     "https://dog.ceo/api/breeds/image/random",
//     fetcher,
//     { refreshInterval: 1000 }
//   );

//   if (error) throw "Error";
//   if (isLoading) return <>loading...</>;

//   return (
//     <div className="">
//       <h1>DAta fetching</h1>
//       <img src={data?.message} alt="dog-api" />
//     </div>
//   );
// }

"use client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["dogAPI"],
    queryFn: () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .catch((err) => {
          throw new Error("Failed to fetch dog image");
        }),
    refetchInterval: 2000,
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data Fetching</h1>
      {data && <img src={data?.message} alt="dog-api" />}
    </div>
  );
}

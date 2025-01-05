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

//React query

// "use client";
// import { useQuery } from "@tanstack/react-query";
// import Script from "next/script";
// // import { openFullscreen } from "../../public/fullscreen";

// export default function Home() {
//   const { isLoading, isError, data, error } = useQuery({
//     queryKey: ["dogAPI"],
//     queryFn: () =>
//       fetch("https://dog.ceo/api/breeds/image/random")
//         .then((res) => res.json())
//         .catch((err) => {
//           throw new Error("Failed to fetch dog image");
//         }),
//     refetchInterval: 2000,
//   });

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {/* <h1>Data Fetching</h1> */}
//       {/* {data && <img src={data?.message} alt="dog-api" />} */}
//       <Script src="fullscreen.js" onLoad={() => console.log("success")} />
//       <div>
//         <div className="flex justify-between gap-4 m-4">
//           <h2> Video</h2>
//           <button
//             onClick={openFullscreen}
//             className="px-4 py-2 bg-slate-400 rounded-lg"
//           >
//             {" "}
//             full screen
//           </button>
//         </div>
//         <video src="rain.mp4" width="100%" controls id="myVideo">
//           <source src="rain.mp4" type="video/mp4" />
//         </video>
//       </div>
//     </>
//   );
// }

//seo
// import Link from "next/link";
// export default function Home (){
//   return (
//     <>
//     <Link href={"/about"}>about</Link></>
//   )
// }

// Lazy Loading
"use client";
import dynamic from "next/dynamic";
import { useState, Suspense, lazy } from "react";

const ComponentA = dynamic(() => import("@components/componentA"));
const ComponentB = lazy(() => import("@components/componentB"), {
  loading: () => <>Please wait for component B.....</>,
});
const ComponentC = dynamic(() => import("@components/componentC"), {
  ssr: false,
});
export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="p-20">
        {/* client bundle separately loaded */}
        {/* loaded sever side */}
        <ComponentA />

        {/* show or hide component when neded */}
        <button
          className="rounded px-3 py-1 bg-red-500 m-4"
          onClick={() => setShow(!show)}
        >
          Show
        </button>
        {show && (
          <Suspense fallback={<>loading....</>}>
            <ComponentB />
          </Suspense>
        )}

        {/* dirctly loaded to client side */}
        <ComponentC />
      </div>
    </>
  );
}

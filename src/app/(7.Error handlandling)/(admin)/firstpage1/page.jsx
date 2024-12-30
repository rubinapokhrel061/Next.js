// //streaming with suspense
// import { Suspense } from "react";
// import UserData from "../../../../../components/UserData";
// import WeatherData from "../../../../../components/weatherData";

// //http://localhost:3000/firstpage
// export default function FirstPage() {
//   return (
//     <>
//       <section>
//         <Suspense fallback={<>UserData loading...</>}>
//           <UserData />
//         </Suspense>{" "}
//         <Suspense fallback={<>WeatherData loading...</>}>
//           <WeatherData />
//         </Suspense>
//       </section>
//     </>
//   );
// }

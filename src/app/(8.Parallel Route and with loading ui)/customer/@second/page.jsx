"use client";

import { useState } from "react";

export default async function SecondSection() {
  const [number, setNumber] = useState(null);

  setTimeout(() => {
    setNumber(Math.floor(Math.random() * 1000) + 1);
  }, 5000);

  return (
    <div className="flex-1 w-20 bg-red-500 p-2 font-bold">
      Second Number is {number}
    </div>
  );
}

//parallel route lai component jasari use garna sakinxa parallel rote ko path bandaina tara layout ma parallel display garauna sakinxa
"use client";
import { useState } from "react";

export default async function firstSection() {
  const [number, setNumber] = useState(null);
  setTimeout(() => {
    setNumber(Math.floor(Math.random() * 1000) + 1);
  }, 5000);
  return (
    <div className="flex-1 w-20 bg-blue-500  p-2 font-bold">
      first Number is {number}
    </div>
  );
}

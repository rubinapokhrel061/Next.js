"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <p>Something went wrong.</p>
      <button onClick={reset}>Try Again</button>
    </>
  );
}

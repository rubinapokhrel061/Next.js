"use client";
import { useSession } from "next-auth/react";

export default function client() {
  const { data: session } = useSession();
  return (
    <>
      <div>
        <p>Congratulations! Welcome to the client page.</p>
        <h1>User Info:</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </>
  );
}

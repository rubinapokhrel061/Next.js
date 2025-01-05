"use client";
import { useSession } from "next-auth/react";

export default function client() {
  const { data: session } = useSession();
  return (
    <>
      <div>
        <p>Congratulations! Welcome to the client page.</p>
        <h1>User Info:</h1>
        <div className="max-w-2xl">
          <pre className="whitespace-pre-wrap break-words">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}

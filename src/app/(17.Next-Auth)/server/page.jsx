import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Server() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <p>Congratulations! Welcome to the server page.</p>
      <h1>User Info:</h1>
      <div className="max-w-md flex flex-wrap">{JSON.stringify(session)}</div>
    </div>
  );
}

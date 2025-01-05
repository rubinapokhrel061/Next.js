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
    <div>
      <p>Congratulations! Welcome to the server page.</p>
      <h1>User Info:</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}

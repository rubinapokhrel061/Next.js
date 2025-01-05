import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";
import { auth } from "../../../../../../firebase/firebase";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (email.length === 0) throw new Error("email must not be empty");
    if (password.length === 0) throw new Error("password must not be empty");
    if (password.length < 0)
      throw new Error("Password must be atleast 6 character long");

    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    return NextResponse.json({
      message: "Successfully Login!!",
      satus: 201,
      user,
    });
  } catch (error) {
    return NextResponse.json({ message: `${error}`, satus: 500 });
  }
}

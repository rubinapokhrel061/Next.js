import { NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase";

export async function GET(request) {
  try {
    const temArr = [];
    const querySnapshot = await getDocs(collection(db, "Photos"));
    querySnapshot.forEach((doc) => {
      temArr.push({ id: doc.id, ...doc.data() });
    });
    return NextResponse.json({ message: "success", status: 200, data: temArr });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
export async function POST(request) {
  try {
    const data = await request.json();
    const title = data?.title;
    const description = data?.description;
    const url = data?.url;
    console.log(title, description, url);
    const docRef = await addDoc(collection(db, "Photos"), {
      title,
      description,
      url,
    });

    return NextResponse.json({
      message: "successfully posted a photo.",
      docId: docRef.id,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

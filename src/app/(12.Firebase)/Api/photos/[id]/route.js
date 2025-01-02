import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase/firebase";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  try {
    const res = await request.json();
    const id = params?.id;
    const photoRef = doc(db, "Photos", id);

    await updateDoc(photoRef, res);
    return NextResponse.json({
      message: "Successfully Update the Photo",
      status: 201,
      res,
    });
  } catch (error) {
    return NextResponse.json({ message: `${error}` });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params?.id;
    await deleteDoc(doc(db, "Photos", id));
    return NextResponse.json({ message: "Successfully delete the Photo" });
  } catch (error) {
    return NextResponse.json({ message: `${error}` });
  }
}

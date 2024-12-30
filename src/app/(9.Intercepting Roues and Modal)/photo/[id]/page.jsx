"use client";

import { useEffect, useState } from "react";

import photos from "../../../../../components/photo";
import { use } from "react";
import Modal from "../../../../../components/ModalContainer";
import { useRouter } from "next/navigation";

export default function Gallery({ params }) {
  const { id } = use(params);
  const [photo, setPhoto] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const foundPhoto = photos.find((p) => p.id === Number(id));
    setPhoto(foundPhoto);
  }, [id]);

  return (
    <>
      {/* {" "}
      <button
        className="absolute right-4 top-4 text-4xl"
        onClick={() => router.back()}
      >
        x
      </button> */}
      <Modal photo={photo} />
    </>
  );
}

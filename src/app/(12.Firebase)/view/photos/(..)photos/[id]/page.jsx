"use client";

import { useEffect, useState } from "react";
import { use } from "react";

import { useRouter } from "next/navigation";
import Modal from "../../../../../../../components/ModalContainer";
import axios from "axios";
export default function PhotoModal({ params }) {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    axios.get("http://localhost:3000/Api/photos").then((res) => {
      setPhotos(res.data?.data);
    });
  };
  useEffect(() => {
    getPhotos();
  }, []);

  const { id } = use(params);
  console.log(id);
  const router = useRouter();

  const photo = photos.find((p) => p.id === id);

  return (
    <>
      <button
        className="absolute right-4 top-4 text-4xl"
        onClick={() => router.back()}
      >
        x
      </button>{" "}
      <Modal photo={photo} />
    </>
  );
}

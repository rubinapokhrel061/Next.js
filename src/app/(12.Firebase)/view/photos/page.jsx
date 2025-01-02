"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const getPhotos = () => {
    axios.get("http://localhost:3000/Api/photos").then((res) => {
      setPhotos(res.data?.data);
    });
  };
  useEffect(() => {
    getPhotos();
  }, []);
  console.log(photos);
  return (
    <div className=" text-center backdrop: bg-green-500  p-2 font-bold">
      <div className="flex gap-2 justify-between mx-6">
        {" "}
        <h3>The Gallery</h3>
        <Link
          href={"/view/addphoto"}
          className="px-3 py-2 bg-yellow-800 text-white rounded-xl"
        >
          Add Photo
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {photos.map((p) => {
          return (
            <Link href={`/view/photos/${p.id}`} key={p.id}>
              <img src={p?.url} alt={p.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

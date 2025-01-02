import axios from "axios";
import Link from "next/link";

import { redirect } from "next/navigation";
export default function Modal({ photo }) {
  if (!photo) {
    return <div>Photo not found</div>;
  }
  const deletePhoto = () => {
    axios.delete(`http://localhost:3000/Api/photos/${photo.id}`).then((res) => {
      alert(res.data.message);
      redirect("/view/photos");
    });
  };
  return (
    <>
      <section className="grid grid-cols-2 gap-4 p-28">
        <img
          src={photo?.url}
          alt={photo?.description}
          height={500}
          width={500}
          priority="true"
        />
        <div>
          <h1 className="text-3xl text-center p-2">{photo?.title}</h1>
          <p className="text-3xl text-center p-2">{photo?.description}</p>
        </div>
      </section>
      <div className="mx-auto w-[80%] flex gap-5">
        <Link
          href={`/view/updatephoto/${photo.id}`}
          className="px-3 py-2 bg-yellow-800 text-white rounded-xl"
        >
          Update Photo
        </Link>
        <button
          onClick={deletePhoto}
          className="px-3 py-2 bg-yellow-800 text-white rounded-xl"
        >
          Delete Photo
        </button>
      </div>
    </>
  );
}

import Link from "next/link";
import photos from "../../../../components/photo";

export default function AdminSection() {
  return (
    <div className=" text-center backdrop: bg-green-500  p-2 font-bold">
      <h3>The Gallery</h3>
      <div className="grid grid-cols-4 gap-4">
        {photos.map((p) => {
          return (
            <Link href={`/photo/${p.id}`}>
              <img src={p?.["image-url"]} alt={p.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

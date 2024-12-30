export default function Modal({ photo }) {
  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <section className="grid grid-cols-2 gap-4 p-28">
      <img
        src={photo["image-url"]}
        alt={photo.description}
        height={500}
        width={500}
        priority
      />
      <div>
        <h2 className="text-3xl text-center p-2">{photo.description}</h2>
      </div>
    </section>
  );
}

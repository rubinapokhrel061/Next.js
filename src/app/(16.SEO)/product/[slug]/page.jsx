export default function product({ params }) {
  return (
    <>
      <div>this is product of {params?.slug}</div>
    </>
  );
}

export function generateMetadata({ params }) {
  return {
    title: params?.slug,
    description: "product description",
    openGraph: {
      title: params?.slug,
      description: params.slug + "Product Description",
    },
  };
}

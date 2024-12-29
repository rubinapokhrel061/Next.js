// http://localhost:3000/product/someproduct/mobile
// http://localhost:3000/product/someproduct/laptop
export default function ProductDetails({ params }) {
  return <>This is {params.slug}</>;
}

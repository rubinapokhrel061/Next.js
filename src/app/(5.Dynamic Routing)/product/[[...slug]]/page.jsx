//Optional Catch all Segment ->[[...Name]]  get all this type page

// http://localhost:3000/product
// http://localhost:3000/product/laptop
// http://localhost:3000/product/laptop/lenovo

export default function ProductDetails({ params }) {
  return <>This is from Optional Catch all Segment {JSON.stringify(params)}</>;
}

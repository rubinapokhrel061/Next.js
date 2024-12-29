// Catch all segment -[...slug]

// http://localhost:3000/product/someproduct/mobile
// mobile slug paxiko laii nii accesss garna like..
//  http://localhost:3000/product/someproduct/mobile/nokia
export default function ProductDetails({ params }) {
  return (
    <>
      This is {params.slug}
      <br></br>
      This is from catch all segment {JSON.stringify(params)}
    </>
  );
}

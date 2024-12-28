export default async function Contact({ params }) {
  const slug = await params.slug;
  return <> This is {slug} </>;
}

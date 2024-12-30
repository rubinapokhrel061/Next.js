export default function AdminLayout({ children, first, second }) {
  return (
    <section className="flex gap-2">
      {children}
      {first}
      {second}
    </section>
  );
}

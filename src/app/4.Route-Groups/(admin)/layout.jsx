export default function AdminLayout({ children }) {
  return (
    <>
      {" "}
      <aside
        id="sidebar"
        className="bg-white dark:bg-gray-800 w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out transform -translate-x-full"
      >
        sidebar
      </aside>
      {children}
    </>
  );
}

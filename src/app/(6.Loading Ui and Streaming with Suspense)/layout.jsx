import { Suspense } from "react";
import Sidebar from "../../../components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <>
      <Suspense fallback={<>Loading ui part</>}>
        <aside
          id="sidebar"
          className="bg-white dark:bg-gray-800 w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out transform -translate-x-full"
        >
          sidebar
        </aside>
        {/* sidebar laii component banayera nii garna sakinxa like */}
        <Sidebar />
        {children}
      </Suspense>
    </>
  );
}

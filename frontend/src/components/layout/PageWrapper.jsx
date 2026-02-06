import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function PageWrapper({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

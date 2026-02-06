import Navbar from "../../components/layout/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar title="Admin Dashboard" />
      <div className="p-6">Welcome Admin</div>
    </>
  );
}

import PageWrapper from "../../components/layout/PageWrapper";

export default function AdminDashboard() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>System overview, metrics, analytics...</p>
    </PageWrapper>
  );
}

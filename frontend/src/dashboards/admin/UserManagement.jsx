import PageWrapper from "../../components/layout/PageWrapper";

export default function UserManagement() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Staff Management
      </h2>

      <div className="bg-white p-6 rounded-xl shadow border">
        <p>Staff accounts, permissions & roles</p>
      </div>
    </PageWrapper>
  );
}

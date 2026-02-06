import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/layout/PageWrapper";
import { getCustomer } from "../../services/customerService";

export default function CustomerProfile() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await getCustomer(id);
    setCustomer(res.data);
  };

  if (!customer) return <p>Loading...</p>;

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Customer Profile
      </h2>

      <div className="bg-white p-6 rounded-xl shadow max-w-3xl">
        <div className="grid md:grid-cols-2 gap-4">
          <ProfileItem label="Full Name" value={customer.full_name} />
          <ProfileItem label="Phone" value={customer.phone} />
          <ProfileItem label="National ID" value={customer.national_id} />
          <ProfileItem label="Address" value={customer.address} />
          <ProfileItem label="Risk Score" value={customer.risk_score || "N/A"} />
        </div>
      </div>
    </PageWrapper>
  );
}

function ProfileItem({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

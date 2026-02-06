export default function CustomerList() {
  return <div className="p-6">Customer List</div>;
}

import PageWrapper from "../../components/layout/PageWrapper";

export default function CustomerList() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <p>Customer records appear here...</p>
    </PageWrapper>
  );
}


import { useEffect, useState } from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import { getCustomers } from "../../services/customerService";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  const filtered = customers.filter((c) =>
    c.full_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">Customers</h2>

      <input
        className="border p-2 rounded w-full max-w-sm mb-4"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.full_name}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.national_id}</td>
                <td className="p-3">
                  <a
                    href={`/officer/customers/${c.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}

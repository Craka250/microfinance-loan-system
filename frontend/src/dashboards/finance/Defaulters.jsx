import { useEffect, useState } from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import { getDefaulters } from "../../services/paymentService";

export default function Defaulters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getDefaulters();
    setData(res.data);
  };

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Defaulters List
      </h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Customer</th>
              <th className="p-3">Loan Amount</th>
              <th className="p-3">Outstanding</th>
              <th className="p-3">Days Late</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d) => (
              <tr key={d.loan_id} className="border-t">
                <td className="p-3">{d.customer}</td>
                <td className="p-3">KES {d.amount}</td>
                <td className="p-3">KES {d.balance}</td>
                <td className="p-3 text-red-600 font-semibold">
                  {d.daysLate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}

import { useEffect, useState } from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import { getLoans } from "../../services/loanService";

export default function LoanStatus() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    loadLoans();
  }, []);

  const loadLoans = async () => {
    const res = await getLoans();
    setLoans(res.data);
  };

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Loan Status Tracking
      </h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Balance</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id} className="border-t">
                <td className="p-3">{loan.customer_name}</td>
                <td className="p-3">KES {loan.amount}</td>
                <td className="p-3">KES {loan.balance}</td>
                <td className="p-3">{loan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}

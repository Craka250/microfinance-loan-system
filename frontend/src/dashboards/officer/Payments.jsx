import { useState } from "react";
import toast from "react-hot-toast";
import PageWrapper from "../../components/layout/PageWrapper";
import TextInput from "../../components/inputs/TextInput";
import SelectInput from "../../components/inputs/SelectInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { makePayment } from "../../services/paymentService";

export default function Payments() {
  const [form, setForm] = useState({
    loan_id: "",
    amount: "",
    method: "CASH",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await makePayment(form);
      toast.success("Payment recorded successfully");
      setForm({ loan_id: "", amount: "", method: "CASH" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Record Payment
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-xl"
      >
        <TextInput
          label="Loan ID"
          value={form.loan_id}
          onChange={(e) =>
            setForm({ ...form, loan_id: e.target.value })
          }
        />

        <TextInput
          label="Amount Paid (KES)"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <SelectInput
          label="Payment Method"
          value={form.method}
          onChange={(e) =>
            setForm({ ...form, method: e.target.value })
          }
          options={["CASH", "MPESA", "BANK"]}
        />

        <PrimaryButton loading={loading}>
          Submit Payment
        </PrimaryButton>
      </form>
    </PageWrapper>
  );
}

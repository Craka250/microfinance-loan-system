import { useState } from "react";
import toast from "react-hot-toast";
import PageWrapper from "../../components/layout/PageWrapper";
import TextInput from "../../components/inputs/TextInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import api from "../../services/api";

export default function MpesaPayment() {
  const [form, setForm] = useState({
    phone: "",
    amount: "",
    loan_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/payments/mpesa", form);
    toast.success("STK push sent to customer");

    setForm({ phone: "", amount: "", loan_id: "" });
  };

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        M-Pesa Payment
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-xl"
      >
        <TextInput
          label="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <TextInput
          label="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <TextInput
          label="Loan ID"
          value={form.loan_id}
          onChange={(e) =>
            setForm({ ...form, loan_id: e.target.value })
          }
        />

        <PrimaryButton>Send STK Push</PrimaryButton>
      </form>
    </PageWrapper>
  );
}

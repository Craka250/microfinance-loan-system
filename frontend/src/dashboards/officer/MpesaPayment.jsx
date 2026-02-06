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
  };

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        M-Pesa Payment
      </h2>

      <form className="bg-white p-6 rounded-xl shadow max-w-xl">
        <TextInput label="Phone Number" />
        <TextInput label="Amount" />
        <TextInput label="Loan ID" />

        <PrimaryButton>Send STK Push</PrimaryButton>
      </form>
    </PageWrapper>
  );
}

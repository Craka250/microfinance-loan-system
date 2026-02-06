import { useState } from "react";
import toast from "react-hot-toast";
import PageWrapper from "../../components/layout/PageWrapper";
import TextInput from "../../components/inputs/TextInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { createCustomer } from "../../services/customerService";

export default function CustomerCreate() {
  const [form, setForm] = useState({
    full_name: "",
    national_id: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createCustomer(form);
      toast.success("Customer registered successfully");
      setForm({ full_name: "", national_id: "", phone: "", address: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Register New Customer
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-2xl"
      >
        <TextInput
          label="Full Name"
          value={form.full_name}
          onChange={(e) =>
            setForm({ ...form, full_name: e.target.value })
          }
        />

        <TextInput
          label="National ID"
          value={form.national_id}
          onChange={(e) =>
            setForm({ ...form, national_id: e.target.value })
          }
        />

        <TextInput
          label="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <TextInput
          label="Physical Address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <PrimaryButton loading={loading}>
          Save Customer
        </PrimaryButton>
      </form>
    </PageWrapper>
  );
}

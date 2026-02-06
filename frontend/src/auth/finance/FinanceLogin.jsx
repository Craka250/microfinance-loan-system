import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { login as loginApi } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

export default function FinanceLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginApi("/finance/login", form);
      login(res.data.user, res.data.token);
      toast.success("Welcome Finance Officer");
      navigate("/finance/dashboard");
    } catch {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Finance Login</h2>

        <TextInput label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <PasswordInput label="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <PrimaryButton loading={loading}>Login</PrimaryButton>
      </form>
    </div>
  );
}

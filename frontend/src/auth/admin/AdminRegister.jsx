import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import useForm from "../../hooks/useForm";
import { register } from "../../services/authService";

export default function AdminRegister() {
  const navigate = useNavigate();
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register("/admin/register", values);
      toast.success("Account created");
      navigate("/admin/login");
    } catch {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Admin Register</h2>

        <TextInput label="Full Name" name="name" value={values.name} onChange={handleChange} />
        <TextInput label="Email" name="email" value={values.email} onChange={handleChange} />
        <PasswordInput label="Password" name="password" value={values.password} onChange={handleChange} />

        <PrimaryButton>Create Account</PrimaryButton>
      </form>
    </div>
  );
}

import toast from "react-hot-toast";
import TextInput from "../../components/inputs/TextInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import useForm from "../../hooks/useForm";

export default function AdminResetPassword() {
  const { values, handleChange } = useForm({ email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Reset link sent to email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        <TextInput label="Email" name="email" value={values.email} onChange={handleChange} />

        <PrimaryButton>Send Reset Link</PrimaryButton>
      </form>
    </div>
  );
}

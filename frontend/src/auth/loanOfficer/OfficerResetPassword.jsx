import TextInput from "../../components/inputs/TextInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import useForm from "../../hooks/useForm";

export default function OfficerResetPassword() {
  const { values, handleChange } = useForm({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        <TextInput name="email" placeholder="Email" value={values.email} onChange={handleChange} />

        <PrimaryButton text="Send Reset Link" />
      </form>
    </div>
  );
}

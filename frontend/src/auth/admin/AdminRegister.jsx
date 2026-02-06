import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import useForm from "../../hooks/useForm";

export default function AdminRegister() {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Admin Register</h2>

        <TextInput name="name" placeholder="Full Name" value={values.name} onChange={handleChange} />
        <TextInput name="email" placeholder="Email" value={values.email} onChange={handleChange} />
        <PasswordInput name="password" placeholder="Password" value={values.password} onChange={handleChange} />

        <PrimaryButton text="Create Account" />
      </form>
    </div>
  );
}

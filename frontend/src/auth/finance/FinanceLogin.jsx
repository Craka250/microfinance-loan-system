import { useState } from "react";
import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { login } from "../../services/authService";

export default function FinanceLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await login("/finance/login", { email, password });
    alert("Finance login successful");
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-20">
      <TextInput label="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <PasswordInput label="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <PrimaryButton text="Login" />
    </form>
  );
}

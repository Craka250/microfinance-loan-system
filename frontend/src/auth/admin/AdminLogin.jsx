// src/auth/admin/AdminLogin.jsx
import React, { useState } from "react";
import { TextInput } from "../../components/inputs/TextInput";
import { PasswordInput } from "../../components/inputs/PasswordInput";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import toast from "react-hot-toast";


export default function AdminLogin() {
const [form, setForm] = useState({ email: "", password: "" });
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);


const validate = () => {
const newErrors = {};
if (!form.email) newErrors.email = "Email is required";
if (!form.password) newErrors.password = "Password is required";
setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};


const handleSubmit = async (e) => {
e.preventDefault();
if (!validate()) return;


try {
    setLoading(true);
// API call placeholder
await new Promise((res) => setTimeout(res, 1000));
toast.success("Admin login successful");
} catch (err) {
toast.error("Invalid credentials");
} finally {
setLoading(false);
}
};


return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
<h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>


<TextInput
label="Email"
type="email"
value={form.email}
error={errors.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
/>
<PasswordInput
label="Password"
value={form.password}
error={errors.password}
onChange={(e) => setForm({ ...form, password: e.target.value })}
/>


<PrimaryButton label="Login" loading={loading} />
</form>
</div>
);
}
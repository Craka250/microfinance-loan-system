// src/components/inputs/PasswordInput.jsx
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


export const PasswordInput = ({ label, error, ...props }) => {
const [show, setShow] = useState(false);


return (
<div className="mb-4">
<label className={`block mb-1 text-sm font-medium ${error ? "text-red-600" : "text-gray-700"}`}>
{label}
</label>
<div className="relative">
<input
{...props}
type={show ? "text" : "password"}
className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2
${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}`}
/>
<button
type="button"
onClick={() => setShow(!show)}
className="absolute right-3 top-2.5 text-gray-500"
>
{show ? <EyeOff size={18} /> : <Eye size={18} />}
</button>
</div>
{error && <p className="text-xs text-red-600 mt-1">{error}</p>}
</div>
);
};
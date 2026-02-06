// src/components/inputs/TextInput.jsx
import React from "react";


export const TextInput = ({ label, error, ...props }) => (
<div className="mb-4">
<label className={`block mb-1 text-sm font-medium ${error ? "text-red-600" : "text-gray-700"}`}>
{label}
</label>
<input
{...props}
className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2
${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}`}
/>
{error && <p className="text-xs text-red-600 mt-1">{error}</p>}
</div>
);
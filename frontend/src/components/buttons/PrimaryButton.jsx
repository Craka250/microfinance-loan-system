// ===============================
// 2. Reusable Button
// ===============================

// src/components/buttons/PrimaryButton.jsx
export const PrimaryButton = ({ label, loading, ...props }) => (
<button
{...props}
disabled={loading}
className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
>
{loading ? "Processing..." : label}
</button>
);
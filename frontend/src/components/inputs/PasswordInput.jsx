import { useState } from "react";

export default function PasswordInput({ label, error, ...props }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...props}
          className={`w-full p-2 border rounded-lg pr-10 focus:outline-none focus:ring
          ${error ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2 text-gray-500 text-sm"
        >
          {show ? "🙈" : "👁️"}
        </button>
      </div>

      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}

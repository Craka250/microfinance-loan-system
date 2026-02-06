export default function TextInput({ label, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring
        ${error ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
      />

      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}

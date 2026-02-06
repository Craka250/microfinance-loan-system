export default function TextInput({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">{label}</label>
      <input
        {...props}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

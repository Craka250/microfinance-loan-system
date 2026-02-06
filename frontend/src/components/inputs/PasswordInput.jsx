export default function PasswordInput({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">{label}</label>
      <input
        type="password"
        {...props}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

export default function SelectInput({ label, options = [], ...props }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">{label}</label>
      <select {...props} className="w-full p-2 border rounded">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

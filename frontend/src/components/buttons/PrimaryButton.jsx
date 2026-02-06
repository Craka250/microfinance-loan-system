export default function PrimaryButton({
  children,
  loading = false,
  disabled = false,
  type = "submit",
}) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium
      hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

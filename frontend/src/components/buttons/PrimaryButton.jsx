export default function PrimaryButton({ text, loading }) {
  return (
    <button
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
      {loading ? "Please wait..." : text}
    </button>
  );
}

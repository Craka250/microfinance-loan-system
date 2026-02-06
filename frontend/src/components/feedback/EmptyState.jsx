export default function EmptyState({ title, description }) {
  return (
    <div className="text-center p-10">
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}

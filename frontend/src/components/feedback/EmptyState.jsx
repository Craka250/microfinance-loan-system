export default function EmptyState({ title, description }) {
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function Sidebar({ links = [] }) {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      {links.map((l) => (
        <div key={l.label} className="mb-2">
          {l.label}
        </div>
      ))}
    </aside>
  );
}

export default function Unauthorized() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-xl text-red-600">
        You are not authorized to view this page
      </h1>
    </div>
  );
}

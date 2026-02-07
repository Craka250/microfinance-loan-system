import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

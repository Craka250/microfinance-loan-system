import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function LineChart({ data = [], dataKey, title }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border">
      <h3 className="font-semibold mb-4">{title}</h3>

      <ResponsiveContainer width="100%" height={280}>
        <Chart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#2563eb"
            strokeWidth={3}
          />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

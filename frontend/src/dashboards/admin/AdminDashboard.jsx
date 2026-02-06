import PageWrapper from "../../components/layout/PageWrapper";
import KpiCard from "../../components/feedback/KpiCard";
import LineChart from "../../components/feedback/LineChart";
import { DASHBOARD_STATS, LOAN_CHART_DATA } from "../../utils/constants";

export default function AdminDashboard() {
  const stats = DASHBOARD_STATS;

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Business Overview
      </h2>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <KpiCard title="Total Customers" value={stats.totalCustomers} />
        <KpiCard title="Active Loans" value={stats.activeLoans} />
        <KpiCard
          title="Total Disbursed"
          value={`KES ${stats.totalDisbursed.toLocaleString()}`}
        />
        <KpiCard
          title="Total Collected"
          value={`KES ${stats.totalCollected.toLocaleString()}`}
        />
        <KpiCard title="Default Rate" value={stats.defaultRate} />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Loan Issuance Trend"
          data={LOAN_CHART_DATA}
          dataKey="loans"
        />

        <LineChart
          title="Collections Trend"
          data={LOAN_CHART_DATA}
          dataKey="loans"
        />
      </div>
    </PageWrapper>
  );
}

import PageWrapper from "../../components/layout/PageWrapper";
import KpiCard from "../../components/feedback/KpiCard";

export default function Collections() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Daily Collections
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard title="Today" value="KES 86,000" />
        <KpiCard title="This Week" value="KES 512,000" />
        <KpiCard title="This Month" value="KES 2.1M" />
      </div>
    </PageWrapper>
  );
}

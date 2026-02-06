import PageWrapper from "../../components/layout/PageWrapper";
import LineChart from "../../components/feedback/LineChart";
import { LOAN_CHART_DATA } from "../../utils/constants";

export default function LoanAnalytics() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Loan Analytics
      </h2>

      <LineChart
        title="Monthly Loan Issuance"
        data={LOAN_CHART_DATA}
        dataKey="loans"
      />
    </PageWrapper>
  );
}

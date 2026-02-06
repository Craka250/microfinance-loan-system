export default function CustomerList() {
  return <div className="p-6">Customer List</div>;
}

import PageWrapper from "../../components/layout/PageWrapper";

export default function CustomerList() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <p>Customer records appear here...</p>
    </PageWrapper>
  );
}

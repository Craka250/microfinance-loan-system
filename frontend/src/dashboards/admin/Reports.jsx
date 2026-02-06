import PageWrapper from "../../components/layout/PageWrapper";

export default function Reports() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">
        Reports Center
      </h2>

      <div className="bg-white p-6 rounded-xl shadow border">
        <p>Daily, Weekly, Monthly Financial Reports</p>

        <div className="mt-4 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Download Daily
          </button>

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Download Monthly
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}

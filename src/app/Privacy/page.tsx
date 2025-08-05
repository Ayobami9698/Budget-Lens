import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Privacy() {
  return (
    <div className="">
      <Header />
      <div className="min-h-[calc(100vh-280px)] mx-auto px-4 py-8 pt-[80px] max-w-5xl my-[70px]">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to BudgetLens. We are committed to protecting your personal
          information and your right to privacy. If you have any questions or
          concerns about our policy or our practices with regards to your
          personal information, please contact us.
        </p>
        <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We do not collect any personal information about you.
        </p>
        <h2 className="text-3xl font-bold mb-4">2. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us
          at support@BudgetLens.com
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

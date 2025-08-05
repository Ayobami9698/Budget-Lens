"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AddCircle, DocumentDownload, Logout, Tag } from "iconsax-react";
import Footer from "../components/footer";
import { useRef } from "react";

export default function DashboardContent() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "";
  const currency = searchParams.get("currency") || "";
  const income = searchParams.get("income") || "";
  const focus = searchParams.get("focus") || "";
  const budgetEncoded = searchParams.get("budget") || "";

  const [parsedBudget, setParsedBudget] = useState<
    { name: string; subcategories: { name: string; amount: number }[] }[]
  >([]);

  useEffect(() => {
    if (budgetEncoded) {
      try {
        const decoded = decodeURIComponent(budgetEncoded);
        const parsed = JSON.parse(decoded);
        setParsedBudget(parsed);
      } catch (error) {
        console.error("Error decoding budget:", error);
      }
    }
  }, [budgetEncoded]);

  const router = useRouter();

  const handleDownload = async () => {
    const html2pdf = (await import("html2pdf.js")).default;

    const element = document.body; // 🔥 Capture the whole visible page

    const options = {
      filename: "full-screen.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-300 text-gray-900 font-inter">
      <header className="fixed no-print top-0 left-0 w-full min-h-[80px] z-50 flex items-center border-collapse bg-transparent">
        <div className="container mx-auto flex gap-2 items-center py-3 px-4">
          <Image
            alt="budgetlogo"
            src="/images/BudgetLogo.png"
            width={120}
            height={120}
            className="rounded-full shadow-md shadow-black/20"
          />
          <h1 className="text-[24px] text-[#fff] font-[800]">Budget Lens</h1>
        </div>
      </header>
      <div className="no-print mt-[120px] text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md rounded-b-lg mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:scroll-mt-0">
            <button
              onClick={() => router.push("/Onboarding")}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center gap-2"
            >
              <AddCircle size="32" color="#fff" />
              Generate New Budget
            </button>
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center gap-2"
            >
              <DocumentDownload size="32" color="#fff" />
              Download Report
            </button>
            <button
              onClick={() => router.push("/")}
              className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center gap-2"
            >
              <Logout size="32" color="#fff" />
              Log Out
            </button>
          </div>
        </div>

        <p className="mt-2 text-lg text-gray-900">
          Country: <strong>{country}</strong> | Currency:{" "}
          <strong>{currency}</strong> | Income: <strong>{income}</strong>
        </p>
        <p className="text-md text-gray-700 mt-1 mb-4">
          Focus: <em>{focus}</em>
        </p>
      </div>

      {parsedBudget.length === 0 ? (
        <p className="text-center text-red-500">No budget data available.</p>
      ) : (
        <div className="space-y-8">
          {parsedBudget.map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 rounded-lg shadow-md shadow-b-lg"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {category.name}
              </h2>
              <ul className="space-y-2">
                {category.subcategories.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between border-b py-1"
                  >
                    <span className="flex gap-2">
                      <Tag size="20" color="#000" />
                      {item.name}
                    </span>
                    <span className="font-medium">
                      {currency} {item.amount.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

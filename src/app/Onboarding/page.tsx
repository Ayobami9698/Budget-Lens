"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { countries } from "@/types/countries";
import { currencies } from "@/types/currencies";

export default function Onboarding() {
  const router = useRouter();

  const [country, setCountry] = useState("Nigeria");
  const [currency, setCurrency] = useState("NGN");
  const [income, setIncome] = useState("");
  const [focus, setFocus] = useState("");

  const generateBudget = (income: string | number) => {
    const amount = parseFloat(income as string);

    const round = (num: number) => parseFloat(num.toFixed(2));

    return [
      {
        name: "Savings",
        subcategories: [
          { name: "Emergency Fund", amount: round(amount * 0.0775) },
          { name: "Retirement Fund", amount: round(amount * 0.0775) },
          { name: "Short-Term Savings", amount: round(amount * 0.0775) },
        ],
      },
      {
        name: "Investments",
        subcategories: [
          { name: "Stocks", amount: round(amount * 0.0775) },
          { name: "Bonds", amount: round(amount * 0.03875) },
          { name: "Real Estate", amount: round(amount * 0.03875) },
        ],
      },
      {
        name: "Housing",
        subcategories: [
          { name: "Rent/Mortgage", amount: round(amount * 0.155) },
          { name: "Utilities", amount: round(amount * 0.03875) },
          { name: "Property Taxes", amount: round(amount * 0.02325) },
        ],
      },
      {
        name: "Groceries",
        subcategories: [
          { name: "Food", amount: round(amount * 0.155) },
          { name: "Household Supplies", amount: round(amount * 0.02325) },
        ],
      },
      {
        name: "Transportation",
        subcategories: [
          { name: "Fuel", amount: round(amount * 0.03875) },
          { name: "Public Transport", amount: round(amount * 0.0155) },
          { name: "Maintenance", amount: round(amount * 0.02325) },
        ],
      },
      {
        name: "Entertainment",
        subcategories: [
          { name: "Movies/Shows", amount: round(amount * 0.0155) },
          { name: "Hobbies", amount: round(amount * 0.0155) },
          { name: "Dining Out", amount: round(amount * 0.0155) },
        ],
      },
      {
        name: "Healthcare",
        subcategories: [
          { name: "Medical Insurance", amount: round(amount * 0.03875) },
          { name: "Out-of-Pocket Expenses", amount: round(amount * 0.02325) },
        ],
      },
      {
        name: "Miscellaneous",
        subcategories: [
          { name: "Gifts", amount: round(amount * 0.0155) },
          { name: "Personal Care", amount: round(amount * 0.0155) },
        ],
      },
    ];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const budget = generateBudget(income);
    const encodedBudget = encodeURIComponent(JSON.stringify(budget));

    // router.push({
    //   pathname: "/dashboard",
    //   query: {
    //     country,
    //     currency,
    //     income,
    //     focus,
    //     budget: encodedBudget,
    //   },
    // });
    router.push(
      `/Dashboard?country=${country}&currency=${currency}&income=${income}&focus=${focus}&budget=${encodedBudget}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white px-4 py-16 font-inter">
      <div className="fixed top-0 left-0 w-full min-h-[80px] z-50 flex items-center border-collapse bg-transparent">
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
      </div>
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold mb-8">Welcome to Budget Lens</h1>
        <p className="text-lg mb-12">
          Let's get started by setting up your preferences to tailor your
          budgeting experience.
        </p>
      </div>
      <div className="space-y-4 bg-white text-black rounded-xl shadow-2xl mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] space-y-6 px-20 py-20"
        >
          <div className="flex flex-col text-left">
            <label>Country:</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg bg-white flex items-center"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col text-left">
            <label>Currency:</label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg bg-white flex items-center"
            >
              {Object.entries(currencies).map(([country, code]) => (
                <option key={code} value={code}>
                  {code} - {country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col text-left">
            <label>Income:</label>
            <input
              type="number"
              value={income}
              placeholder="Enter Your Income"
              onChange={(e) => setIncome(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg bg-white flex items-center"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label>Budget Focus:</label>
            <select
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded-lg bg-white flex items-center"
            >
              <option value="">Select focus</option>
              <option value="savings">Savings</option>
              <option value="investment">Investment</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 disabled:bg-blue-300 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

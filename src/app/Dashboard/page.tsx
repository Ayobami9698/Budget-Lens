"use client";

import { Suspense } from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import { AddCircle, DocumentDownload, Logout, Tag } from "iconsax-react";
// import Footer from "../components/footer";
// import { useRef } from "react";
import DashboardContent from "../components/DashboardContent";

export default function Dashboard() {
  // const router = useRouter();
  // const { country, currency, income, focus, budget } = router.query;
  // const [parsedBudget, setParsedBudget] = useState([]);

  // useEffect(() => {
  //   if (budget) {
  //     try {
  //       const decoded = decodeURIComponent(budget);
  //       setParsedBudget(JSON.parse(decoded));
  //     } catch (err) {
  //       console.error("Failed to parse budget:", err);
  //     }
  //   }
  // }, [budget]);

  // return (
  //   <div className="p-6">
  //     <h1 className="text-3xl font-bold mb-4">Spend Guard</h1>
  //     <h2 className="text-2xl font-semibold">Budget Breakdown</h2>
  //     <p className="mb-4">{focus} Plan</p>

  //     {parsedBudget.map((category) => (
  //       <div key={category.name} className="mb-6">
  //         <h3 className="text-xl font-semibold text-orange-500">
  //           {category.name}
  //         </h3>
  //         <ul className="ml-4">
  //           {category.subcategories.map((item) => (
  //             <li key={item.name} className="flex justify-between w-96">
  //               <span>{item.name}</span>
  //               <span>
  //                 {currency} {item.amount.toLocaleString()}
  //               </span>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

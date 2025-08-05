import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full min-h-[80px] z-50 flex items-center bg-slate-400 s border-collapse shadow-lg">
      <div className="container mx-auto flex gap-2 items-center py-3 px-4">
        <Image
          alt="budgetlogo"
          src="/images/BudgetLogo.png"
          width={120}
          height={120}
          className="rounded-full shadow-md shadow-black/20"
        />
        <p className="text-[24px] font-inter font-[800] text-[#101928]">
          Budget Lens
        </p>
      </div>
    </div>
  );
}

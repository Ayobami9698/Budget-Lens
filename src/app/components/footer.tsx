import Image from "next/image";
import { Instagram, Facebook } from "iconsax-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#101928] text-white py-12 px-8 w-full font-inter">
      <div className="flex flex-col reverse md:flex-row md:justify-between gap-8">
        <div className="relative left-0 flex space-x-4 mt-[32px]">
          <Image
            alt="BudgetLens logo"
            src="/images/BudgetLogo.png"
            width={50}
            height={39}
            className="rounded-full"
          />
          <h1 className="text-[24px] text-[#f7f9fc] font-[800]">Budget Lens</h1>
        </div>
        {/* <div className="flex space-x-4 mt-[32px]">
          <a href="#">
            <Facebook
              className="text-[#85888e] hover:text-yellow-500 transition duration-300"
              size="32"
              color="#85888e"
            />
          </a>
          <a href="#">
            <Instagram
              className="text-[#85888e] hover:text-yellow-500 transition duration-300"
              size="32"
              color="#85888e"
            />
          </a>
        </div> */}
        <div className="">
          <h4 className="text-[20px] font-[semibold]">Contact Us</h4>
          <ul>
            <li>
              <p className="text-[#94969c] text-[16px]">
                Email: basskeydayo@gmail.com
              </p>
            </li>
            <li>
              <p className="text-[#94969c] text-[16px] mt-[24px]">NET-ZERO</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center mt-[32px] border-t border-gray-800 pt-[32px]">
        <p>&copy; 2025 Budget Lens. All rights reserved.</p>
        <div className="flex space-x-[32px]">
          <a
            href="/Privacy"
            className="text-[#94969c] hover:text-[#94969c]/90 transition duration-300 "
          >
            Privacy
          </a>
          <a
            href="/Terms"
            className="text-[#94969c] hover:text-[#94969c]/90 transition duration-300 "
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}

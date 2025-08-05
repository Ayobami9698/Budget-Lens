"use client";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/Onboarding");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration
  }, []);

  return (
    <div className="bg-cover bg-center flex  flex-col items-center font-inter">
      <div>
        <Header />
      </div>
      <div className="max-h-[903px] flex flex-col items-center justify-center text-center mx-auto pt-36 pb-12 bg-blue-50 w-full mt-10">
        <h1 className="text-[34px] md:text-[60px] md:text-6xl font-[700] mb-6 max-w-[909px] mx-auto">
          Where budgeting meets smart saving and investing
        </h1>
        <p className="text-[18px] md:text-[24px] text-[#344054] mb-8 font-[400]">
          Budget better. Save smarter. Invest wisely.
        </p>
        <button
          onClick={handleClick}
          className="bg-[#1671d8] text-[#fff] rounded-lg mx-auto text-[16px] font-[600] w-[241px] h-[56px] flex justify-center items-center hover:bg-[1671d9]/89 hover:scale-105 transition duration-300 transform"
        >
          Get Started
        </button>
        <Image
          alt=""
          src="/images/budgets.png"
          width={400}
          height={400}
          className="relative min-h-[150px] rounded-lg border mx-auto mt-12 border-transparent shadow-blue-50"
        />
      </div>

      <div
        data-aos="zoom-in"
        className=" py-24 px-8 min-h-[698px] bg-[#f6faff] text-black w-full"
      >
        <h2 className="text-3xl font-bold mb-8 text-center max-w-[690px] mx-auto md:text-[48px] md:leading-[64px]">
          Budget lens is your all-in-one financial tool
        </h2>
        <div className="max-w-[7xl] mx auto flex flex-col items-center justify-center md:flex-row gap-[24px] mt-[60px] ">
          <div className="w-full md:w-[342px] flex flex-col items-start text-center p-8 rounded-lg shadow-sm transition-transform transform hover:scale-105 border bg-[#f1f7fe] bordr-[#e4e7ec]">
            <Image
              alt=""
              src="/images/smartbudget.png"
              width={50}
              height={50}
              className="w-[80px] h-[80px] rounded-full"
            />
            <h3 className="text-[24px] mt-[19px] font-semibold text-[#111827]">
              Smart Budgeting
            </h3>
            <p className="text-[#4b5563] text-[16px] text-md mt-[12px] text-left">
              Leverage AI-driven insights to create a budget that aligns with
              your lifestyle and financial goals.
            </p>
          </div>

          <div className="w-full md:w-[342px] flex flex-col items-start text-center p-8 rounded-lg shadow-sm transition-transform transform hover:scale-105 border bg-[#f1f7fe] bordr-[#e4e7ec]">
            <Image
              alt=""
              src="/images/plans.png"
              width={50}
              height={50}
              className="w-[80px] h-[80px] rounded-full"
            />
            <h3 className="text-[24px] mt-[19px] font-semibold text-[#111827]">
              Custimizable Plans
            </h3>
            <p className="text-[#4b5563] text-[16px] text-md mt-[12px] text-left">
              Choose from savings-heavy, investment-heavy, or balanced plans to
              tailor your financial strategy.
            </p>
          </div>
          <div className="w-full md:w-[342px] flex flex-col items-start text-center p-8 rounded-lg shadow-sm transition-transform transform hover:scale-105 border bg-[#f1f7fe] bordr-[#e4e7ec]">
            <Image
              alt=""
              src="/images/insights.png"
              width={50}
              height={50}
              className="w-[80px] h-[80px] rounded-full"
            />
            <h3 className="text-[24px] mt-[19px] font-semibold text-[#111827]">
              Real-Time Insights
            </h3>
            <p className="text-[#4b5563] text-[16px] text-md mt-[12px] text-left">
              Track your spending and savings with real-time updates and
              analytics.
            </p>
          </div>
        </div>

        <div className="mt-[100px] py-[80px] max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-center">
          <div className="max-w-[484px]">
            <h4 className="text-[#667185] text-[16px] font-[600]">
              FOR YOUR FUTURE
            </h4>
            <h2 className="mt-[12px] text-[#101928] text-[36px] leading-9 md:leading-[62px] font-[700] md:text-[48px]">
              Better financial management
            </h2>
            <p className="mt-[16px] text-[#101928] text-[18px]">
              Manage effectively your finances with spend guard budgeting while
              exploring other features to give you inform decisions on your
              finances
            </p>
          </div>
          <div className="w-[478px] h-[419px] overflow-hidden bg-[#foedfc] flex items-center justify-center mt-[50px]">
            <Image
              alt="/"
              src="/images/expenses.png"
              width={300}
              height={300}
              className="min-h-[419px] min-w-full md:mt-0 object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="py-20 px-8 bg-[#ffffff] text-gray-900 w-full mx-auto "
      >
        <h2 className="text-4xl font-extrabold max-w-[697px] leading-9 md:leading-[62px] md:text-[48px] text-[#101928] mb-16">
          Get started with Budget Lens in 4 easy steps
        </h2>
        <div className="flex lg:flex-row flex-col justify-between items-start gap-[190px]">
          <div className="flex flex-col pl-[70px] lg:pl-0 w-[280px] p-2 transition-transform transform hover:scale-105 gap-y-[20px]">
            <div className="flex justify-center w-[48px] h-[48px] border-[3px] border-[#0d5eba] rounded-full items-center absolute lg:relative left-0 p-[20px] ">
              <h3 className="text-[24px] font-[700] text-[#0d5eba] justify-center items-center ">
                1
              </h3>
            </div>
            <div className="relative">
              <h3 className="text-[24px] font-[700] text-[#101928] ">
                Click the button to get started
              </h3>
              <button
                onClick={handleClick}
                className="bg-[#1671d8] text-[#fff] rounded-lg mx-auto text-[16px] font-[600] w-[241px] h-[56px] flex justify-center items-center hover:bg-[1671d9]/89 hover:scale-105 transition duration-300 transform absolute"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="flex relative flex-col pl-[70px] lg:pl-0 w-[280px] p-2 transition-transform transform hover:scale-105 gap-y-[20px]">
            <div className="flex justify-center w-[48px] h-[48px] border-[3px] border-[#0d5eba] rounded-full items-center absolute lg:relative left-0 p-[20px]">
              <h3 className="text-[24px] font-[700] text-[#0d5eba]">2</h3>
            </div>
            <div className="relative">
              <h3 className="text-[24px] font-[700] text-[#101928] ">
                Fill out the form
              </h3>
              <p className="">
                Enter basic details of your finances to tailor your experience
                based on your focus.
              </p>
            </div>
          </div>

          <div className="flex relative flex-col pl-[70px] lg:pl-0 w-[280px] p-2 transition-transform transform hover:scale-105 gap-y-[20px]">
            <div className="flex justify-center w-[48px] h-[48px] border-[3px] border-[#0d5eba] rounded-full items-center absolute lg:relative left-0 p-[20px]">
              <h3 className="text-[24px] font-[700] text-[#0d5eba]">3</h3>
            </div>
            <div className="relative">
              <h3 className="text-[24px] font-[700] text-[#101928] ">
                See your budget
              </h3>
              <p className="">
                See Ai driven metrics and result based on the information you
                provided
              </p>
            </div>
          </div>

          <div className="flex relative flex-col pl-[70px] lg:pl-0 w-[280px] p-2 transition-transform transform hover:scale-105 gap-y-[20px]">
            <div className="flex justify-center w-[48px] h-[48px] border-[3px] border-[#0d5eba] rounded-full items-center absolute lg:relative left-0 p-[20px]">
              <h3 className="text-[24px] font-[700] text-[#0d5eba]">4</h3>
            </div>
            <div className="relative">
              <h3 className="text-[24px] font-[700] text-[#101928] ">
                Download the budget plan
              </h3>
              <p className="">
                Get a copy of your result , for easy reference.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full inset-0 bg-[#101929] bg-cover flex flex-row">
        <div className="relative z-10 max-w-[1080px] mx-auto items-center justify-center text-center mt-[35px]">
          <h2 className="text-[28px] md:text-[56px] font-[700] w-[343px] md:w-full mx-auto mb-4 leading-[35px] text-[#ffffff] ">
            Ready to Transform Your Finances?
          </h2>
          <button
            onClick={handleClick}
            className="bg-[#1671d8] text-[#fff] rounded-lg mx-auto text-[16px] font-[600] w-[241px] h-[56px] justify-center items-center hover:bg-[#1671d9]/89 hover:scale-105 transition duration-300 transform mt-8 "
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

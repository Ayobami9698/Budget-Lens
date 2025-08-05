import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Terms() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container mx-auto px-4 py-8 pt-[80px] max-w-4xl my-[70px]">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to BudgetLens! These terms and conditions outline the rules
          and regulations for the use of SpendGuard's website and services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing this website or using our services, you agree to be bound
          by these terms and conditions. If you do not agree with any part of
          these terms, you must not use our website or services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">2. Uses of Our Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use and enjoyment of the services. Prohibited behavior includes
          harassing or causing distress or inconvenience to any other user,
          transmitting obscene or offensive content, or disrupting the normal
          flow of dialogue within our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          3. Intellectual Property
        </h2>
        <p className="mb-4">
          Unless otherwise stated, SpendGuard owns the intellectual property
          rights for all material on this website. All intellectual property
          rights are reserved. You may access this material for your own
          personal use, subject to restrictions set in these terms and
          conditions.
        </p>
        <p className="mb-4">You must not:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Republish material from BudgetLens</li>
          <li>Sell, rent, or sub-license material from BudgetLens</li>
          <li>Reproduce, duplicate, or copy material from BudgetLens</li>
          <li>Redistribute content from BudgetLens</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">4. User Account</h2>
        <p className="mb-4">
          To use certain features of our services, you may be required to create
          an account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information to keep it accurate, current, and complete. You are
          responsible for safeguarding your account credentials and agree not to
          disclose them to any third party.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          5. Limitation of Liability
        </h2>
        <p className="mb-4">
          In no event shall BudgetLens, nor any of its officers, directors, and
          employees, be liable to you for anything arising out of or in any way
          connected with your use of this website or services, whether such
          liability is under contract, tort, or otherwise, and SpendGuard,
          including its officers, directors, and employees, shall not be liable
          for any indirect, consequential, or special liability arising out of
          or in any way related to your use of this website or services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to our services immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach the terms. Upon
          termination, your right to use the services will cease immediately.
        </p>
        <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
        <p className="mb-4">
          These terms shall be governed and construed in accordance with the
          laws of Your Country, without regard to its conflict of law
          provisions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          8. Changes to These Terms
        </h2>
        <p className=" mb-4">
          We reserve the right, at our sole discretion, to modify or replace
          these terms at any time. If a revision is material, we will try to
          provide at least 30 days' notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion.
        </p>
        <h2 className="text-2xl font-semibold mb-4">9. Contact us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at
          basskeydayo@gmail.com
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

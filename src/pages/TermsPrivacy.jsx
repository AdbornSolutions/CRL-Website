import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const TermsPrivacy = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#f6f8fb] min-h-screen py-12 px-5 scroll-smooth">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="bg-white rounded-2xl p-6 h-fit shadow-md lg:sticky lg:top-28">
            <h4 className="text-sm font-bold text-gray-500 mb-4">
              LEGAL DOCUMENTS
            </h4>

            <a
              href="#terms"
              className="block bg-[#eaf1ff] text-[#12345c] rounded-xl px-4 py-3 text-[15px] font-semibold mb-3 hover:scale-[1.02] transition"
            >
              Terms & Conditions
            </a>

            <a
              href="#privacy"
              className="block text-gray-700 rounded-xl px-4 py-3 text-[15px] hover:bg-gray-100 transition"
            >
              Privacy Policy
            </a>

            <div className="mt-6 border-t pt-5 space-y-3 text-[15px] text-gray-600">
              <p>1. Services & Scope</p>
              <p>2. User Responsibilities</p>
              <p>3. Booking & Payments</p>
              <p>4. Delivery Protocols</p>
              <p>5. Prohibited Items</p>
              <p>6. Liability & Insurance</p>
            </div>

            <div className="mt-6 bg-[#eef4ff] rounded-xl p-5">
              <h5 className="text-sm font-bold text-[#12345c]">NEED HELP?</h5>
              <p className="text-[14px] text-gray-600 mt-2 leading-6">
                Questions about our legal terms? Reach out to our team.
              </p>
              <p className="text-[14px] font-semibold text-[#12345c] mt-3 break-words">
                chapleroadlines26@crl-transport.com
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="space-y-10">
            {/* TERMS HEADER */}
            <div
              id="terms"
              className="scroll-mt-32 bg-white rounded-2xl p-8 sm:p-10 shadow-md"
            >
              <p className="text-sm text-[#16427a] font-semibold mb-3">
                LEGAL DOCUMENT OCTOBER 26, 2023
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#111827]">
                Terms and Conditions
              </h1>

              <p className="text-[16px] text-gray-600 mt-4 max-w-3xl leading-8">
                Welcome to CRL Solutions. These terms govern your use of our
                logistics and transportation services. By engaging with us, you
                agree to comply with the guidelines outlined below.
              </p>
            </div>

            {/* TERMS CONTENT */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md space-y-10">
              <ContentBlock
                number="1"
                title="Services and Scope"
                text="CRL Solutions provides comprehensive logistics, freight forwarding, and warehousing services. Our scope includes domestic and international transport, last-mile delivery, and supply chain management consulting."
              />

              <ul className="text-[16px] text-gray-600 list-disc pl-6 space-y-2 leading-8">
                <li>Standard freight shipping via road, rail, air, and sea</li>
                <li>Real-time tracking and digital documentation</li>
                <li>
                  Customized warehousing solutions and inventory management
                </li>
              </ul>

              <ContentBlock
                number="2"
                title="User Responsibilities"
                text="As a client, you are responsible for providing accurate shipment information. This includes but is not limited to:"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InfoCard
                  title="Documentation"
                  text="Providing valid invoices and customs documents where required."
                />
                <InfoCard
                  title="Packaging"
                  text="Securely packaging goods to withstand standard transport handling."
                />
              </div>

              <ContentBlock
                number="3"
                title="Booking and Payments"
                text="All bookings must be confirmed via our digital portal or signed service agreement. Payments are due within 15 days of invoice issuance unless otherwise specified in your commercial contract."
              />

              <ContentBlock
                number="4"
                title="Delivery Protocols"
                text="Delivery times are estimates and not guaranteed unless Express Priority service is selected. We require a signature upon delivery."
              />

              <div>
                <ContentBlock number="5" title="Prohibited Items" text="" />
                <div className="bg-red-50 border border-red-100 rounded-xl p-6 text-[16px] text-red-600 leading-8 mt-4">
                  The following items are strictly prohibited: hazardous
                  materials, flammable liquids, illegal substances, ivory, and
                  hazardous waste. Shipping any of these may result in immediate
                  termination of service.
                </div>
              </div>

              <ContentBlock
                number="6"
                title="Liability and Insurance"
                text="CRL Solutions’ liability for loss or damage is limited to the value declared at the time of booking. We strongly recommend purchasing comprehensive freight insurance for high-value shipments."
              />
            </div>

            {/* PRIVACY HEADER */}
            <div
              id="privacy"
              className="scroll-mt-32 bg-[#0b2b52] rounded-2xl p-8 sm:p-10 shadow-md text-white"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                Privacy Policy
              </h2>
              <p className="text-[16px] text-white/80 mt-4 max-w-2xl leading-8">
                We value your trust. This policy explains how we collect, use,
                and protect your data across our logistics network.
              </p>
            </div>

            {/* PRIVACY CONTENT */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md space-y-10">
              <ContentBlock
                number="7"
                title="Information Collection"
                text="We collect information necessary to fulfill shipping orders, including names, addresses, contact details, and payment information. We also collect technical data via cookies to improve our portal experience."
              />

              <ContentBlock
                number="8"
                title="Data Sharing"
                text="Your data is shared only with verified third-party logistics partners, customs agencies, and payment processors strictly for the purpose of executing your shipment. We never sell your personal data."
              />

              <div>
                <ContentBlock number="9" title="Security Measures" text="" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  <InfoCard
                    title="End-to-End Encryption"
                    text="All data is encrypted between your browser and our servers."
                  />
                  <InfoCard
                    title="Access Controls"
                    text="Restricted access to personal data for only authorized staff."
                  />
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold mb-6">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[16px] text-gray-600 leading-8">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-3">
                      LEGAL DEPARTMENT
                    </h4>
                    <p>C/O Babarao Chaple Miniwada (Kondhali)</p>
                    <p>
                      Tahsil – Katol District – Nagpur – 441103 Maharashtra
                      (MH)
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-3">
                      COMMUNICATION
                    </h4>
                    <p>Email: chapleroadlines26@crl-transport.com</p>
                    <p>Phone: +91 74993 58403</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-3">
                      OFFICE HOURS
                    </h4>
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </>
  );
};

const ContentBlock = ({ number, title, text }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <span className="w-8 h-8 rounded-lg bg-[#eaf1ff] text-[#12345c] flex items-center justify-center text-sm font-bold shrink-0">
          {number}
        </span>

        <h2 className="text-xl sm:text-[24px] font-bold text-[#111827]">
          {title}
        </h2>
      </div>

      {text && <p className="text-[16px] text-gray-600 leading-8">{text}</p>}
    </div>
  );
};

const InfoCard = ({ title, text }) => {
  return (
    <div className="bg-[#f3f6fb] rounded-xl p-6">
      <h4 className="text-[17px] font-bold text-[#111827]">{title}</h4>

      <p className="text-[15px] text-gray-600 mt-3 leading-7">{text}</p>
    </div>
  );
};

export default TermsPrivacy;
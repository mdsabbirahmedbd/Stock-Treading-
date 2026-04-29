import { useState } from "react";

const categories = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01" />
      </svg>
    ),
    title: "Account Opening",
    faqs: [
      { q: "How do I open a Zerodha account?", a: "You can open a Zerodha account online by visiting zerodha.com and clicking on 'Open an account'. The process is fully digital and takes about 15 minutes." },
      { q: "What documents are required?", a: "You need your PAN card, Aadhaar card, a cancelled cheque or bank statement, and a signature on white paper." },
      { q: "How long does account opening take?", a: "Typically 1–2 working days after submitting all documents." },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Your Zerodha Account",
    faqs: [
      { q: "How do I reset my password?", a: "Go to kite.zerodha.com and click on 'Forgot password'. Enter your client ID and registered mobile number to reset." },
      { q: "How do I update my email or mobile number?", a: "Log in to Console (console.zerodha.com) and go to Profile > Account details to update your contact information." },
      { q: "How do I activate F&O segment?", a: "Log in to Console, go to Profile > Segment activation and follow the steps to activate F&O trading." },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Kite",
    faqs: [
      { q: "How do I place an order on Kite?", a: "Search for the stock in the search bar, click on it, and select Buy or Sell. Choose order type (Market/Limit) and enter quantity, then click Submit." },
      { q: "What is GTT (Good Till Triggered)?", a: "GTT allows you to set trigger orders that remain active until the price condition is met, unlike regular orders that expire at end of day." },
      { q: "How do I read charts on Kite?", a: "Click on any stock and select the chart icon. You can switch between timeframes, add indicators, and draw trendlines from the chart toolbar." },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Funds",
    faqs: [
      { q: "How do I add funds to my account?", a: "Log in to Kite, click on 'Add funds' at the top. You can use UPI, net banking, or NEFT/RTGS to add funds instantly." },
      { q: "How long does withdrawal take?", a: "Withdrawal requests placed before 9 AM are processed the same day. Otherwise, funds are credited to your bank account the next working day." },
      { q: "What is the maximum I can withdraw?", a: "You can withdraw the available cash balance in your account, excluding any margin used for open positions." },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),
    title: "Console",
    faqs: [
      { q: "What is Console?", a: "Console is Zerodha's back-office platform where you can view your portfolio, P&L reports, tax statements, and manage account settings." },
      { q: "How do I download my tax P&L report?", a: "Log in to Console, go to Reports > Tax P&L. Select the financial year and download the report in CSV or PDF format." },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Coin",
    faqs: [
      { q: "What is Coin?", a: "Coin is Zerodha's mutual fund investment platform. You can invest in direct mutual funds with zero commission through Coin." },
      { q: "How do I start a SIP on Coin?", a: "Log in to coin.zerodha.com, search for a mutual fund, click on 'Invest', select SIP, choose amount and date, and confirm." },
    ],
  },
];

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];

const announcements = [
  "Latest Intraday leverages and Square-off timings",
  "Rights Entitlements listing in April 2026",
];

// ── Accordion Item ────────────────────────────────────────────────────────────
function AccordionCategory({ category }) {
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      {/* Category Header */}
      <button
        onClick={() => { setOpen(!open); setOpenFaq(null); }}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {category.icon}
          <span className="text-gray-800 font-medium">{category.title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* FAQs */}
      {open && (
        <div className="border-t border-gray-100 bg-gray-50 divide-y divide-gray-100">
          {category.faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm text-gray-700">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 ml-3 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Support() {
  const [search, setSearch] = useState("");

  const filtered = categories.map((cat) => ({
    ...cat,
    faqs: cat.faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) =>
    search === "" ||
    cat.title.toLowerCase().includes(search.toLowerCase()) ||
    cat.faqs.length > 0
  );

  return (
    <div className="min-h-screen ">

      {/* Header */}
      <div className=" px-6 py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Support Portal</h1>
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none text-sm px-5">
            My tickets
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Eg: How do I open my account, How do i activate F&O..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400 text-sm text-gray-700 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left — Accordion */}
        <div className="lg:col-span-2">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm">No results found for "<strong>{search}</strong>"</p>
            </div>
          ) : (
            filtered.map((cat) => (
              <AccordionCategory key={cat.title} category={cat} />
            ))
          )}
        </div>

        {/* Right — Sidebar */}
        <div className="space-y-4">

          {/* Announcements */}
          <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-4">
            <ul className="space-y-2">
              {announcements.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">•</span>
                  <a href="#" className="text-blue-600 text-sm hover:underline leading-snug">{a}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700">Quick links</h3>
            </div>
            <ul className="divide-y divide-gray-50">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 text-sm text-blue-600 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-400 mr-2 text-xs">{i + 1}.</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
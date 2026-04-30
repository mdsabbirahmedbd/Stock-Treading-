const equityRows = [
  { label: "Available margin",      value: "4,043.10", highlight: true },
  { label: "Used margin",           value: "3,757.30" },
  { label: "Available cash",        value: "4,043.10" },
]
 
const detailRows = [
  { label: "Opening Balance",       value: "4,043.10" },
  { label: "Opening Balance",       value: "3,736.40" },
  { label: "Payin",                 value: "4,064.00" },
  { label: "SPAN",                  value: "0.00" },
  { label: "Delivery margin",       value: "0.00" },
  { label: "Exposure",              value: "0.00" },
  { label: "Options premium",       value: "0.00" },
]
 
const collateralRows = [
  { label: "Collateral (Liquid funds)", value: "0.00" },
  { label: "Collateral (Equity)",       value: "0.00" },
]
const Funds = () => {
  return (
    <div className="p-6 max-w-xl">
 
      {/* Top Action Bar */}
      <div className="flex items-center justify-end gap-3 mb-8">
        <span className="text-xs text-gray-400">Instant, zero-cost fund transfers with UPI</span>
        <button className="btn btn-sm bg-green-500 hover:bg-green-600 text-white border-none">
          Add funds
        </button>
        <button className="btn btn-sm btn-outline border-blue-400 text-blue-500 hover:bg-blue-50">
          Withdraw
        </button>
      </div>
 
      {/* Equity Section */}
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
        </svg>
        <span className="text-sm font-medium text-gray-600">Equity</span>
      </div>
 
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
        {/* Main rows */}
        {equityRows.map((r, i) => (
          <div key={i} className={`flex justify-between items-center px-5 py-3 ${i < equityRows.length - 1 ? "border-b border-gray-100" : ""}`}>
            <span className="text-sm text-gray-500">{r.label}</span>
            <span className={`text-sm font-medium ${r.highlight ? "text-blue-500" : "text-gray-700"}`}>
              {r.value}
            </span>
          </div>
        ))}
 
        <div className="border-t border-gray-200" />
 
        {/* Detail rows */}
        {detailRows.map((r, i) => (
          <div key={i} className={`flex justify-between items-center px-5 py-2.5 ${i < detailRows.length - 1 ? "border-b border-gray-50" : ""}`}>
            <span className="text-xs text-gray-400">{r.label}</span>
            <span className="text-xs text-gray-600">{r.value}</span>
          </div>
        ))}
 
        <div className="border-t border-gray-200" />
 
        {/* Collateral rows */}
        {collateralRows.map((r, i) => (
          <div key={i} className={`flex justify-between items-center px-5 py-2.5 ${i < collateralRows.length - 1 ? "border-b border-gray-50" : ""}`}>
            <span className="text-xs text-gray-400">{r.label}</span>
            <span className="text-xs text-gray-600">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Funds
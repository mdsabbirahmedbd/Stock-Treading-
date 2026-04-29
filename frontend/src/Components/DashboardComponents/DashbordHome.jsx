
export const DashbordHome = () => {
  return (
    <div>
          <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-medium text-gray-800 mb-8">Hi, User!</h1>
 
      {/* Equity */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
          </svg>
          <span className="text-sm font-medium text-gray-600">Equity</span>
        </div>
        <div className="flex flex-wrap gap-12 border-b border-gray-100 pb-6">
          <div>
            <p className="text-3xl font-light text-gray-800">3.74k</p>
            <p className="text-xs text-gray-400 mt-1">Margin available</p>
          </div>
          <div className="text-sm text-gray-500 space-y-1">
            <p>Margins used &nbsp;<span className="text-gray-800">0</span></p>
            <p>Opening balance &nbsp;<span className="text-gray-800">3.74k</span></p>
          </div>
        </div>
      </section>
 
      {/* Holdings */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth={1.5} />
            <path strokeLinecap="round" strokeWidth={1.5} d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          </svg>
          <span className="text-sm font-medium text-gray-600">Holdings (13)</span>
        </div>
        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-3xl font-light text-green-500">
              1.55k <span className="text-sm">+5.20%</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">P&L</p>
          </div>
          <div className="text-sm text-gray-500 space-y-1">
            <p>Current Value &nbsp;<span className="text-gray-800">31.43k</span></p>
            <p>Investment &nbsp;<span className="text-gray-800">29.88k</span></p>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

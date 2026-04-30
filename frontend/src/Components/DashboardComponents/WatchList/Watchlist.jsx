const stocks = [
  { name: "INFY",      price: 1555.45, percent: 1.60, isDown: true  },
  { name: "ONGC",      price: 116.80,  percent: 0.09, isDown: true  },
  { name: "TCS",       price: 3194.80, percent: 0.25, isDown: true  },
  { name: "KPITTECH",  price: 266.45,  percent: 3.54, isDown: false },
  { name: "QUICKHEAL", price: 308.55,  percent: 0.15, isDown: true  },
  { name: "WIPRO",     price: 577.75,  percent: 0.32, isDown: false },
  { name: "M&M",       price: 779.80,  percent: 0.01, isDown: true  },
  { name: "RELIANCE",  price: 2112.40, percent: 1.44, isDown: false },
  { name: "HUL",       price: 512.40,  percent: 1.04, isDown: false },
]

const Watchlist = () => {
  return (
    <div>
      <aside className="min-h-screen bg-white border-r border-gray-100 flex flex-col">

        {/* Index Bar */}
        <div className="flex items-center gap-6 px-4 py-3 border-b border-gray-100 text-xs font-medium">
          <span className="text-gray-500">NIFTY 50
            <span className="ml-2 text-gray-800">0.00</span>
            <span className="ml-1 text-gray-400">0</span>
          </span>
          <span className="text-gray-500">SENSEX
            <span className="ml-2 text-gray-800">0.00</span>
            <span className="ml-1 text-gray-400">0</span>
          </span>
        </div>

        {/* Search */}
        <div className="px-3 py-2 border-b border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded px-3 py-2">
            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              className="bg-transparent text-xs text-gray-600 outline-none w-full placeholder:text-gray-400"
              placeholder="Search eg:infy, bse, nifty fut weekly..."
            />
            <span className="text-xs text-gray-400 shrink-0">9/50</span>
          </div>
        </div>

        {/* Stock List */}
        <div className="flex-1 overflow-y-auto">
          {stocks.map((s) => (
            <div
              key={s.name}
              className="group flex items-center justify-between px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              {/* Name */}
              <span className={`text-sm font-medium ${s.isDown ? "text-red-500" : "text-green-600"}`}>
                {s.name}
              </span>

              {/* Right side */}
              <div className="flex items-center gap-2">

                {/* Buy/Sell — hover */}
                <div className="hidden group-hover:flex items-center gap-1">
                  <button className="btn btn-xs bg-blue-500 hover:bg-blue-600 text-white border-none h-6 min-h-6 px-2 text-[10px]">
                    B
                  </button>
                  <button className="btn btn-xs bg-red-400 hover:bg-red-500 text-white border-none h-6 min-h-6 px-2 text-[10px]">
                    S
                  </button>
                </div>

                {/* Price + percent — hover  */}
                <div className="text-right group-hover:hidden block">
                  <div className={`text-xs ${s.isDown ? "text-red-400" : "text-green-500"}`}>
                    {s.isDown ? "▼" : "▲"} {s.percent}%
                  </div>
                  <div className="text-xs text-gray-700 font-medium">${s.price}</div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </aside>
    </div>
  )
}

export default Watchlist
const holdings = [
  { symbol: "BHARTIARTL", qty: 2,  avg: 538.05,  ltp: 541.15,  curVal: 1082.30, pnl:   6.20, netChg: +0.58, dayChg: +2.99 },
  { symbol: "HDFCBANK",   qty: 2,  avg: 1383.40, ltp: 1522.35, curVal: 3044.70, pnl: 277.90, netChg: +10.04, dayChg: +0.11 },
  { symbol: "HINDUNILVR", qty: 1,  avg: 2335.85, ltp: 2417.40, curVal: 2417.40, pnl:  81.55, netChg: +3.49, dayChg: +0.21 },
  { symbol: "INFY",       qty: 1,  avg: 1350.50, ltp: 1555.45, curVal: 1555.45, pnl: 204.95, netChg: +15.18, dayChg: -1.60 },
  { symbol: "ITC",        qty: 5,  avg: 202.00,  ltp: 207.90,  curVal: 1039.50, pnl:  29.50, netChg: +2.92, dayChg: +0.80 },
  { symbol: "KPITTECH",   qty: 5,  avg: 250.30,  ltp: 266.45,  curVal: 1332.25, pnl:  80.75, netChg: +6.45, dayChg: +3.54 },
  { symbol: "M&M",        qty: 2,  avg: 809.90,  ltp: 779.80,  curVal: 1559.60, pnl: -60.20, netChg: -3.72, dayChg: -0.01 },
  { symbol: "RELIANCE",   qty: 1,  avg: 2193.70, ltp: 2112.40, curVal: 2112.40, pnl: -81.30, netChg: -3.71, dayChg: +1.44 },
  { symbol: "SBIN",       qty: 4,  avg: 324.35,  ltp: 430.20,  curVal: 1720.80, pnl: 423.40, netChg: +32.7, dayChg: -0.34 },
]
 
const headers = ["Instrument", "Qty.", "Avg. cost", "LTP", "Cur. val", "P&L", "Net chg.", "Day chg."]

const Holdings = () => {
  return (
      <div className="p-6 overflow-x-auto">
      <h2 className="text-lg font-medium text-gray-700 mb-5">Holdings ({holdings.length})</h2>
 
      <table className="table table-sm w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            {headers.map((h) => (
              <th key={h} className="text-xs text-gray-400 font-normal pb-3 text-right first:text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {holdings.map((h) => {
            const pnlUp = h.pnl >= 0
            return (
              <tr key={h.symbol} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-3 font-medium text-gray-800 text-xs">{h.symbol}</td>
                <td className="text-right text-xs text-gray-600">{h.qty}</td>
                <td className="text-right text-xs text-gray-600">{h.avg.toFixed(2)}</td>
                <td className="text-right text-xs text-gray-600">{h.ltp.toFixed(2)}</td>
                <td className="text-right text-xs text-gray-600">{h.curVal.toFixed(2)}</td>
                <td className={`text-right text-xs font-medium ${pnlUp ? "text-green-500" : "text-red-400"}`}>
                  {h.pnl.toFixed(2)}
                </td>
                <td className={`text-right text-xs ${h.netChg >= 0 ? "text-green-500" : "text-red-400"}`}>
                  {h.netChg >= 0 ? "+" : ""}{h.netChg.toFixed(2)}%
                </td>
                <td className={`text-right text-xs ${h.dayChg >= 0 ? "text-green-500" : "text-red-400"}`}>
                  {h.dayChg >= 0 ? "+" : ""}{h.dayChg.toFixed(2)}%
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Holdings
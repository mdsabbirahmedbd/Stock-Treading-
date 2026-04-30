const positions = [
  { product: "CNC",  instrument: "EVEREADY",  qty: 2, avg: 316.27,  price: 312.35,  net: "-7.84",   day: "-1.24%", isLoss: true  },
  { product: "CNC",  instrument: "JUBLFOOD",   qty: 1, avg: 3124.75, price: 3082.65, net: "-42.10",  day: "-1.35%", isLoss: true  },
  { product: "CNC",  instrument: "TATASTEEL",  qty: 5, avg: 118.40,  price: 124.75,  net: "+31.75",  day: "+2.10%", isLoss: false },
  { product: "CNC",  instrument: "HDFCBANK",   qty: 2, avg: 1450.00, price: 1522.35, net: "+144.70", day: "+0.11%", isLoss: false },
  { product: "MIS",  instrument: "INFY",       qty: 3, avg: 1560.00, price: 1555.45, net: "-13.65",  day: "-1.60%", isLoss: true  },
  { product: "MIS",  instrument: "WIPRO",      qty: 4, avg: 570.00,  price: 577.75,  net: "+31.00",  day: "+0.32%", isLoss: false },
  { product: "MIS",  instrument: "ONGC",       qty: 6, avg: 120.00,  price: 116.80,  net: "-19.20",  day: "-0.09%", isLoss: true  },
  { product: "NRML", instrument: "RELIANCE",   qty: 1, avg: 2080.00, price: 2112.40, net: "+32.40",  day: "+1.44%", isLoss: false },
  { product: "NRML", instrument: "BAJFINANCE", qty: 1, avg: 6800.00, price: 6654.30, net: "-145.70", day: "-0.87%", isLoss: true  },
  { product: "NRML", instrument: "AXISBANK",   qty: 3, avg: 975.00,  price: 1010.60, net: "+106.80", day: "+1.23%", isLoss: false },
  { product: "CNC",  instrument: "ITC",        qty: 8, avg: 198.00,  price: 207.90,  net: "+79.20",  day: "+0.80%", isLoss: false },
  { product: "MIS",  instrument: "SBIN",       qty: 5, avg: 445.00,  price: 430.20,  net: "-74.00",  day: "-0.34%", isLoss: true  },
]
const totalNet = positions.reduce((sum, p) => sum + parseFloat(p.net), 0)

const Positions = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-lg font-medium text-gray-700 mb-5">
        Positions ({positions.length})
      </h2>

      <table className="table table-sm w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            {["Product", "Instrument", "Qty.", "Avg.", "Price", "Net", "Day"].map((h) => (
              <th key={h} className="text-xs text-gray-400 font-normal pb-3 text-right first:text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {positions.map((p) => (
            <tr key={p.instrument} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">

              {/* Product */}
              <td className="py-3">
                <span className={`badge border-none text-[10px] font-medium px-2 ${
                  p.isLoss ? "bg-red-100 text-red-400" : "bg-green-100 text-green-500"
                }`}>
                  {p.product}
                </span>
              </td>

              {/* Instrument */}
              <td className="text-xs font-medium text-gray-800">{p.instrument}</td>

              {/* Qty */}
              <td className="text-right text-xs text-gray-600">{p.qty}</td>

              {/* Avg */}
              <td className="text-right text-xs text-gray-600">{p.avg.toFixed(2)}</td>

              {/* Price */}
              <td className="text-right text-xs text-gray-600">{p.price.toFixed(2)}</td>

              {/* Net */}
              <td className={`text-right text-xs font-medium ${p.isLoss ? "text-red-400" : "text-green-500"}`}>
                {p.net}
              </td>

              {/* Day */}
              <td className={`text-right text-xs ${p.isLoss ? "text-red-400" : "text-green-500"}`}>
                {p.day}
              </td>

            </tr>
          ))}

          {/* Total row */}
          <tr className="border-t border-gray-200">
            <td colSpan={4}></td>
            <td className="text-right text-xs text-gray-500 py-3 font-medium">Total</td>
            <td className={`text-right text-xs font-semibold ${totalNet >= 0 ? "text-green-500" : "text-red-400"}`}>
              {totalNet.toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Positions
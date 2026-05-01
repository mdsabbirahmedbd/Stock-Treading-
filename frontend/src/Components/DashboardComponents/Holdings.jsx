import { useEffect, useState } from "react"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAxiosSecure from "../../Hooks/useaxiosSecure";



 
const headers = ["Instrument", "Qty.", "Avg. cost", "LTP", "Cur. val", "P&L", "Net chg.", "Day chg."]

const Holdings = () => {
 const [holdings, setHoldings] = useState([])
 const axiosSecure = useAxiosSecure()


  useEffect(()=>{
    axiosSecure.get("/AllHoldings").then((res)=>{
       setHoldings(res.data)
    })
  },[])

  const chartData = holdings.map((h) => ({
    name : h.symbol,
    value: h.curVal,
    pnl: h.pnl,
    daychange: h.dayChg,
  }))


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

     
     <div className="mt-8">
  <h3 className="text-2xl font-medium text-gray-600 mb-4">Portfolio Overview</h3>

  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={chartData}
      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontSize: 11 }} />
      <YAxis yAxisId="left"  orientation="left"  stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left"  dataKey="value" fill="#8884d8" name="Current Value" />
      <Bar yAxisId="right" dataKey="pnl"   fill="#82ca9d" name="P&L" />
    </BarChart>
  </ResponsiveContainer>
</div>


    </div>
  )
}

export default Holdings
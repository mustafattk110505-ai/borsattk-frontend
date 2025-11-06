import React from 'react'
export default function Sidebar(){
  const pairs = ['EUR/USD','GBP/USD','USD/JPY','BTC/USDT','ETH/USDT']
  return (
    <aside className="bg-gray-800 rounded-xl p-4 flex flex-col h-[90vh]">
      <h2 className="text-xl font-semibold mb-4">Borsattk</h2>
      <div className="space-y-2 flex-1 overflow-auto">
        {pairs.map(p=> (
          <div key={p} className="bg-gray-700 p-3 rounded flex justify-between items-center">
            <div>
              <div className="text-sm">{p}</div>
              <div className="text-xs text-gray-300">Canlı</div>
            </div>
            <div className="text-right">
              <div className="text-sm">—</div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-red-600 rounded py-2">Durdur</button>
    </aside>
  )
}

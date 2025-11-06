import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
export default function RightPanel(){
  const [signals, setSignals] = useState([])
  useEffect(()=>{
    const socket = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000')
    socket.on('signal', (s)=>{
      setSignals(prev=> [s, ...prev].slice(0,50))
    })
    return ()=> socket.disconnect()
  }, [])
  return (
    <aside className="bg-gray-800 rounded-xl p-4 h-[90vh] flex flex-col">
      <div>
        <div className="text-sm text-gray-400">Sinyal Akışı</div>
        <div className="text-2xl font-bold">Gerçek Zamanlı</div>
      </div>
      <div className="mt-4 overflow-auto flex-1">
        {signals.map((s,i)=> (
          <div key={i} className={`p-2 mb-2 rounded flex items-center justify-between ${s.strength==='STRONG' ? 'bg-green-800' : s.strength==='WEAK' ? 'bg-yellow-800' : 'bg-gray-700'}`}>
            <div>
              <div className="font-bold">{s.pair} • {s.signal}</div>
              <div className="text-xs text-gray-300">Score: {s.score} • {s.reason}</div>
            </div>
            <div className="text-sm">{new Date(s.ts).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
    </aside>
  )
}

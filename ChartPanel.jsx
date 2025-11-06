import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import axios from 'axios'
export default function ChartPanel(){
  const tvRef = useRef(null)
  const [backendUrl] = useState(import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000')
  useEffect(()=>{
    function createWidget(){
      if(!window.TradingView || !tvRef.current) return
      new window.TradingView.widget({
        container_id: tvRef.current,
        autosize: true,
        symbol: 'OANDA:EUR_USD',
        interval: '5',
        timezone: 'Europe/Istanbul',
        theme: 'dark',
        style: '1',
        locale: 'tr',
        toolbar_bg: '#2b2b2b',
        allow_symbol_change: true
      })
    }
    if(!window.TradingView){
      const s = document.createElement('script')
      s.src = 'https://s3.tradingview.com/tv.js'
      s.onload = createWidget
      document.head.appendChild(s)
    } else createWidget()

    // connect socket for realtime signals
    const socket = io(backendUrl)
    socket.on('connect', ()=> console.log('connected to backend'))
    socket.on('signal', (data)=> console.log('signal', data))
    return ()=> socket.disconnect()
  }, [])
  return (
    <div className="bg-gray-900 rounded-xl p-2 h-[90vh]">
      <div id="tv-chart" ref={tvRef} className="h-full w-full"></div>
    </div>
  )
}

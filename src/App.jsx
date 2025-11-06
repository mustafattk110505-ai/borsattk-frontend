import React from 'react'
import Sidebar from './components/Sidebar'
import ChartPanel from './components/ChartPanel'
import RightPanel from './components/RightPanel'
export default function App(){
  return (
    <div className="min-h-screen grid grid-cols-12 gap-4 p-4 bg-gray-900 text-white">
      <div className="col-span-3"><Sidebar/></div>
      <div className="col-span-6"><ChartPanel/></div>
      <div className="col-span-3"><RightPanel/></div>
    </div>
  )
}

import React from 'react';
import Sidebar from './components/Sidebar';
import ChartPanel from './components/ChartPanel';
import RightPanel from './components/RightPanel';
import CanliSinyalTablosu from "./components/CanliSinyalTablosu";

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-12 gap-4 p-4 bg-gray-900 text-white">
      {/* Sol panel */}
      <div className="col-span-3"><Sidebar/></div>

      {/* Orta panel */}
      <div className="col-span-6">
        <ChartPanel/>
        {/* Canlı sinyal tablosunu buraya ekledik */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold mb-2 text-center">Canlı Sinyaller</h1>
          <CanliSinyalTablosu />
        </div>
      </div>

      {/* Sağ panel */}
      <div className="col-span-3"><RightPanel/></div>
    </div>
  );
}

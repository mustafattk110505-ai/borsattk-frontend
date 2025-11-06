import React from "react";
import Header from "./components/Header";
import SignalBox from "./components/SignalBox";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Canlı Piyasa Verileri</h2>
          <div className="text-gray-400">📈 Veriler yükleniyor...</div>
        </section>
        <aside className="bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Sinyal Durumu</h2>
          <SignalBox />
        </aside>
      </main>
    </div>
  );
};

export default App;

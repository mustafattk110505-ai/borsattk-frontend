import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function CanliSinyalTablosu() {
  const [pariteler, setPariteler] = useState([]);

  useEffect(() => {
    // Render.com'da çalışan backend URL'inizi buraya yazın
    const socket = io("https://borsattk-backend.onrender.com");

    // Backend'den gelen veriyi al
    socket.on("pariteVerisi", (data) => {
      setPariteler(data);
    });

    // Cleanup
    return () => socket.disconnect();
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      {pariteler.length === 0 && <p className="text-center">Veri yükleniyor...</p>}
      {pariteler.map((p) => (
        <div
          key={p.name}
          className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded"
        >
          <span className="font-bold">{p.name}</span>
          <span>{p.fiyat}</span>
          <span className="text-sm">{p.guc}%</span>
        </div>
      ))}
    </div>
  );
}

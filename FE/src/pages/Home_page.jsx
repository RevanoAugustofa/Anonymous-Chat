import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Komponen ExpandableCard
const ExpandableCard = ({ message, time, image, promptId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && responses.length === 0) {
      console.log("Mengambil response untuk promptId:", promptId);
      setLoading(true);

      axios
        .get(`http://127.0.0.1:8000/api/prompts/${promptId}/responses`)
        .then((res) => {
          console.log("Data response:", res.data);
          setResponses(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching responses:", err);
          setLoading(false);
        });
    }
  }, [isOpen, promptId]);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-cover bg-center flex flex-col justify-end rounded-xl pt-[132px] cursor-pointer transition-all"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), transparent), url(${image})`,
      }}
    >
      <div className="p-4">
        <p className="text-white text-2xl font-bold truncate">{message}</p>
        <p className="text-white text-base font-medium">{time}</p>

        {/* Deskripsi dinamis */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[200px] mt-2" : "max-h-0"
          }`}
        >
          <div className="bg-amber-300 p-2 rounded-lg space-y-1 overflow-y-auto">
            {loading ? (
              <p className="text-white text-sm italic">Memuat respons...</p>
            ) : responses.length > 0 ? (
              responses.map((res, idx) => (
                <p key={idx} className="text-white text-sm">
                  {res.isi_balasan}
                </p>
              ))
            ) : (
              <p className="text-white text-sm italic">Tidak ada respons.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Dashboard
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const kodeUnik = localStorage.getItem("kode_unik");
    if (!kodeUnik) {
      console.error("kode_unik tidak ditemukan di localStorage");
      return;
    }

    axios
      .get(`http://127.0.0.1:8000/api/users/${kodeUnik}/prompts`)
      .then((res) => {
        console.log("Prompts:", res.data);
        setAllMessages(
          res.data.map((item) => ({
            message: item.isi_pesan,
            time: item.created_at ?? "Just now",
            image: "https://source.unsplash.com/random/300x200",
            promptId: item.id,
          }))
        );
      })
      .catch((err) => {
        console.error("Axios error:", err);
      });
  }, []);

  const filteredMessages = allMessages.filter((msg) =>
    msg.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#1d2125]">
      {/* Header */}
      <div className="flex flex-wrap items-center bg-[#121417] p-4 pb-4 gap-4 justify-between">
        <Link to="/">
          <h2 className="text-white text-lg font-bold">SayIt</h2>
        </Link>
        <div className="relative flex-1 sm:max-w-xs">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
            <i className="ri-search-line"></i>
          </span>
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 rounded-lg bg-[#2b3136] text-white px-4 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Link to='/create_message'>
          <i className="ri-notification-3-line text-xl text-white"></i>
        </Link>
      </div>

      {/* Filter */}
      <div>
        <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4">
          Messages
        </h3>
        <div className="flex flex-wrap items-center gap-3 px-4 pb-3">
          {["Latest", "Read", "Unread"].map((label) => (
            <Link
              to={`/messages/${label.toLowerCase()}`}
              key={label}
              className="flex h-8 items-center justify-center rounded-full bg-[#2b3136] px-4 hover:bg-[#3a4148] transition-colors"
            >
              <p className="text-white text-sm font-medium">{label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 flex-1">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg, i) => (
            <ExpandableCard
              key={i}
              message={msg.message}
              time={msg.time}
              image={msg.image}
              promptId={msg.promptId}
            />
          ))
        ) : (
          <p className="text-center text-white col-span-2">
            No messages found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

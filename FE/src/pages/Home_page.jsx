import React, { useState } from 'react';

const Dashboard = () => {
  const allMessages = [
    {
      message: 'I love the vibe!',
      time: '2 minutes ago',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0f'
    },
    {
      message: 'Nice work!',
      time: '1 hour ago',
      image: 'https://images.unsplash.com/photo-1503264116251-35a269479413'
    },
    {
      message: 'Keep going!',
      time: 'Yesterday',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredMessages = allMessages.filter(msg =>
    msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navIcons = [
    {
      path: 'M224,115.55V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,6.08-12.45l80-64a16,16,0,0,1,20.8,0l80,64A16,16,0,0,1,224,115.55ZM128,96a16,16,0,1,0,16,16A16,16,0,0,0,128,96Z'
    },
    {
      path: 'M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200H48V168H80Zm0-48H48V120H80Zm0-48H48V72H80Zm96,96H112V168h64Zm0-48H112V120h64Zm0-48H112V72h64Zm32,96H192V168h16Zm0-48H192V120h16Zm0-48H192V72h16Z'
    },
    {
      path: 'M221.8,175.94C216.25,156.48,192.72,144,160,144c-13.13,0-23.84,1.92-32,5.46V136a24,24,0,0,0-48,0v13.35C63.26,144.61,40.58,157,34.2,176.06a8,8,0,1,0,15.39,4.88C55.44,166.77,77.68,152,112,152c41.24,0,64.15,14.79,70.41,28.94A8,8,0,0,0,190,184a8.13,8.13,0,0,0,2.8-.51A8,8,0,0,0,221.8,175.94Z'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#1d2125]">
      {/* Header */}
      <div className="flex flex-wrap items-center bg-[#121417] p-4 pb-4 gap-4 justify-between">
        <h2 className="text-white text-lg font-bold">SayIt</h2>
        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 sm:max-w-xs rounded-lg bg-[#2b3136] text-white px-4 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <i class="ri-notification-3-line text-xl"></i>
      </div>

      {/* Filter */}
      <div>
        <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4">Messages</h3>
        <div className="flex flex-wrap items-center gap-3 px-4 pb-3">
          {['Latest', 'Read', 'Unread'].map((label) => (
            <div key={label} className="flex h-8 items-center justify-center rounded-full bg-[#2b3136] px-4">
              <p className="text-white text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 flex-1">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg, i) => (
            <div
              key={i}
              className="bg-cover bg-center flex flex-col justify-end rounded-xl pt-[132px]"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), transparent), url(${msg.image})`
              }}
            >
              <div className="p-4">
                <p className="text-white text-2xl font-bold">{msg.message}</p>
                <p className="text-white text-base font-medium">{msg.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white col-span-2">No messages found.</p>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="flex gap-2 border-t border-[#2b3136] bg-[#1d2125] px-4 pb-3 pt-2">
        {navIcons.map((icon, i) => (
          <a key={i} href="#" className={`flex flex-1 flex-col items-center gap-1 ${i === 0 ? 'text-white' : 'text-[#a1abb5]'}`}>
            <svg className="h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d={icon.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

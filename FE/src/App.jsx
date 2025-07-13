import React from 'react';
import 'remixicon/fonts/remixicon.css';
import './index.css'; // Import tailwind styles
import noisImage from './assets/nois.jpg'; // Sesuaikan path-nya
import pesanImage from './assets/pesan.png';
import { Link } from 'react-router-dom';

const App = () => {
return (
<div className="flex flex-col w-full min-h-screen bg-[#0f1a24] text-white"
  style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}>

  {/* Header */}
  <header className="flex items-center justify-between bg-[#0f1a24] p-4">
    <div className="w-1/3"></div> {/* Placeholder kiri biar tengah beneran di tengah */}
    <h2 className="text-xl font-bold text-center w-1/3">SayIt</h2>
    <div className="w-1/3 flex justify-end">
      <Link to="/login">
      <p className="text-[#8daece] font-sans hover:text-[#46637f] ">Sign in</p>
      </Link>
    </div>
  </header>

 {/* Hero */}
<section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
  {/* Background */}
  <img 
    src={noisImage} 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-cover opacity-80" 
  />

  {/* pesanImage di tengah atas */}
<div className="absolute top-10 w-full flex justify-center z-20">
  <img src={pesanImage} alt="Pesan" className="w-40 h-40 animate-bounceY" />
</div>

  {/* Konten utama */}
  <div className="relative z-30 flex flex-col items-center justify-center h-full text-center p-6">
    <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl fade-in pb-6">
      Send &amp; Receive Anonymous Messages
    </h1>
    <Link to='/login'>
      <button className="fade-slide-up mt-6 flex items-center gap-2 bg-white rounded-3xl text-black font-bold py-2 px-6 text-sm transition-transform hover:scale-105 group hover:bg-white/10 hover:border-2 hover:text-white">
        Start Now
        <i className="ri-arrow-right-long-line text-2xl transition-transform group-hover:translate-x-1"></i>
      </button>
    </Link>
  </div>
</section>


  {/* Features */}
  <section className="px-6 py-10">
    <h1 className="text-3xl md:text-4xl font-black mb-4">Why Choose SayIt?</h1>
    <p className="text-[#cfd9e2] mb-8 max-w-2xl">
      Experience the freedom of anonymous communication with SayIt. Our platform ensures your privacy while allowing you
      to connect with others openly and honestly.
    </p>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
      {features.map((feature, index) => (
      <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-[#0f1a24] px-6 py-10 text-center">
    <div className="flex flex-wrap justify-center gap-6 mb-6">
      {['Contact', 'About Us', 'Terms of Service', 'Privacy Policy'].map(text => (
      <a key={text} href="#" className="text-[#8daece] text-sm">{text}</a>
      ))}
    </div>

    <div className="flex justify-center gap-4">
      {socialLinks.map(({ name, icon, url }) => (
      <a key={name} href={url} target="_blank" rel="noopener noreferrer"
        className="text-[#8daece] text-xl hover:text-white transition-colors" aria-label={name}>
        <i className={icon}></i>
      </a>
      ))}
    </div>

    <div className='pt-4'>
      <p className='text-sm text-white'>© 2024 SayIt. All rights reserved.</p>
    </div>
  </footer>

</div>
);
};

const FeatureCard = ({ title, desc, icon, link }) => {
  const content = (
    <div className="flex flex-col gap-2 p-4 bg-[#172736] border border-[#2e4e6b] rounded-lg transition-all duration-300 active:scale-95 active:shadow-inner active:bg-[#1e3347]">
      <div className="text-white">{icon}</div>
      <h2 className="font-bold text-base">{title}</h2>
      <p className="text-[#8daece] text-sm">{desc}</p>
    </div>
  );

  return link ? <Link to={link}>{content}</Link> : content;
};

const features = [
  {
    title: "Complete Anonymity",
    desc: "Your identity is always protected. Send and receive messages without revealing your personal information.",
    icon: <i className="ri-shield-check-line text-2xl"></i>
  },
  {
    title: "Connect with Anyone",
    desc: "Reach out to friends, colleagues, or anyone you want to communicate with, all while maintaining your privacy.",
    icon: <i className="ri-group-line text-2xl"></i>
  },
  {
    title: "Secure Messaging",
    desc: "Our platform uses advanced encryption to keep your messages secure and confidential.",
    icon: <i className="ri-lock-2-line text-2xl"></i>,
    link: "Home_page"
  }
];


const socialLinks = [
{
name: 'Twitter',
icon: 'ri-twitter-x-fill',
url: 'https://twitter.com/sayitapp'
},
{
name: 'Instagram',
icon: 'ri-instagram-line',
url: 'https://instagram.com/sayitapp'
},
{
name: 'Facebook',
icon: 'ri-facebook-circle-line',
url: 'https://facebook.com/sayitapp'
}
];

export default App;
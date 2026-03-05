/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Video, 
  BadgeCheck, 
  Building2, 
  Globe, 
  Film, 
  Tv, 
  Palette, 
  ClipboardList, 
  Camera, 
  Clapperboard, 
  Send, 
  Play, 
  CheckCircle, 
  Star, 
  ChevronDown, 
  Mail, 
  MapPin, 
  Timer,
  Menu,
  PlayCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-dark/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a className="text-3xl font-bold tracking-wider font-display" href="#">MOONLIGHT<span className="text-primary">.</span></a>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-sm font-medium tracking-wide">
            <a className="hover:text-primary transition-colors" href="#work">WORK</a>
            <a className="hover:text-primary transition-colors" href="#services">SERVICES</a>
            <a className="hover:text-primary transition-colors" href="#process">PROCESS</a>
            <a className="hover:text-primary transition-colors" href="#pricing">PRICING</a>
            <a className="hover:text-primary transition-colors" href="#contact">CONTACT</a>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest">
            <button className="text-primary">RU</button>
            <span className="text-white/20">|</span>
            <button className="text-white/40 hover:text-white transition-colors">EN</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-primary text-white font-semibold hover:bg-red-700 transition-colors duration-300 rounded-sm font-display text-xl" href="#contact">
            BOOK NOW
          </a>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-surface-dark">
      <img 
        alt="Dubai skyline luxury" 
        className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCusBbDoPTHmQrmfopGwHG0NG6xCC2bFkSf3FwREIIFWmib-An-uGVCa-hg67z9WP8N12JOuB28Ds6KjeDV7kkVIIX_pR-yf2RRY-04itmiiCn3MfOFwrD2m_fJXQ1g-Qf_3QSKbcJHiGuS6tP4MgHBOFUVAXASygd8IRZSEnSiBTd3CGXmOAflX0_akwMo7_NrnvFH8jSmtT0RBTk-nXyZrhIk2mqUb27NZgfkFykSZz2oKxdWPuPPevS104SLn1IKAiT_Xgq-rUT-" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20"
    >
      <p className="text-primary tracking-[0.4em] font-bold text-sm md:text-base mb-6 uppercase">Dubai's Production Powerhouse</p>
      <h1 className="text-6xl md:text-[110px] font-bold leading-[0.9] mb-8 tracking-tighter">
        WE IGNITE YOUR IDEAS<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">WITH UAE PRECISION</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        10+ Years Global, 4+ Years Dubai—Partnering with top venues and talent for seamless productions. We don't just film; we dominate.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a className="group relative px-10 py-5 bg-primary text-white text-2xl font-display font-bold tracking-wider hover:bg-red-700 transition-all overflow-hidden w-full sm:w-auto text-center rounded-sm" href="#contact">
          DOMINATE THE MARKET
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="group flex items-center gap-3 px-10 py-5 border border-white/20 hover:border-white/60 transition-colors w-full sm:w-auto justify-center text-sm font-bold tracking-[0.2em] uppercase rounded-sm" href="#work">
          <PlayCircle className="text-xl" />
          Watch Showreel
        </a>
      </div>
    </motion.div>
  </section>
);

const Stats = () => (
  <section className="py-12 bg-background-dark border-t border-white/10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Years Global Experience', value: '10+' },
          { label: 'Years Dubai Presence', value: '4+' },
          { label: 'Projects Delivered', value: '200+' },
          { label: 'Organic Views', value: '50M+' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="text-4xl md:text-5xl font-bold font-display chrome-text">{stat.value}</span>
            <span className="text-[10px] md:text-xs text-text-muted font-black tracking-widest uppercase">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section className="py-8 bg-surface-dark border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
      <span className="text-[10px] font-black tracking-[0.3em] text-text-muted uppercase shrink-0">Trusted By Industry Leaders</span>
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16">
        {['EXPO CITY', 'DMCC', 'NAKHEEL', 'EMAAR', 'MERAAS'].map((partner) => (
          <span key={partner} className="text-2xl font-bold font-display tracking-widest">{partner}</span>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-background-dark" id="services">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">No Compromise Quality</p>
          <h2 className="text-6xl md:text-8xl font-bold leading-none">CORE SERVICES</h2>
        </div>
        <p className="text-text-muted max-w-sm text-sm uppercase tracking-widest leading-relaxed font-medium">
          We provide end-to-end production with the fastest turnaround in the UAE.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[260px]">
        <div className="md:col-span-3 lg:col-span-4 bento-card chrome-border group">
          <div className="flex justify-between items-start">
            <Smartphone className="text-primary w-12 h-12 transition-transform group-hover:rotate-12" />
            <span className="text-[10px] font-black tracking-tighter border border-primary/30 px-2 py-0.5 text-primary uppercase">Social Dominance</span>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-display">Reels Production</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">Single or monthly packages for social dominance. We make you viral.</p>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-8 bento-card chrome-border group">
          <div className="flex justify-between items-start">
            <Video className="text-primary w-12 h-12 transition-transform group-hover:scale-110" />
            <span className="px-3 py-1 bg-primary text-white text-xs font-bold tracking-widest uppercase">Elite Team</span>
          </div>
          <div>
            <h3 className="text-5xl font-bold font-display">Full Event Coverage</h3>
            <p className="text-text-muted text-sm mt-2 max-w-lg font-medium">Multi-camera teams for forums, galas, and corporate events. Every angle, perfectly captured.</p>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-5 bento-card chrome-border group">
          <BadgeCheck className="text-primary w-12 h-12 mb-4 group-hover:translate-x-2 transition-transform" />
          <div>
            <h3 className="text-4xl font-bold font-display">Brand Content</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">High-end product shoots that convert viewers into customers. Results-driven visuals.</p>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-7 bento-card chrome-border group">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
            <Building2 className="w-44 h-44 text-white" />
          </div>
          <Globe className="text-primary w-12 h-12 mb-4" />
          <div className="relative z-10">
            <h3 className="text-5xl font-bold font-display">Real Estate Media</h3>
            <p className="text-text-muted text-sm mt-2 max-w-md font-medium">Professional visuals for luxury properties in Dubai's competitive market. Selling the dream.</p>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-4 bento-card chrome-border group">
          <Film className="text-primary w-12 h-12 mb-4 group-hover:-translate-y-1 transition-transform" />
          <div>
            <h3 className="text-4xl font-bold font-display">Show Production</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">High-quality YouTube-style content and professional podcast filming. Your show, our expertise.</p>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-4 bento-card chrome-border group">
          <Tv className="text-primary w-12 h-12 mb-4" />
          <div>
            <h3 className="text-4xl font-bold font-display">Multicam Live Stream</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">Real-time coverage for sports, forums, and global digital events. Zero latency, maximum impact.</p>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-4 bento-card chrome-border group">
          <Palette className="text-primary w-12 h-12 mb-4" />
          <div>
            <h3 className="text-4xl font-bold font-display">Music Clips & Art</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">Creative and experimental video projects for artists and visionaries. Push the boundaries.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 bg-surface-dark/30 border-y border-white/5" id="process">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">Surgical Execution</p>
        <h2 className="text-6xl md:text-8xl font-bold leading-none">HOW IT WORKS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {[
          { step: '01', title: 'Brief', icon: ClipboardList, desc: "Tell us what you want. We cut the fluff and extract the core vision in 15 minutes. No time wasted on 'discovery calls' that lead nowhere." },
          { step: '02', title: 'Shoot', icon: Camera, desc: "Our elite crew hits the ground. We capture cinematic gold with UAE precision. We don't 'try' to get the shot—we own it." },
          { step: '03', title: 'Edit', icon: Clapperboard, desc: "The magic happens in our darkroom. High-octane cuts and color grading that makes your competitors look like amateurs." },
          { step: '04', title: 'Deliver', icon: Send, desc: "Final assets delivered via lightning-fast link. You post, you dominate, you repeat. We’re already ready for the next one." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative group"
          >
            <div className="mb-6 flex items-center">
              <span className="text-6xl font-bold font-display chrome-text opacity-20 group-hover:opacity-100 transition-opacity absolute -top-10 left-0">{item.step}</span>
              <item.icon className="w-12 h-12 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-3xl font-bold font-display mb-4">{item.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="py-24 bg-background-dark" id="work">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">Visual Dominance</p>
        <h2 className="text-6xl md:text-8xl font-bold leading-none">PORTFOLIO</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative overflow-hidden group rounded-lg h-[600px] md:row-span-2">
          <img 
            alt="Real Estate Video" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdQIAZunzXgfyXXBOuk73XoAGNpJ3VkdDLhZDre4jKZgvG-WHCsSViLH4t_2EE0qZujnNq1e_w6G10x10FKYUMOym9gL5eQZ6LpY3Tmfh1OS6mHkOegzr64pIp-ERXW6e5kqWOAqUEwxJOrFB6HPj2KdZuNlm-zavNxXag1uXfknQBcV93-g9BFssKtMo-ifMPu2jmQUniQJs4_9KkFcJKkF91rF6reND430QEPFTZMtWwicGt-GVD5IVQIKwTCUIgBM_D5xA6D40X" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span className="text-xs font-black tracking-[0.2em] mb-2">LUXURY REAL ESTATE</span>
            <h4 className="text-4xl font-bold font-display leading-none mb-4">PALM JUMEIRAH VILLA TOUR</h4>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
              <Play />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-lg h-[290px]">
          <img 
            alt="Event Production" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUhTH9RZfrVCggeHrzACf6-Oz6Yvv6rdC5_AftOxe5SrIZS942jIuTOS-xS1UASY5nJKs5wPCWh8DYH8dnkdUR9Ic14VDpBKDZVOQEBqwo_gT_iiPdMefxGmMAs9LvkcJsXwJ7_fqm-Gk12eSYGctZBuHF4Qf8DUshHZhPQZ1c3obg7D6hNyPZi4MFlRx0bb17wn-TIiFWFKuS8y23MtRIRrCW3v-nWxZaMz5uxo2CWgTZV7gj-y1WDCP8ghr8pHeh4vi3kEUWRY3X" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-xs font-black tracking-[0.2em] mb-2">FORUMS</span>
            <h4 className="text-3xl font-bold font-display leading-none mb-4">GLOBAL TECH SUMMIT</h4>
            <Play />
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-lg h-[290px]">
          <img 
            alt="Commercial" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYVPv-YpzdnEWpS4id6UNKPpGmcQoLmUjUcL5YbUAWdsROWr3NDM6UQJ_1ikiRqTMnH6Y37aZGwfYnewdkUc9V9O9i8-4ZNiuwzFCfw3PkbWVBwfyQcxCiyohoVTLz5PL7hZfk0VBf15TzEbqR7qk3UXwbnB-18fG_l8lmkiPulTL_Ap5QpUbCaSYcoi6OMQ8dWj2u8QB9IFFr1-WV3lPGtBpeiAxUxT3uVq3wL1Fb40df1CvqmFlKTfZKKa0wp9Egn67I2fu0qnKd" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-xs font-black tracking-[0.2em] mb-2">COMMERCIAL</span>
            <h4 className="text-3xl font-bold font-display leading-none mb-4">SUPERCARS EMIRATES</h4>
            <Play />
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-lg h-[290px] lg:col-span-2">
          <img 
            alt="Music Video" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvY7q7ElCKGCBuqVrYYtqD0z1i0MYDMHuLB8hVTFy7fsI-k6-4Xd9L5HdrmlkbRV-YsCcpuHgS3hBV0idyd_tvU6Cb9ER0DyVGDCeZ42svHdNjUsGOOavZebt4anzUm2ITc5-uiwoT0zzctZPihimoIND1gur9Ek_iPunkU4i0PSSNkQJ8Gj-UxQo16ckJoO0pUbRtkmm8sMzz9B3Ygzt2AiYeR2hrSbX6dvdsgwfoFbSSAm-J_v-a0RuoJS_iEkPu6FmpaeYDQNXu" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span className="text-xs font-black tracking-[0.2em] mb-2">MUSIC & ART</span>
            <h4 className="text-4xl font-bold font-display leading-none mb-4">DUBAI NIGHTS VISUALS</h4>
            <Play />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-24 bg-surface-dark relative border-y border-white/5" id="pricing">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-bold mb-4 leading-none">INVESTMENT</h2>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
          <CheckCircle className="text-primary w-5 h-5" />
          <span className="text-sm font-bold tracking-[0.2em] uppercase">No Bureaucracy. Just Results.</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-background-dark p-8 rounded-lg border border-white/5 hover:border-primary/50 transition-colors relative flex flex-col group">
          <h3 className="text-3xl font-bold font-display mb-2">ESSENTIAL</h3>
          <p className="text-gray-400 text-sm mb-8 h-12">Perfect for single high-impact promotional videos and social content.</p>
          <div className="mb-10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary font-display">AED</span>
              <span className="text-6xl font-bold font-display group-hover:chrome-text transition-all">5,000</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {['Half-day shoot (4 hrs)', '1x Master Edit (60s)', 'Premium Color Grading'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <a className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-lg font-display tracking-[0.2em] uppercase rounded-sm" href="#contact">GET STARTED</a>
        </div>
        <div className="chrome-border bg-background-dark p-8 rounded-lg relative flex flex-col transform md:-translate-y-6 shadow-2xl z-10 border border-white/10 group">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-6 py-1.5 uppercase tracking-widest rounded-sm">
            MOST REQUESTED
          </div>
          <h3 className="text-3xl font-bold font-display mb-2">PREMIUM</h3>
          <p className="text-gray-400 text-sm mb-8 h-12">Comprehensive production for corporate campaigns and commercial launches.</p>
          <div className="mb-10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2 text-primary">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary font-display">AED</span>
              <span className="text-7xl font-bold font-display chrome-text">12,000</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {['Full-day shoot (8 hrs)', '1x Main + 3x Social Cuts', '4K Drone Cinema Capture', 'Pro Sound Design'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <a className="block w-full py-5 text-center bg-primary text-white hover:bg-red-700 transition-all font-bold text-2xl font-display tracking-[0.2em] uppercase rounded-sm shadow-[0_10px_30px_rgba(255,0,0,0.3)]" href="#contact">CHOOSE PREMIUM</a>
        </div>
        <div className="bg-background-dark p-8 rounded-lg border border-white/5 hover:border-primary/50 transition-colors relative flex flex-col group">
          <h3 className="text-3xl font-bold font-display mb-2">RETAINER</h3>
          <p className="text-gray-400 text-sm mb-8 h-12">Monthly ongoing content creation. We become your dedicated media house.</p>
          <div className="mb-10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary font-display">AED</span>
              <span className="text-6xl font-bold font-display group-hover:chrome-text transition-all">25,000</span>
              <span className="text-gray-500 text-sm font-bold">/MO</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {['Multiple Shoot Days/Month', 'Daily Content Deliverables', 'VIP Priority Editing'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <a className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-lg font-display tracking-[0.2em] uppercase rounded-sm" href="#contact">PARTNER WITH US</a>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-background-dark">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">Testimonials</p>
          <h2 className="text-6xl md:text-8xl font-bold leading-none">CLIENT STORIES</h2>
        </div>
        <div className="bg-surface-dark border border-white/10 p-4 rounded-lg flex items-center gap-4">
          <img 
            alt="Google" 
            className="w-8 h-8" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5a1Ux9U8NZkiNRGLuQZTTcE2k5-Fgg_8ZiFuY87ACeZjvbg_caN1I6HenFHOjIZXra7iLj4xkOslDgu4VzlzeAwQG8hF_kdbiNt5hUrj8ce6FdnysRBOiSk9DZoFcDKRzfhjgChzvs-uvIFncIvI5rrB2BdFlAxWAEfeudHZumYTVRKvqdDuyA1CF-DEGPNfd1ivtBhWpNNuEPB2mWJau98mgNaeHZxR3w8pMu1YJeAXNQUxhyRP5HvgmB9JgeZ8uTqYoVSYgduul" 
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-xs font-black tracking-widest uppercase mt-1">5.0 GOOGLE RATING</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Alexey Romanov', role: 'Founder, Prime Estates', quote: "Moonlight transformed our brand identity. The quality of the property tour they produced resulted in a direct sale within 48 hours. Absolute elite service in Dubai." },
          { name: 'Elena Petrova', role: 'CEO, Visionary Hub', quote: "The fastest turnaround I've ever seen. We needed a recap for our forum in 5 hours, and they delivered a masterpiece. They don't just film; they understand business." },
          { name: 'Maxim Sokolov', role: 'Lifestyle Entrepreneur', quote: "Working with Moonlight is a game-changer for my social presence. 10M+ views on our first campaign together. Their 'no bureaucracy' approach is exactly what I need." },
        ].map((item, i) => (
          <div key={i} className="bg-surface-dark p-8 rounded-xl border border-white/5 relative group">
            <p className="text-lg text-gray-300 mb-8 italic leading-relaxed relative z-10">"{item.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/20"></div>
              <div>
                <p className="font-bold font-display text-xl">{item.name}</p>
                <p className="text-[10px] text-text-muted uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What is the turnaround time?", a: "Fast is an understatement. For standard Reels, we deliver in 24-48 hours. Large event recaps can be delivered same-day if requested. Quality doesn't wait in line here." },
    { q: "Do you provide raw footage?", a: "Yes, raw footage can be included in our Premium and Retainer packages. For Essential shoots, it can be added as a bolt-on service. We don't hold your content hostage." },
    { q: "How do we handle payments in UAE?", a: "We accept local bank transfers (AED), international wires, and major crypto assets. We operate with a fully legal UAE entity—no shady handshakes, just professional contracts." },
    { q: "Can you help with scriptwriting and creative?", a: "We don't just push record. Our team includes creative directors who help refine your hooks and messaging for maximum conversion. We are partners in your success." },
  ];

  return (
    <section className="py-24 bg-surface-dark/50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">Direct Answers</p>
          <h2 className="text-6xl md:text-8xl font-bold leading-none">COMMON QUESTIONS</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-background-dark border border-white/5 rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors text-left"
              >
                <span className="text-xl md:text-2xl font-bold font-display tracking-wide">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''} text-primary`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black relative py-32 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-[100px] font-bold mb-8 font-display leading-none tracking-tighter">STOP THINKING.<br/><span className="text-primary">START PRODUCING.</span></h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-lg leading-relaxed">The best entrepreneurs in the UAE don't wait for the 'perfect moment'. They create it. We are the architects of that moment.</p>
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">Direct Line</p>
                  <a className="text-2xl font-bold hover:text-primary transition-colors font-display" href="mailto:hello@moonlight.ae">HELLO@MOONLIGHT.AE</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">Global HQ</p>
                  <p className="text-2xl font-bold font-display">DUBAI MEDIA CITY, BLDG 10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chrome-border bg-surface-dark p-10 rounded-xl shadow-2xl relative">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-center bg-red-950/40 p-5 rounded border border-primary/30 gap-4">
              <div className="flex items-center gap-3 text-primary">
                <Timer className="animate-pulse" />
                <span className="font-black text-sm tracking-widest uppercase">LIMITED AVAILABILITY</span>
              </div>
              <div className="flex gap-4 font-mono text-xl">
                <div className="text-center">
                  <span className="block text-white font-bold">02</span>
                  <span className="text-[8px] text-primary uppercase font-bold">Slots Left</span>
                </div>
                <div className="text-white/20">:</div>
                <div className="text-center">
                  <span className="block text-white font-bold">
                    {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[8px] text-primary uppercase font-bold">Next Refresh</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Founder / CEO Name</label>
                  <input className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter name" type="text"/>
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">WhatsApp / Phone</label>
                  <input className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+971..." type="tel"/>
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Project Vision</label>
                <select className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                  <option>Commercial / Ads</option>
                  <option>Monthly Social Retainer</option>
                  <option>Real Estate Portfolio</option>
                  <option>Elite Event Coverage</option>
                  <option>Music / Art Production</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Project Scale & Brief</label>
                <textarea className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us how you want to disrupt the industry..." rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-white font-black text-2xl font-display tracking-[0.3em] py-5 rounded-sm hover:bg-red-700 transition-all mt-6 shadow-lg shadow-primary/20" type="button">
                LOCK IN CONSULTATION
              </button>
              <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-4">Typical response time: Under 120 minutes</p>
            </form>
          </div>
        </div>
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl font-bold tracking-wider font-display">MOONLIGHT<span className="text-primary">.</span></p>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-widest">Global Precision. Dubai Execution.</p>
          </div>
          <p className="text-xs text-gray-500 font-medium">© 2024 MOONLIGHT MEDIA DUBAI. UNRIVALED QUALITY SINCE DAY ONE.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
            <a className="hover:text-primary transition-colors" href="#">Vimeo</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => (
  <a className="fixed bottom-10 right-10 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 border-4 border-white/10" href="https://wa.me/971500000000">
    <svg fill="currentColor" height="32" viewBox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
    </svg>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

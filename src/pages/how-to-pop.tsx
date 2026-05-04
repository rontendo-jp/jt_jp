import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn, Navbar, Footer } from '../Shared';

/**
 * How to Pop Page - Instructions for perfect Jolly Time popcorn
 * Featuring real product instructional photos.
 * 
 * [FIX]: Bypassing optimizeImage and ensuring direct image display.
 */

const StepCard = ({ number, title, desc, image }: { number: string, title: string, desc: string, image: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100 flex flex-col h-full group"
  >
    <div className="aspect-[4/3] overflow-hidden relative bg-stone-200">
      {/* 
        CRITICAL: Using direct image URL without optimization proxy 
        to ensure visibility across all network conditions.
      */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="eager"
      />
      <div className="absolute top-4 left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black shadow-lg z-10">
        {number}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-2xl font-black text-stone-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-stone-600 font-medium leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default function HowToPopPage() {
  useEffect(() => {
    document.title = "おいしい作り方 | Jolly Time Popcorn Japan";
    window.scrollTo(0, 0);

    // Add favicon
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    // @ts-ignore
    link.rel = 'icon';
    // @ts-ignore
    link.href = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777887931039-ce221e69/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const openContactForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('eqQ6xJ', { layout: 'modal', width: 700 });
    } else {
      window.open('https://tally.so/forms/eqQ6xJ', '_blank');
    }
  };

  const steps = [
    {
      number: "1",
      title: "袋をセットする",
      desc: "袋を広げ、「THIS SIDE UP（こちらを上に）」と書かれた面を上にして電子レンジの中央に置きます。",
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777620533709-5368e271/ThisSideUp.png"
    },
    {
      number: "2",
      title: "加熱を開始する",
      desc: "電子レンジの「強」で1分45秒〜3分加熱してください。ポップ音の間隔が約2秒になったら、加熱を止めてください。",
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777620533845-b1a2aa8a/3Mins.png"
    },
    {
      number: "3",
      title: "慎重に開ける",
      desc: "袋の左右の角を持ち、顔を近づけずに開けてください。熱い蒸気によるやけどにご注意ください。",
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777620533974-09c45792/Open.png"
    }
  ];

  return (
    <div className="font-sans antialiased text-stone-900 bg-stone-50 selection:bg-yellow-400 selection:text-stone-900">
      <Navbar onContactClick={openContactForm} transparent={false} />
      
      <section className="pt-40 pb-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full mb-8 font-black tracking-widest uppercase text-sm"
            >
              <ChefHat size={20} /> How to Make
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              おいしい作り方
            </h1>
            <p className="text-xl text-stone-300 font-medium leading-relaxed">
              電子レンジでたったの3分。失敗せずにおいしいポップコーンを作るための、ちょっとしたコツをご紹介します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <StepCard key={idx} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-stone-900 tracking-tighter">
            最高の映画体験を、今すぐ。
          </h2>
          <Link to={process.env.NODE_ENV === 'production' ? "/jt_jp" : "/"} className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-200 group">
             トップへ戻る <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer onContactClick={openContactForm} />
    </div>
  );
}

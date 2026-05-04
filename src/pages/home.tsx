import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Heart, ArrowRight, Wheat, Film, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { cn, optimizeImage, Navbar, Footer } from '../Shared';
import { useNavigate } from 'react-router-dom';

/**
 * The home page of Jolly Time Popcorn Japan
 */

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-red-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-yellow-500 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left text-white order-1"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center bg-yellow-400 text-stone-900 px-6 py-2 rounded-full text-xs md:text-sm font-black tracking-widest mb-8 shadow-lg transform -rotate-2"
            >
              1914年創業 • アメリカ老舗ブランド
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tighter drop-shadow-lg">
              100年以上、<br/>
              <span className="text-yellow-400 relative inline-block pb-2">
                アメリカの家族
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
              とともに。
            </h1>
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-white/90">
               映画館の原点となった<br className="md:hidden"/>ポップコーン体験を、日本へ。
            </h2>
            <p className="text-base md:text-lg text-red-100 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
              1914年創業のアメリカ老舗ポップコーンブランド Jolly Time（ジョリータイム）。
              家族で映画を観る時間、週末のリラックスタイム、そんな“特別ではないけれど大切な時間”を支えてきた味です。
            </p>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="relative h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center mt-0 md:mt-0 order-2"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] border-[2px] border-white/20 rounded-full border-dashed" 
               />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="w-[250px] md:w-[450px] h-[250px] md:h-[450px] border-[10px] md:border-[20px] border-white/10 rounded-full" 
               />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 6 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              className="relative z-20 w-[90%] sm:w-[80%] md:w-[550px] lg:w-[650px] h-auto rounded-2xl md:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] md:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transform hover:rotate-3 transition-transform duration-500 overflow-hidden bg-white"
            >
               <img 
                 src={optimizeImage("https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768640983011-0c4b1bfc/1411669370000-75th-Anniversary-Product-Set.jpg.webp", 1200)}
                 alt="Jolly Time Product Set" 
                 className="w-full h-auto object-contain"
                 width="1200"
                 height="900"
                 loading="eager"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6 text-white text-right">
                  <span className="block font-black text-lg md:text-xl tracking-widest uppercase mb-1">Original</span>
                  <span className="block text-xs md:text-sm">Since 1914</span>
               </div>
            </motion.div>
            
            {[1, 2, 3].map((i) => (
               <motion.div 
                 key={i}
                 animate={{ y: [-20, 20, -20], rotate: [0, 45, -45, 0] }}
                 transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i }}
                 className={cn(
                   "absolute w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg z-30 flex items-center justify-center",
                   i === 1 ? "top-10 left-10 md:top-20 md:left-20" : i === 2 ? "bottom-20 right-5 md:bottom-40 md:right-10" : "top-1/2 left-0 hidden sm:flex"
                 )}
               >
                  <span className="text-xl md:text-2xl">🍿</span>
               </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="order-3 col-span-1 md:col-span-2 md:mt-[-40px]"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <button 
                onClick={onContactClick}
                className="w-full sm:w-auto bg-yellow-400 text-stone-900 px-8 py-4 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 group"
              >
                お問い合わせ <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-4 text-xs text-white/60 text-center md:text-left">
              ※本サイトは商品紹介・ブランド情報サイトです。
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-sm font-bold tracking-widest uppercase opacity-70">Scroll</span>
        <div className="w-1 h-12 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            animate={{ y: [0, 50] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-full h-1/2 bg-yellow-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

const HistorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const historyPhotos = [
    {
      url: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768653369854-c218b61a/1411669370011-Jolly-Time-Founder-Cloid-Smith.jpg.webp",
      caption: "創業者 クロイド・H・スミス",
      year: "1914"
    },
    {
      url: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768640923738-137814b1/1411669370003-Aurthur-Godfrey-Brochure-Inside.jpg.webp",
      caption: "ヴィンテージ広告",
      year: "Vintage"
    },
    {
      url: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768652572474-2719f057/1411669370010-Jolly-Time-Can-with-Handle.jpg.webp",
      caption: "金属製の缶パッケージ",
      year: "1920s"
    },
    {
      url: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768652572716-890aac1e/1411669370016-Ozzie-and-Harriet-EatingPopcorn.jpg.webp",
      caption: "アメリカの家族の風景",
      year: "Classic"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % historyPhotos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + historyPhotos.length) % historyPhotos.length);
  };

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextImage();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section id="history" className="py-24 bg-[#FFFDF7] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="flex flex-col md:flex-row gap-16 md:items-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="w-full md:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative group w-full"
             >
               <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary -translate-x-4 -translate-y-4"></div>
               
               <div className="bg-stone-200 rounded-sm overflow-hidden shadow-2xl relative aspect-[4/3] md:aspect-[4/3] flex items-center justify-center">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentIndex}
                     initial={{ opacity: 0, scale: 1.1 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.6, ease: "easeInOut" }}
                     className="absolute inset-0"
                   >
                     <img 
                       src={optimizeImage(historyPhotos[currentIndex].url, 800)}
                       alt={historyPhotos[currentIndex].caption} 
                       className="w-full h-full object-contain bg-stone-100 p-2 md:p-0"
                       loading="lazy"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 text-white">
                       <p className="text-xs md:text-sm font-medium tracking-wide italic opacity-90">{historyPhotos[currentIndex].caption}</p>
                     </div>
                   </motion.div>
                 </AnimatePresence>

                 <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                   <button 
                     onClick={prevImage} 
                     className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 md:bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all pointer-events-auto"
                   >
                     <ChevronLeft size={20} />
                   </button>
                   <button 
                     onClick={nextImage} 
                     className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 md:bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all pointer-events-auto"
                   >
                     <ChevronRight size={20} />
                   </button>
                 </div>
               </div>

               <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-yellow-400 rounded-full shadow-lg transform rotate-6 min-w-[100px] md:min-w-[120px] aspect-square flex items-center justify-center z-20">
                 <AnimatePresence mode="wait">
                   <motion.div 
                     key={currentIndex}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     className="flex flex-col items-center justify-center text-stone-900 leading-tight"
                   >
                     {!(historyPhotos[currentIndex].year.includes('Vintage') || historyPhotos[currentIndex].year.includes('Classic')) && (
                       <span className="text-[10px] md:text-xs font-black opacity-60">EST.</span>
                     )}
                     <span className="text-2xl md:text-3xl font-black">{historyPhotos[currentIndex].year}</span>
                   </motion.div>
                 </AnimatePresence>
               </div>

               <div className="flex justify-center gap-2 mt-8 md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2">
                 {historyPhotos.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => setCurrentIndex(i)}
                     className={cn(
                       "w-2.5 h-2.5 rounded-full transition-all duration-300",
                       currentIndex === i ? "bg-primary w-8" : "bg-stone-300 hover:bg-stone-400"
                     )}
                   />
                 ))}
               </div>
             </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">History</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">
              100年以上続く、<br/>Jolly Time の物語
            </h2>
            <div className="space-y-6 text-stone-700 leading-relaxed font-medium">
              <p>
                Jolly Time の歴史は 1914年、アメリカ中西部の農業地帯から始まりました。
              </p>
              <p>
                創業者 クロイド・H・スミスは、「家庭で、誰でも失敗せずにおいしいポップコーンを作れること」にこだわり続けました。
              </p>
              <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm mt-8">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  Guaranteed to Pop（必ず弾ける）
                </h4>
                <p className="text-sm text-stone-600">
                  1920年代には、湿気を防ぎ、品質を守るため紙箱ではなく“金属製の缶パッケージ”を採用。当時の広告には、品質への自信を表すこの言葉が掲げられていました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FarmersSection = () => {
  return (
    <section id="farmers" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
         <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #222 25%, #222 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-yellow-400 font-bold tracking-widest uppercase mb-4 block">Our Farmers</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            世代を超えて受け継がれる、<br/>家族農家との直接契約
          </h2>
          <p className="text-stone-300 text-lg">
            Jolly Time の品質を支えているのは、工場ではありません。それは、アメリカ中西部の家族経営農家です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768641064160-f0a5f4bb/1411669370001-Another-Field-of-Jolly-Time-Pop-Corn.jpg.webp",
              icon: <Star className="text-yellow-400" size={24} />, 
              title: "アイオワ州の誇り", 
              desc: "1914年から Jolly Time のコーンが栽培されている、サック郡の農場。" 
            },
            { 
              image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768641185850-3ca0d2fb/1411669370020-Wrede-Smith-in-Corn-Field.jpg.webp",
              icon: <Wheat className="text-amber-500" size={24} />, 
              title: "品質の追求", 
              desc: "畑でコーンの成長を見守る。家族農家との直接契約が、変わらぬ味を守ります。" 
            },
            { 
              image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768641271265-3ad34c2d/our-grower-hogue.webp",
              icon: <Heart className="text-red-400" size={24} />, 
              title: "三世代の物語", 
              desc: "ホーグ家のジャック、タイラー、リンカーン。100年を超える信頼の絆。",
              objectPosition: "object-[center_top]"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-stone-800/50 rounded-2xl border border-stone-700 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                 <img 
                   src={optimizeImage(item.image, 600)} 
                   alt={item.title} 
                   className={cn(
                     "w-full h-full object-cover transition-transform duration-700 hover:scale-110",
                     item.objectPosition || "object-center"
                   )} 
                   loading="lazy"
                   width="400"
                   height="300"
                 />
                 <div className="absolute top-4 left-4 bg-stone-900/80 p-2 rounded-full backdrop-blur-md border border-stone-700">
                    {item.icon}
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-stone-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
             これは、数ある契約農家のほんの一例です。<br className="hidden md:block" />
             Jolly Time には、同じように世代を超えて契約が続く家族農家が数多く存在します。
           </p>
        </div>
      </div>
    </section>
  );
};

const GlobalSection = () => {
  const countries = [
    { name: "アメリカ", flag: "🇺🇸" },
    { name: "湾岸諸国", flag: "🇸🇦" },
    { name: "インドネシア", flag: "🇮🇩" },
    { name: "台湾", flag: "🇹🇼" },
  ];

  return (
    <section id="global" className="py-20 bg-blue-600 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
               世界の家庭で<br/>親しまれてきた味
             </h2>
             <p className="text-blue-100 text-lg mb-8 font-medium">
               Jolly Time は、アメリカだけのブランドではありません。世界中の家庭で楽しまれています。<br/>
               共通しているのは、「家族で過ごす時間に、ポップコーンがあること」。
             </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
             {countries.map((c, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors"
               >
                 <div className="text-4xl mb-2">{c.flag}</div>
                 <div className="font-bold">{c.name}</div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FlavorsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const flavors = [
    { 
      id: "blast-o-butter",
      name: "Blast O Butter", 
      nameKana: "ブラスト・オー・バター",
      desc: "アメリカ映画館の定番。アクション映画のあの興奮に、じゅわっと広がる濃厚バターがぴったり。手が止まらないまま、エンドロールを迎える。",
      color: "bg-yellow-400",
      tag: "THEATER STYLE",
      poppedImage: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768639991405-047c7ec0/IM4_8760s.jpg",
      boxImage: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768639990703-4b3ad643/IM4_8712s.jpg"
    },
    { 
      id: "the-big-cheez",
      name: "The Big Cheez", 
      nameKana: "ザ・ビッグ・チーズ",
      desc: "アメリカのショッピングモール発。ドラマ映画のじっくり見入る夜に、濃厚チェダーの旨みがクセになる。気づけば袋の底まで。",
      color: "bg-orange-500",
      tag: "RICH CHEDDAR",
      poppedImage: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768639991642-ff9f95cb/IM4_8780s.jpg",
      boxImage: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768639990940-68de0a0d/IM4_8717s.jpg"
    },
    { 
      id: "fun-mania",
      name: "Fun Mania", 
      nameKana: "ファン・マニア",
      desc: "アメリカの遊園地から生まれた甘じょっぱさ。家族みんなで囲むファミリー映画の夜に、取り合いになること間違いなし。",
      color: "bg-purple-400",
      tag: "SWEET & SALTY",
      poppedImage: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768639992145-ecc807a5/IM4_8788s.jpg",
      boxImage: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768639990457-8de9069d/IM4_8708s.jpg"
    }
  ];

  return (
    <section id="flavors" className="py-32 bg-stone-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
           <span className="text-primary font-black tracking-[0.3em] uppercase mb-6 block text-sm">LINEUP</span>
           <h2 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight mb-4">
             大胆で、正直な<br className="md:hidden" />アメリカの味
           </h2>
           <h3 className="text-lg md:text-2xl font-bold text-primary mb-8 tracking-tight">
             ― アメリカの日常を、そのままポップコーンに ―
           </h3>
           <p className="text-stone-600 font-medium leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
             Jolly Time は、100年以上アメリカの家庭で親しまれてきたポップコーン。<br className="hidden md:block" />
             それぞれのフレーバーには、アメリカの“ある場所”と“そこでの体験”が込められています。
           </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
            {flavors.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate(`/product/${item.id}`)}
                className="group relative flex flex-col h-full cursor-pointer"
              >
                <div className={cn(
                  "aspect-square rounded-3xl mb-8 relative overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl",
                  item.color
                )}>
                   <div className="absolute top-5 left-5 z-30">
                     <span className="bg-stone-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{item.tag}</span>
                   </div>

                   <motion.div 
                     className="absolute inset-0 flex items-center justify-center p-4"
                     initial={false}
                     animate={{ 
                       opacity: hoveredIndex === index ? 0 : 1,
                       scale: hoveredIndex === index ? 0.9 : 1
                     }}
                     transition={{ duration: 0.4, ease: "easeInOut" }}
                   >
                      <img 
                        src={optimizeImage(item.poppedImage, 700)} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                   </motion.div>

                   <motion.div 
                     className="absolute inset-0 flex items-center justify-center p-8"
                     initial={false}
                     animate={{ 
                       opacity: hoveredIndex === index ? 1 : 0,
                       scale: hoveredIndex === index ? 1 : 1.1,
                       rotate: hoveredIndex === index ? 0 : 5
                     }}
                     transition={{ duration: 0.4, ease: "easeInOut" }}
                   >
                      <img 
                        src={optimizeImage(item.boxImage, 500)} 
                        alt={`${item.name} Box`} 
                        className="w-auto h-full object-contain drop-shadow-2xl"
                        loading="lazy"
                      />
                   </motion.div>

                   <div className="absolute bottom-6 right-6 w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                      <Info size={24} />
                   </div>

                   <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                     <span className={cn(
                       "w-2 h-2 rounded-full transition-all duration-300",
                       hoveredIndex === index ? "bg-white/40" : "bg-white w-6"
                     )} />
                     <span className={cn(
                       "w-2 h-2 rounded-full transition-all duration-300",
                       hoveredIndex === index ? "bg-white w-6" : "bg-white/40"
                     )} />
                   </div>
                </div>
                
                <h3 className="text-2xl font-black text-stone-900 mb-1">{item.name}</h3>
                <span className="text-sm text-stone-500 font-medium mb-3 block">{item.nameKana}</span>
                <p className="text-stone-600 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

const MovieNightSection = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section className="py-24 bg-red-600 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
             <Film size={64} className="mx-auto md:mx-0 mb-6 text-yellow-400 opacity-80" />
             <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
               アメリカの家庭の風景を、<br/>日本の食卓へ
             </h2>
             <p className="text-xl mb-12 font-medium opacity-90 leading-relaxed">
               電子レンジで簡単調理。特別な道具はいりません。<br/>
               映画を流し、ポップコーンを囲み、家族が自然と集まる。<br/>
               そんな時間を、ぜひご自宅でお楽しみください。
             </p>
             <button 
               onClick={onContactClick}
               className="bg-white text-red-600 px-10 py-5 rounded-full font-black text-xl shadow-xl hover:bg-yellow-400 hover:text-stone-900 transition-all transform hover:-translate-y-1"
             >
               お問い合わせ
             </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="relative w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl"
             >
                <img 
                  src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/projects/14430fa0-1869-4631-b9db-262b1aa6502c/generated-images/generated-f18e5fe0-ad73-4d28-82ea-37dbe1e23a44.png"
                  alt="Japanese family enjoying movie night with Jolly Time popcorn"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent pointer-events-none" />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Jolly Time Popcorn Japan";
    
    // Add favicon
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    // @ts-ignore
    link.rel = 'icon';
    // @ts-ignore
    link.href = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777887931039-ce221e69/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);

    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript && existingScript.parentNode) {
        // existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  const openContactForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('eqQ6xJ', {
        layout: 'modal',
        width: 700,
      });
    } else {
      window.open('https://tally.so/forms/eqQ6xJ', '_blank');
    }
  };

  return (
    <div className="font-sans antialiased text-stone-900 bg-stone-50 selection:bg-yellow-400 selection:text-stone-900">
      <Navbar onContactClick={openContactForm} />
      <Hero onContactClick={openContactForm} />
      <HistorySection />
      <FarmersSection />
      <GlobalSection />
      <FlavorsSection />
      <MovieNightSection onContactClick={openContactForm} />
      <Footer onContactClick={openContactForm} />
    </div>
  );
}

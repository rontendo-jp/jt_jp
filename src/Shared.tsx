import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Heart, Menu, X, ArrowRight, ChefHat, Wheat, Film, MapPin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Common layout components and utilities for Jolly Time Popcorn Japan
 */

declare global {
  interface Window {
    Tally: any;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const optimizeImage = (url: string, width: number = 800) => {
  if (!url) return '';
  if (url.endsWith('.svg')) return url;
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=webp&q=80`;
};

export const Navbar = ({ onContactClick, transparent = true }: { onContactClick: () => void, transparent?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'History', label: 'ストーリー', path: 'history' },
    { name: 'Farmers', label: '家族農家', path: 'farmers' },
    { name: 'Flavors', label: 'フレーバー', path: 'flavors' },
    { name: 'HowToPop', label: '作り方', path: '/how-to-pop' },
    { name: 'About', label: '運営会社', path: 'about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, path: string) => {
    if (path.startsWith('/')) {
      const fullPath = process.env.NODE_ENV === 'production' ? `/jt_jp${path}` : path;
      navigate(fullPath);
      return;
    }
    
    e.preventDefault();
    setIsMenuOpen(false);
    
    const currentHash = window.location.hash.split('?')[0];
    const isHomePage = currentHash === '#/' || currentHash === '#/jt_jp' || currentHash === '#/jt_jp/';
    
    if (!isHomePage) {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          const offset = 80;
          const elementRect = element.getBoundingClientRect().top;
          const offsetPosition = elementRect + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500); // Increased delay for stability
    } else {
      const element = document.getElementById(path);
      if (element) {
        const offset = 80;
        const elementRect = element.getBoundingClientRect().top;
        const offsetPosition = elementRect + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        isScrolled || !transparent ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to={process.env.NODE_ENV === 'production' ? "/jt_jp" : "/"} className="relative z-50 block w-24 md:w-32 transition-transform hover:scale-105">
          <div className="bg-white rounded-lg p-1 shadow-sm">
             <img 
               src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768637819387-f1513167/logo-jolly-time.svg" 
               alt="Jolly Time Popcorn" 
               className="w-full h-auto"
               width="128"
               height="64"
             />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            !item.path.startsWith('/') ? (
              <a 
                key={item.name} 
                href={`#${item.path}`}
                onClick={(e) => handleNavClick(e, item.path)}
                className={cn(
                  "font-bold transition-colors text-sm uppercase tracking-wider",
                  isScrolled || !transparent ? "text-stone-800 hover:text-primary" : "text-white hover:text-yellow-300"
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={process.env.NODE_ENV === 'production' && item.path.startsWith('/') ? `/jt_jp${item.path}` : item.path}
                className={cn(
                  "font-bold transition-colors text-sm uppercase tracking-wider",
                  isScrolled || !transparent ? "text-stone-800 hover:text-primary" : "text-white hover:text-yellow-300"
                )}
              >
                {item.label}
              </Link>
            )
          ))}
          <button 
            onClick={onContactClick}
            className={cn(
              "px-6 py-2.5 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-lg text-sm tracking-wide flex items-center gap-2",
              isScrolled || !transparent
                ? "bg-primary text-white hover:bg-red-700 shadow-red-200" 
                : "bg-white text-primary hover:bg-yellow-300 hover:text-red-700 shadow-black/20"
            )}
          >
            お問い合わせ <ArrowRight size={16} />
          </button>
        </div>

        <button 
          className={cn("md:hidden relative z-50 p-2", isScrolled || !transparent ? "text-stone-800" : "text-white")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} className="text-stone-900" /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-full md:w-[400px] h-screen bg-yellow-400 flex flex-col items-center justify-center space-y-8 md:hidden shadow-2xl z-40"
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                 <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                 <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500 rounded-full blur-3xl"></div>
              </div>

              {navItems.map((item) => (
                !item.path.startsWith('/') ? (
                  <a 
                    key={item.name} 
                    href={`#${item.path}`}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-3xl font-black text-stone-900 hover:text-white transition-colors uppercase tracking-tight transform hover:scale-110 duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={item.name} 
                    to={process.env.NODE_ENV === 'production' && item.path.startsWith('/') ? `/jt_jp${item.path}` : item.path}
                    className="text-3xl font-black text-stone-900 hover:text-white transition-colors uppercase tracking-tight transform hover:scale-110 duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onContactClick();
                }}
                className="mt-8 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-xl hover:bg-red-600 hover:text-white transition-all transform hover:rotate-2"
              >
                お問い合わせ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export const Footer = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <footer id="about" className="bg-stone-900 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-8 w-64">
               <img 
                 src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1768637908626-5bb63ed9/logo-the-official-snack-of-happiness-on-primary.svg" 
                 alt="The Official Snack of Happiness"
                 className="w-full h-auto"
                 width="200"
                 height="100"
               />
            </div>
            <div className="space-y-4 text-stone-400">
               <h4 className="font-bold text-white text-lg">日本での取り扱いについて</h4>
               <p className="text-sm leading-relaxed">
                 Jolly Time ポップコーンは、日本向けに正規輸入された商品です。<br/>
                 本ブランドの日本展開は、<a href="https://intellizen.jp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 underline decoration-yellow-400/30 underline-offset-4 transition-colors">Intellizen合同会社</a>が行っています。
               </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-6 text-yellow-400 uppercase tracking-wider">Company</h4>
            <div className="text-stone-300 space-y-2">
               <p className="font-bold text-white">運営会社</p>
               <p><a href="https://intellizen.jp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Intellizen合同会社</a></p>
               <p className="text-sm mt-1">050-1807-2888</p>
            </div>
          </div>
          
          <div>
             <h4 className="font-black text-xl mb-6 text-yellow-400 uppercase tracking-wider">Contact</h4>
             <button 
               onClick={onContactClick}
               className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors mb-6 group w-full text-left"
              >
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail size={18} />
                </div>
                <span>お問い合わせフォーム</span>
             </button>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-xs font-medium">
          <p>JOLLY TIME® は American Pop Corn Company の登録商標です。</p>
          <div className="flex gap-8">
             <p>&copy; {new Date().getFullYear()} Jolly Time Popcorn.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

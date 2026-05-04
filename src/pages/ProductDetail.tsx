import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Info, AlertCircle, Star, ArrowRight, Package, ShieldCheck, Wheat } from 'lucide-react';
import { cn, optimizeImage, Navbar, Footer } from '../Shared';

/**
 * Product Detail Page for Jolly Time Lineup Variant
 * Displays nutrition, allergen, and ingredient info for each flavor.
 * Refined layout for 3-Pack value section.
 */

interface ProductInfo {
  name: string;
  nameKana: string;
  subName: string;
  description: string;
  flavorDesc: string;
  color: string;
  accentColor: string;
  vibeImage: string;
  anatomyImage: string;
  ingredients: string;
  nutrition: {
    calories: string;
    protein: string;
    fat: string;
    carbs: string;
    salt: string;
  };
  allergens: string[];
  notes?: string;
}

const PRODUCTS: Record<string, ProductInfo> = {
  'blast-o-butter': {
    name: 'Blast O Butter',
    nameKana: 'ブラスト・オー・バター',
    subName: 'シアタースタイル・バター味',
    description: 'アメリカ映画館の王道。本物のバター由来のコクと香り。一口食べれば、そこはもう映画館の最前列。',
    flavorDesc: 'アメリカ映画館の王道。本物のバター由来のコクと香り。',
    color: 'bg-yellow-400',
    accentColor: 'text-yellow-600',
    vibeImage: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777894052068-21fb389b/03_Image_2.png',
    anatomyImage: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777894051518-13817fd6/03_Image_3.png',
    ingredients: 'とうもろこし（遺伝子組換え不分別）、パーム油、食塩、バター、脱脂バターミルクパウダー／香料、着色料（アナトー）、酸化防止剤（ローズマリー抽出物、L-アスコルビン酸）',
    nutrition: {
      calories: '480 kcal',
      protein: '6.0 g',
      fat: '30.0 g',
      carbs: '54.0 g',
      salt: '2.6 g'
    },
    allergens: ['乳成分'],
    notes: 'お子様には与えないでください（窒息のおそれ)。'
  },
  'fun-mania': {
    name: 'Fun Mania',
    nameKana: 'ファン・マニア',
    subName: '甘じょっぱさが楽しいケトルコーン',
    description: '甘さと塩味の絶妙なバランス。家族みんなで楽しめる、アメリカの遊園地を思わせるワクワクするフレーバー。',
    flavorDesc: '甘さと塩味のバランス。家族みんなで楽しめるフレーバー。',
    color: 'bg-purple-400',
    accentColor: 'text-purple-600',
    vibeImage: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777894051938-2e816a7c/02_Image_2.png',
    anatomyImage: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777894051651-d7d83c0a/02_Image_3.png',
    ingredients: 'とうもろこし(遺伝子組換え不分別)、パーム油、食塩、砂糖、コーンスターチ ／ 乳化剤(ひまわり由来)、香料、酸化防止剤(ローズマリー抽出物、L-アスコルビン酸)、甘味料(スクラロース)',
    nutrition: {
      calories: '480 kcal',
      protein: '6.0 g',
      fat: '30.0 g',
      carbs: '54.0 g',
      salt: '1.8 g'
    },
    allergens: [],
    notes: 'お子様には与えないでください（窒息のおそれ)。'
  },
  'the-big-cheez': {
    name: 'The Big Cheez',
    nameKana: 'ザ・ビッグ・チーズ',
    subName: '濃厚チェダーチーズ味',
    description: '濃厚なチェダーチーズ。大人も満足する、アメリカらしい大胆で正直な味わい。チーズ好きにはたまらない一品。',
    flavorDesc: '濃厚なチェダーチーズ。大人も満足する、アメリカらしい味わい。',
    color: 'bg-orange-500',
    accentColor: 'text-orange-600',
    vibeImage: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777894051790-3f1e8f96/01_Image_2.png',
    anatomyImage: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777894051344-1b39b67f/01_Image_3.png',
    ingredients: 'とうもろこし(遺伝子組換え不分別)、パーム油、食塩、酵母エキス、香辛料(マスタード)/ 調味料(アミノ酸等)、香料、着色料(アナトー、パプリカ色素)、乳化剤(ひまわり由来)、酸化防止剤(ローズマリー抽出物、L-アスコルビン酸)',
    nutrition: {
      calories: '450 kcal',
      protein: '6.0 g',
      fat: '27.0 g',
      carbs: '54.0 g',
      salt: '2.7 g'
    },
    allergens: ['乳成分', '大豆'],
    notes: 'お子様には与えないでください（窒息のおそれ)。'
  }
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? PRODUCTS[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.name} | Jolly Time Japan`;
    }

    // Add favicon
    const link = (document.querySelector("link[rel~='icon']") as HTMLLinkElement) || document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1777887931039-ce221e69/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [slug, product]);

  const openContactForm = () => {
    // @ts-ignore
    if (window.Tally) {
      // @ts-ignore
      window.Tally.openPopup('eqQ6xJ', {
        layout: 'modal',
        width: 700,
      });
    } else {
      window.open('https://tally.so/forms/eqQ6xJ', '_blank');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-stone-50">
        <h1 className="text-2xl font-black mb-4">Product Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="bg-primary text-white px-6 py-2 rounded-full font-bold"
        >
          ホームへ戻る
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-yellow-400 selection:text-stone-900">
      <Navbar onContactClick={openContactForm} transparent={false} />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-white"
            >
              <img 
                src={optimizeImage(product.vibeImage, 1000)} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={cn("inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 text-white shadow-sm", product.color)}>
                Original Flavor
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-2 tracking-tight">{product.name}</h1>
              <p className="text-xl font-bold text-stone-500 mb-8 italic">{product.nameKana} / {product.subName}</p>
              <p className="text-xl text-stone-700 leading-relaxed font-medium mb-10">
                {product.description}
              </p>
              
              <Link 
                to="/how-to-pop"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-xl group"
              >
                <ChefHat size={24} />
                作り方を見る
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Value 3-Pack Section - Refined side-by-side layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 md:p-16 text-left order-2 md:order-1">
                <span className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-4 block">VALUE PACK</span>
                <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-6 tracking-tight">Value 3-Pack</h2>
                <p className="text-stone-600 text-lg font-medium leading-relaxed mb-8">
                  たっぷり1箱に3袋のポップコーン入り。<br />
                  個包装されているので、いつでも新鮮な美味しさを楽しめます。週末の映画三昧の夜にぴったりなボリュームです。
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-stone-800 font-bold">
                    <Package className="text-primary" size={20} />
                    新鮮な個包装（3袋入り）
                  </li>
                  <li className="flex items-center gap-3 text-stone-800 font-bold">
                    <ShieldCheck className="text-green-600" size={20} />
                    100年続く安心の品質
                  </li>
                  <li className="flex items-center gap-3 text-stone-800 font-bold">
                    <Wheat className="text-amber-600" size={20} />
                    厳選された米国産コーン使用
                  </li>
                </ul>
              </div>
              <div className={cn("p-8 md:p-12 order-1 md:order-2 flex items-center justify-center bg-stone-50")}>
                <img 
                  src={optimizeImage(product.anatomyImage, 800)} 
                  alt="3 Pack Value" 
                  className="w-full max-w-sm h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Ingredients & Allergens */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-10 shadow-sm border border-stone-200"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4 text-stone-900">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Info className="text-primary" size={24} />
                </div>
                原材料・アレルゲン
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-black text-stone-400 uppercase tracking-widest mb-3">原材料名</h3>
                  <p className="text-stone-800 leading-relaxed font-medium text-lg">
                    {product.ingredients}
                  </p>
                </div>
                
                {product.allergens.length > 0 && (
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h3 className="text-xs font-black text-red-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <AlertCircle size={16} />
                      特定原材料等
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {product.allergens.map((item) => (
                        <span key={item} className="bg-red-600 text-white px-5 py-1.5 rounded-full text-sm font-black shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-red-700 mt-4 font-bold">一部に上記のアレルゲンを含みます。</p>
                  </div>
                )}

                {product.notes && (
                  <p className="text-xs text-stone-400 mt-6 font-medium italic">※{product.notes}</p>
                )}
              </div>
            </motion.div>

            {/* Nutrition Facts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-stone-900 text-white rounded-[2rem] p-10 shadow-xl"
            >
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                <Star className="text-yellow-400 fill-yellow-400" size={28} />
                栄養成分表示
              </h2>
              <p className="text-xs text-stone-500 mb-8 font-black uppercase tracking-widest">1袋 (99g) 当たり (推定値)</p>
              
              <div className="space-y-5">
                {[
                  { label: '熱量', value: product.nutrition.calories, primary: true },
                  { label: 'たんぱく質', value: product.nutrition.protein },
                  { label: '脂質', value: product.nutrition.fat },
                  { label: '炭水化物', value: product.nutrition.carbs },
                  { label: '食塩相当量', value: product.nutrition.salt },
                ].map((item) => (
                  <div 
                    key={item.label}
                    className={cn(
                      "flex items-center justify-between py-4 border-b border-white/10",
                      item.primary && "border-white/20 pb-5 mb-2"
                    )}
                  >
                    <span className={cn("font-bold text-stone-400", item.primary && "text-white text-xl")}>
                      {item.label}
                    </span>
                    <span className={cn("font-black text-2xl tracking-tight", item.primary && "text-yellow-400 text-3xl")}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-xs text-stone-500 leading-relaxed font-medium pt-6 border-t border-white/5">
                保存方法：直射日光、高温多湿を避け、常温で保存してください。<br/>
                原産国名：アメリカ合衆国
              </div>
            </motion.div>
          </div>
          
          {/* Other Flavors */}
          <div className="mt-28">
            <h2 className="text-3xl font-black text-stone-900 mb-16 text-center underline decoration-primary/20 decoration-8 underline-offset-8">他のフレーバーも見る</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(PRODUCTS).filter(([id]) => id !== slug).map(([id, p]) => (
                <Link 
                  key={id}
                  to={`/product/${id}`}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 hover:shadow-xl transition-all group text-center"
                >
                  <div className={cn("aspect-square rounded-2xl mb-6 overflow-hidden")}>
                    <img 
                      src={optimizeImage(p.vibeImage, 400)} 
                      alt={p.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-black text-stone-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-stone-500 font-bold">{p.nameKana}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer onContactClick={openContactForm} />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Wifi, Coffee, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://picsum.photos/id/1031/1920/1080")' }} 
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h2 className="text-gold-400 uppercase tracking-[0.2em] text-sm md:text-base font-semibold">{t.home.welcome}</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
            {t.home.hero_title_1} <span className="text-gold-500 italic">{t.home.hero_title_2}</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {t.home.hero_desc}
          </p>
          <div className="pt-8">
            <Link 
              to="/rooms" 
              className="inline-block border border-white text-white px-8 py-4 hover:bg-gold-600 hover:border-gold-600 transition-all duration-300 uppercase tracking-widest text-sm font-medium"
            >
              {t.home.discover}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-4 p-6 hover:bg-neutral-50 transition-colors duration-300 rounded-lg">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center text-gold-600 mb-2">
                <Star size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">{t.home.experience}</h3>
              <p className="text-neutral-500 leading-relaxed">{t.home.experience_desc}</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 hover:bg-neutral-50 transition-colors duration-300 rounded-lg">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center text-gold-600 mb-2">
                <Coffee size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">{t.home.dining}</h3>
              <p className="text-neutral-500 leading-relaxed">{t.home.dining_desc}</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 hover:bg-neutral-50 transition-colors duration-300 rounded-lg">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center text-gold-600 mb-2">
                <Award size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">{t.home.concierge}</h3>
              <p className="text-neutral-500 leading-relaxed">{t.home.concierge_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Room Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif text-gold-400">{t.home.suite_title}</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                {t.home.suite_desc}
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center space-x-3 text-neutral-300"><Wifi size={20} className="text-gold-500"/> <span>{t.home.network}</span></li>
                <li className="flex items-center space-x-3 text-neutral-300"><Star size={20} className="text-gold-500"/> <span>{t.home.chef}</span></li>
              </ul>
              <div className="pt-6">
                 <Link to="/booking" className="text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors inline-flex items-center gap-2">
                   {t.home.book_now} <ArrowRight size={16}/>
                 </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/164/800/600" 
                alt="Luxury Suite" 
                className="rounded shadow-2xl border border-neutral-700 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
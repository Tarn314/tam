import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-gold-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start mb-4">
              <span className="font-serif text-2xl font-bold tracking-wider text-gold-500">
                RICHCHOI
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">{t.nav.subtitle}</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-gold-400 text-lg mb-6">{t.footer.quick_links}</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-gold-500 transition-colors">{t.nav.rooms}</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">{t.home.dining}</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Wellness & Spa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-gold-400 text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-600 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-600" />
                <span>+84 999 888 777</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-600" />
                <span>concierge@richchoi.id.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-gold-400 text-lg mb-6">{t.footer.newsletter}</h4>
            <p className="text-neutral-400 text-sm mb-4">{t.footer.subscribe}</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-neutral-800 text-white px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
              <button className="bg-gold-600 px-4 text-white hover:bg-gold-500 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gold-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold-500"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
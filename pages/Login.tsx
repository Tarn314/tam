import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      await login(email);
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutral-100 px-4">
      <div className="max-w-md w-full bg-white shadow-2xl p-8 border-t-4 border-gold-500">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-neutral-900">{t.login.title}</h2>
          <p className="text-neutral-500 mt-2">{t.login.subtitle}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">{t.login.email}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
              placeholder="guest@richchoi.id.vn"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">{t.login.password}</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-neutral-900 text-white py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gold-600 transition-colors disabled:opacity-70"
          >
            {isLoading ? t.login.authenticating : t.login.btn}
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-neutral-400">
          <p>{t.login.no_account} <span className="text-gold-600 cursor-pointer hover:underline">{t.login.join}</span></p>
          <p className="mt-2 text-neutral-300">{t.login.demo}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
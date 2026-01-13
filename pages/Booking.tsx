import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Users, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Booking: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const location = useLocation();
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for form fields
  const [roomType, setRoomType] = useState('Standard Cozy Room');

  // Effect to handle passed state from Rooms page
  useEffect(() => {
    if (location.state && location.state.selectedRoom) {
      setRoomType(location.state.selectedRoom);
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate booking API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  if (step === 2) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-neutral-50 px-4">
        <div className="text-center max-w-lg">
          <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="font-serif text-4xl text-neutral-900 mb-4">{t.booking.success_title}</h2>
          <p className="text-neutral-500 text-lg mb-8">
            {t.booking.success_msg}
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100 mb-6 text-left">
             <p className="text-sm text-neutral-500">Booked Room:</p>
             <p className="font-serif text-lg text-gold-600">{roomType}</p>
          </div>
          <button 
            onClick={() => setStep(1)}
            className="text-gold-600 font-semibold hover:text-gold-700 underline underline-offset-4"
          >
            {t.booking.another_booking}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-neutral-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl overflow-hidden rounded-lg">
          <div className="bg-neutral-900 p-8 text-white">
            <h1 className="font-serif text-3xl mb-2">{t.booking.secure_title}</h1>
            <p className="text-gold-400 text-sm uppercase tracking-wider">{t.booking.logged_in} {user?.name}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Check In */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-gold-600"/> {t.booking.check_in}
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full p-3 border border-neutral-200 rounded focus:ring-1 focus:ring-gold-500 outline-none" 
                />
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                   <Calendar size={16} className="text-gold-600"/> {t.booking.check_out}
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full p-3 border border-neutral-200 rounded focus:ring-1 focus:ring-gold-500 outline-none" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Room Type */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">{t.booking.room_pref}</label>
                <select 
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full p-3 border border-neutral-200 rounded focus:ring-1 focus:ring-gold-500 outline-none bg-white"
                >
                  <option value="Standard Cozy Room">Standard Cozy Room</option>
                  <option value="Superior Twin Room">Superior Twin Room</option>
                  <option value="Deluxe King Room">Deluxe King Room</option>
                  <option value="Family Studio">Family Studio</option>
                  <option value="Executive Garden Suite">Executive Garden Suite</option>
                  <option value="Junior Suite">Junior Suite</option>
                  <option value="Royal Ocean Penthouse">Royal Ocean Penthouse</option>
                  <option value="The RichChoi Presidential">The RichChoi Presidential</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                  <Users size={16} className="text-gold-600"/> {t.booking.guests_label}
                </label>
                <select className="w-full p-3 border border-neutral-200 rounded focus:ring-1 focus:ring-gold-500 outline-none bg-white">
                  <option>1 {t.booking.guest}</option>
                  <option>2 {t.booking.guests_label.split(' ').pop()}s</option>
                  <option>3 {t.booking.guests_label.split(' ').pop()}s</option>
                  <option>4 {t.booking.guests_label.split(' ').pop()}s</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">{t.booking.special_req}</label>
              <textarea 
                rows={4} 
                className="w-full p-3 border border-neutral-200 rounded focus:ring-1 focus:ring-gold-500 outline-none"
                placeholder={t.booking.placeholder_req}
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-600 text-white font-bold text-lg py-4 uppercase tracking-widest hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                {isSubmitting ? t.booking.processing : t.booking.confirm_btn}
              </button>
              <p className="text-center text-xs text-neutral-400 mt-4">
                {t.booking.payment_note}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;

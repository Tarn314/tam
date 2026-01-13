import React from 'react';
import { RoomData } from '../types';
import { Link } from 'react-router-dom';
import { Users, Maximize, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const roomDatabase: RoomData[] = [
  {
    id: '1',
    nameEn: 'Standard Cozy Room',
    nameVi: 'Phòng Tiêu Chuẩn Ấm Cúng',
    descEn: 'A perfect sanctuary for solo travelers or couples, featuring warm lighting and essential luxury amenities.',
    descVi: 'Nơi trú ẩn hoàn hảo cho du khách độc hành hoặc các cặp đôi, với ánh sáng ấm áp và tiện nghi sang trọng thiết yếu.',
    price: 150,
    capacity: 2,
    imageUrl: 'https://picsum.photos/id/1031/800/600',
    amenitiesEn: ['Queen Bed', 'Walk-in Shower', 'City View'],
    amenitiesVi: ['Giường Queen', 'Vòi sen đứng', 'View Thành Phố']
  },
  {
    id: '2',
    nameEn: 'Superior Twin Room',
    nameVi: 'Phòng Superior 2 Giường',
    descEn: 'Spacious elegantly appointed room with two single beds, ideal for friends traveling together.',
    descVi: 'Phòng rộng rãi được bài trí trang nhã với hai giường đơn, lý tưởng cho bạn bè cùng đi du lịch.',
    price: 180,
    capacity: 2,
    imageUrl: 'https://picsum.photos/id/1029/800/600',
    amenitiesEn: ['Twin Beds', 'Work Desk', 'Garden View'],
    amenitiesVi: ['2 Giường Đơn', 'Bàn làm việc', 'View Vườn']
  },
  {
    id: '3',
    nameEn: 'Deluxe King Room',
    nameVi: 'Phòng Deluxe Giường King',
    descEn: 'A spacious retreat featuring modern art deco design and sweeping views of the skyline.',
    descVi: 'Không gian rộng rãi với thiết kế art deco hiện đại và tầm nhìn bao quát đường chân trời.',
    price: 350,
    capacity: 2,
    imageUrl: 'https://picsum.photos/id/1040/800/600',
    amenitiesEn: ['King Bed', 'Marble Bath', 'Smart Room Control'],
    amenitiesVi: ['Giường King', 'Phòng tắm đá cẩm thạch', 'Điều khiển thông minh']
  },
  {
    id: '4',
    nameEn: 'Family Studio',
    nameVi: 'Căn Hộ Gia Đình',
    descEn: 'Designed for family comfort with a kitchenette and extra space for children to play.',
    descVi: 'Được thiết kế cho sự thoải mái của gia đình với bếp nhỏ và không gian rộng rãi cho trẻ em vui chơi.',
    price: 450,
    capacity: 4,
    imageUrl: 'https://picsum.photos/id/1035/800/600',
    amenitiesEn: ['2 Queen Beds', 'Kitchenette', 'Gaming Console'],
    amenitiesVi: ['2 Giường Queen', 'Bếp nhỏ', 'Máy chơi game']
  },
  {
    id: '5',
    nameEn: 'Executive Garden Suite',
    nameVi: 'Phòng Suite Vườn Executive',
    descEn: 'Direct access to the sky garden with a private terrace. Perfect for relaxation and privacy.',
    descVi: 'Lối đi thẳng ra khu vườn trên không với sân hiên riêng. Hoàn hảo cho sự thư giãn và riêng tư.',
    price: 550,
    capacity: 3,
    imageUrl: 'https://picsum.photos/id/238/800/600',
    amenitiesEn: ['Private Terrace', 'Lounge Access', 'Rain Shower'],
    amenitiesVi: ['Sân hiên riêng', 'Quyền vào Lounge', 'Vòi sen mưa']
  },
  {
    id: '6',
    nameEn: 'Junior Suite',
    nameVi: 'Phòng Junior Suite',
    descEn: 'Featuring a separate living area to entertain guests or conduct business meetings in style.',
    descVi: 'Có khu vực sinh hoạt riêng biệt để tiếp khách hoặc tổ chức các cuộc họp kinh doanh theo phong cách riêng.',
    price: 650,
    capacity: 3,
    imageUrl: 'https://picsum.photos/id/1033/800/600',
    amenitiesEn: ['Living Area', 'Espresso Machine', 'Bathtub'],
    amenitiesVi: ['Phòng khách', 'Máy pha cà phê', 'Bồn tắm']
  },
  {
    id: '7',
    nameEn: 'Royal Ocean Penthouse',
    nameVi: 'Căn Hộ Hoàng Gia View Biển',
    descEn: 'The epitome of luxury. Panoramic views, grand piano, and dedicated butler service.',
    descVi: 'Biểu tượng của sự sang trọng. Tầm nhìn toàn cảnh, đàn piano lớn và dịch vụ quản gia riêng.',
    price: 1200,
    capacity: 4,
    imageUrl: 'https://picsum.photos/id/216/800/600',
    amenitiesEn: ['Jacuzzi', 'Butler Service', 'Private Elevator'],
    amenitiesVi: ['Bồn sục Jacuzzi', 'Quản gia riêng', 'Thang máy riêng']
  },
  {
    id: '8',
    nameEn: 'The RichChoi Presidential',
    nameVi: 'Phòng Tổng Thống RichChoi',
    descEn: 'Our most exclusive residence. 200sqm of pure opulence located on the top floor.',
    descVi: 'Nơi ở độc quyền nhất của chúng tôi. 200m2 sang trọng thuần khiết nằm trên tầng cao nhất.',
    price: 2500,
    capacity: 6,
    imageUrl: 'https://picsum.photos/id/1036/800/600',
    amenitiesEn: ['Infinity Pool', 'Private Chef', 'Cinema Room'],
    amenitiesVi: ['Hồ bơi vô cực', 'Đầu bếp riêng', 'Phòng chiếu phim']
  }
];

const Rooms: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-neutral-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">{t.rooms.title}</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            {t.rooms.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomDatabase.map((room) => {
            const name = language === 'en' ? room.nameEn : room.nameVi;
            const desc = language === 'en' ? room.descEn : room.descVi;
            const amenities = language === 'en' ? room.amenitiesEn : room.amenitiesVi;

            return (
              <div key={room.id} className="bg-white group hover:shadow-xl transition-shadow duration-300 border border-neutral-100 flex flex-col">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={room.imageUrl} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-900">
                    {t.rooms.from} ${room.price}/{t.rooms.night}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl text-neutral-900 mb-2">{name}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4">{desc}</p>
                    
                    <div className="flex items-center space-x-4 text-neutral-400 text-xs uppercase tracking-wider mb-4">
                        <span className="flex items-center gap-1"><Users size={14}/> {room.capacity} {t.rooms.guests}</span>
                        <span className="flex items-center gap-1"><Maximize size={14}/> {Math.floor(room.price * 0.2 + 20)} m²</span>
                    </div>

                    <div className="space-y-2">
                      {amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                          <Check size={14} className="text-gold-500"/> {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-neutral-100">
                    <Link 
                      to="/booking" 
                      className="block w-full text-center bg-neutral-900 text-white py-3 uppercase text-sm tracking-widest hover:bg-gold-600 transition-colors"
                    >
                      {t.rooms.book_btn}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
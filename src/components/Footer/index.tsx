import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const genreList: string[] = [
  'Action',
  'Adventure',
  'Comedy',
  'Romance',
  'Mystery',
  'Horor',
  'Thriller',
  'Fantasy',
  'Animation',
  'Sci-fi',
];

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-secondaryGrey">
      <div className="max-w-[1440px] mx-auto px-4 py-8 flex flex-col gap-8 md:flex-row lg:px-10 lg:justify-between">
        {/* DESCRIPTION */}
        <div className="w-full lg:w-[40%]">
          <h2 className="text-4xl text-primaryRed font-bold mb-4">FELIX</h2>
          <p className="text-primaryGrey text-xs font-semibold">
            FELIX merupakan situs penyedia layanan streaming film dan serial tv
            gratis. Sama seperti penyedia film dan serial tv lainnya seperti
            Netflix, Disney+, HBO, Apple TV+, Amazon Prime Video, dan lainnya.
            FELIX berusaha untuk menyediakan layanan streaming gratis untuk
            selamanya kepada para rakyat Indonesia yang belum mampu berlangganan
            layanan premium streaming seperti yang disebut diatas. Perlu
            diperhatikan FELIX tidak menyediakan film maupun serial tv dari
            negara Indonesia.
          </p>
        </div>

        {/* GENRE LIST */}
        <div className="w-full flex flex-col gap-3 lg:w-[40%]">
          <h3 className="text-lg font-bold text-primaryWhite">Genre</h3>
          <ul className="w-full grid grid-cols-4 gap-2 lg:grid-cols-2">
            {genreList.map((item: string, i: number) => (
              <li
                key={Math.random() + i + ''}
                className="text-xs cursor-pointer"
              >
                <span className="text-primaryGrey  hover:text-primaryRed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1440px] mx-auto px-4 border-t-[1px] border-t-primaryGrey/10 py-2 flex items-center justify-between lg:px-10">
        <span className="text-xs text-primaryGrey/30">
          &copy; Copyright {new Date().getFullYear()} by Felix. All Rights
          Reserved
        </span>
        <span className="p-1 bg-primaryGrey/40 rounded-sm cursor-pointer text-sm text-primaryGrey">
          <FaArrowUp />
        </span>
      </div>
    </div>
  );
};

export default React.memo(Footer);

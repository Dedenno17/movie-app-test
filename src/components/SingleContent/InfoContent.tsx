import { SingleContent } from '@/types';
import Image from 'next/image';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { HiCurrencyDollar, HiUserCircle } from 'react-icons/hi';

interface Props {
  singleContentData: SingleContent;
}

const InfoContent: React.FC<Props> = ({ singleContentData }) => {
  return (
    <div className="w-full pt-4 pb-6 flex justify-between gap-4 border-b-8 border-b-secondaryGrey lg:pb-8 xl:gap-8">
      {/* POSTER */}
      <div className="w-[30%] h-[10.5rem] overflow-hidden md:w-[20%] md:h-52 lg:w-[15%] xl:w-[13%] xl:h-64">
        <div className="relative w-full h-full">
          <Image
            src={
              singleContentData.Poster === 'N/A'
                ? 'https://www.pngitem.com/pimgs/m/586-5869813_film-vector-icon-png-transparent-png.png'
                : singleContentData.Poster
            }
            alt={singleContentData.Title}
            fill
            sizes="true"
            priority
          />
        </div>
      </div>

      {/* DESC */}
      <div className="w-[70%] flex flex-col gap-2 md:w-[80%] lg:w-[85%]">
        {/* TITLE */}
        <h1 className="text-5xl text-primaryWhite lg:text-6xl">
          {singleContentData.Title}
        </h1>

        {/* RELEASE */}
        <div className="w-full flex flex-row items-center justify-start gap-x-4 flex-wrap">
          <span className="text-sm text-primaryGrey font-semibold">
            {singleContentData.Released}
          </span>
          <span className="text-sm text-primaryGrey font-semibold">
            {singleContentData.Country}
          </span>
          <span className="text-sm text-primaryGrey font-semibold">
            {singleContentData.Runtime}
          </span>
          <span className=" text-sm text-primaryGrey/40 font-bold">
            {singleContentData.Rated}
          </span>
        </div>

        {/* LANGUAGE */}
        <span className="w-full text-sm text-primaryGrey/40 font-bold">
          Lanugage : {singleContentData.Language}
        </span>

        {/* RATING */}
        <div className="hidden w-full py-4 border-y-[1px] border-y-primaryGrey/40 md:block">
          {singleContentData.imdbRating !== 'N/A' && (
            <div className="w-full flex gap-4 items-center">
              <div className="bg-secondaryGrey p-4 text-2xl text-primaryWhite rounded-lg flex">
                <p className="m-auto font-bold">
                  {singleContentData.imdbRating}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
                    <BsFillStarFill
                      key={item + 1 + ''}
                      className={`text-2xl ${
                        Math.floor(parseInt(singleContentData.imdbRating)) >=
                        item
                          ? 'text-primaryRed'
                          : 'text-primaryGrey'
                      }`}
                    />
                  ))}
                </span>
                <span className="flex items-center gap-2 text-sm text-secondaryGrey">
                  <HiUserCircle />
                  <p>{singleContentData.imdbVotes} Votes</p>
                </span>
              </div>
            </div>
          )}
          {singleContentData.imdbRating === 'N/A' && (
            <p className="text-xl text-primaryGrey">
              {singleContentData.imdbRating}
            </p>
          )}
        </div>

        {/* ACTORS */}
        <span className="w-full text-sm text-primaryGrey/40 font-semibold">
          {singleContentData.Actors}
        </span>

        {/* GENRES */}
        <span className="w-full text-sm text-primaryWhite">
          {singleContentData.Genre}
        </span>

        {/* AWARDS & BOX OFFICE */}
        <span className="w-full flex flex-row flex-wrap items-center gap-4 text-sm text-secondaryGrey">
          <span>{singleContentData.Awards}</span>
          <span className="flex items-center gap-2">
            <HiCurrencyDollar />
            <p>{singleContentData.BoxOffice}</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(InfoContent);

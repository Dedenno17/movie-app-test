import { SingleContent } from '@/types';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

interface Props {
  singleContentData: SingleContent;
}

const SinopsisContent: React.FC<Props> = ({ singleContentData }) => {
  return (
    <div className="w-full pt-4 pb-6 flex flex-col lg:pb-8">
      {/* SYNOPSIS */}
      <div className="flex flex-col gap-6 py-4">
        <h2 className="text-xl text-primaryWhite">Synopsis</h2>
        <p className="text-primaryGrey text-sm">{singleContentData.Plot}</p>
      </div>
      {/* DIRECTOR */}
      <div className="w-full flex flex-col gap-4 py-4 border-y-[1px] border-y-primaryGrey/40">
        <h3 className="text-sm text-primaryWhite">Director</h3>
        <span className="text-xs text-primaryGrey font-bold">
          {singleContentData.Director}
        </span>
      </div>
      {/* IMDB RATING */}
      <div className="w-full flex flex-col gap-4 py-4 border-b-[1px] border-b-primaryGrey/40">
        <h3 className="text-sm text-primaryWhite">IMDB Rating</h3>
        <span className="text-xs flex item-center gap-4">
          <span className="bg-secondaryGrey p-2 text-primaryWhite font-bold flex items-center gap-2">
            {singleContentData.imdbRating !== 'N/A' && <BsFillStarFill />}
            <p className="text-primaryGrey/40">
              {singleContentData.imdbRating === 'N/A'
                ? 'There is no Rating'
                : singleContentData.imdbRating}
            </p>
          </span>
        </span>
      </div>
      {/* ROTTEN RATIING */}
      <div className="w-full flex flex-col gap-4 py-4 ">
        <h3 className="text-sm text-primaryWhite">Rotten Tomatoes</h3>
        <span className="text-xs flex item-center gap-4">
          <span className="bg-secondaryGrey p-2 text-primaryWhite font-bold flex items-center gap-2">
            {singleContentData.Ratings.length > 1 && <BsFillStarFill />}
            <p className="text-primaryGrey/40">
              {singleContentData.Ratings.length < 2
                ? 'There is no Rating'
                : singleContentData.Ratings[1].Value}
            </p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(SinopsisContent);

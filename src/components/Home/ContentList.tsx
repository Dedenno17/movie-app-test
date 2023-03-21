import { titleFormat } from '@/helpers/titleFormat';
import { Content, ContentData } from '@/types';
import Image from 'next/image';
import React from 'react';
import SkeletonLoading from './SkeletonLoading';

interface Props {
  contentData: ContentData | undefined;
  isLoading: boolean;
}

const ContentList: React.FC<Props> = ({ contentData, isLoading }) => {
  return (
    <div
      className={`w-full min-h-screen py-4 ${
        contentData && contentData.Response ? 'block' : 'hidden'
      }`}
    >
      {/* CONTENT */}
      {contentData && !isLoading && (
        <ul className="w-full grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-6 lg:grid-cols-6 lg:gap-8">
          {contentData.Search.map((item: Content) => (
            <li
              key={item.imdbID}
              className="w-full h-56 rounded-lg flex flex-col overflow-hidden lg:h-64 xl:h-96"
            >
              <div className="w-full h-[75%] rounded-b-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={
                      item.Poster === 'N/A'
                        ? 'https://www.pngitem.com/pimgs/m/586-5869813_film-vector-icon-png-transparent-png.png'
                        : item.Poster
                    }
                    alt={item.Title}
                    sizes="true"
                    fill
                    priority
                  />
                </div>
              </div>
              <div className="w-full h-[25%] flex flex-col justify-center gap-1 px-2 py-1">
                <span className="text-sm text-primaryWhite font-semibold">
                  {titleFormat(item.Title)}
                </span>
                <span className="text-xs text-primaryGrey">{`(${item.Year})`}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* SKELETON LOADING */}
      {isLoading && <SkeletonLoading />}
    </div>
  );
};

export default React.memo(ContentList);

import { ContentData } from '@/types';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface Props {
  curPage: number;
  prevPage: () => void;
  nextPage: () => void;
  contentData: ContentData;
}

const PaginationMobile: React.FC<Props> = ({
  curPage,
  prevPage,
  nextPage,
  contentData,
}) => {
  return (
    <div className="flex w-full py-4 items-center justify-between gap-6 text-sm lg:hidden">
      <div
        className={`w-[30%] h-10 flex justify-center items-center bg-secondaryGrey text-primaryGrey border-[1px] text-2xl border-primaryGrey md:w-[25%] ${
          curPage !== 1
            ? 'opacity-100 cursor-pointer'
            : 'opacity-0 cursor-pointer-none'
        }`}
        onClick={prevPage}
      >
        <FaAngleLeft />
      </div>
      <div
        className={`w-[30%] h-10 flex justify-center items-center bg-secondaryGrey text-primaryGrey border-[1px] text-2xl border-primaryGrey md:w-[25%] ${
          contentData && curPage === Math.floor(contentData.totalResults / 10)
            ? 'opacity-0 cursor-pointer-none'
            : 'opacity-100 cursor-pointer'
        }`}
        onClick={nextPage}
      >
        <FaAngleRight />
      </div>
    </div>
  );
};

export default React.memo(PaginationMobile);

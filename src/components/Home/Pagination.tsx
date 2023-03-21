import { ContentData } from '@/types';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface Props {
  curPage: number;
  rangePage: number[];
  prevPage: () => void;
  nextPage: () => void;
  moveTo: (arg: number) => void;
  contentData: ContentData | undefined;
}

const Pagination: React.FC<Props> = ({
  curPage,
  rangePage,
  prevPage,
  nextPage,
  moveTo,
  contentData,
}) => {
  return (
    <div className="hidden w-full py-4 items-center gap-6 text-sm lg:flex">
      <span className="w-[20%] text-primaryGrey">Page {curPage}</span>
      <ul className="w-[70%] flex items-center gap-4 xl:gap-8">
        <li
          className={`w-8 h-8 flex justify-center items-center rounded-sm bg-secondaryGrey border-[1px] border-primaryGrey text-primaryGrey ${
            curPage === 1
              ? 'cursor-pointer-none invisible'
              : 'cursor-pointer visible'
          }`}
          onClick={prevPage}
        >
          <FaAngleLeft />
        </li>

        {rangePage.map((item: number) => (
          <li
            key={Math.random() + item + ''}
            className={`w-8 h-8 flex justify-center items-center rounded-sm bg-secondaryGrey border-[1px] ${
              curPage === item
                ? 'border-primaryRed text-primaryRed'
                : 'border-primaryGrey text-primaryGrey'
            } cursor-pointer`}
            onClick={() => moveTo(item)}
          >
            {item}
          </li>
        ))}
        <li
          className={`w-8 h-8 flex justify-center items-center rounded-sm bg-secondaryGrey border-[1px] border-primaryGrey text-primaryGrey cursor-pointer ${
            contentData && curPage === Math.floor(contentData.totalResults / 10)
              ? 'opacity-0 cursor-pointer-none'
              : 'opacity-100 cursor-pointer'
          }`}
          onClick={nextPage}
        >
          <FaAngleRight />
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Pagination);

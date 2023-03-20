import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Header: React.FC = () => {
  return (
    <div className="w-full bg-primaryBlack/60">
      <div className="max-w-[1440px] h-14 mx-auto px-4 flex items-stretch justify-between gap-4 border-b-[1px] border-b-primaryGrey/10 lg:px-10 lg:h-16">
        <div className="flex items-center gap-6 w-1/2">
          {/* LOGO */}
          <span className="text-4xl text-primaryRed font-bold ">FELIX</span>

          {/* Navlinks */}
        </div>

        {/* SEARCH */}
        <div className="w-1/2 flex justify-center items-center py-2 md:w-[40%] lg:w-[30%] lg:py-3 xl:w-[20%]">
          <form className="w-full h-full flex items-stretch rounded-md bg-secondaryGrey overflow-hidden">
            <input
              type="text"
              placeholder="Search ..."
              className="w-[80%] bg-transparent text-md px-4 outline-none text-primaryWhite font-semibold"
            />
            <button
              type="submit"
              className="w-[20%] bg-transparent outline-none flex cursor-pointer"
            >
              <BiSearch className="text-primaryWhite text-2xl font-bold m-auto" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);

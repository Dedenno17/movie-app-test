import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setValue } from '@/store/slices/firstLoad-slice';
import { setSearchInputValue } from '@/store/slices/searchInput-slice';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // global state
  const scrollY = useAppSelector((state) => state.scrollY.value);

  // state of searchInput
  const [inputValue, setInputValue] = useState<string>('');

  // changing a global state when local state was change
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearchInputValue(inputValue));
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue, dispatch]);

  // submit function
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setSearchInputValue(inputValue));
  };

  // logo click handler
  const clickLogoHandler = () => {
    const isHome = router.pathname === '/';
    if (isHome) {
      return;
    }
    dispatch(setValue(false));
    router.push('/');
  };

  return (
    <div
      className={`w-full bg-primaryBlack/95 border-b-[1px] border-b-primaryGrey/10 ${
        scrollY <= 100
          ? 'static'
          : 'fixed top-0 left-0 right-0 backdrop-blur-sm z-50 opacity-0 animate-fadeIn'
      }`}
    >
      <div className="max-w-[1440px] h-14 mx-auto px-4 flex items-stretch justify-between gap-4 lg:px-10 lg:h-16">
        {/* LOGO */}
        <div
          className="flex items-center gap-6 w-1/2"
          onClick={clickLogoHandler}
        >
          <span className="text-4xl text-primaryRed font-bold cursor-pointer">
            FELIX
          </span>
        </div>

        {/* SEARCH */}
        <div className="w-1/2 flex justify-center items-center py-2 md:w-[40%] lg:w-[30%] lg:py-3 xl:w-[20%]">
          <form
            className="w-full h-full flex items-stretch rounded-md bg-secondaryGrey overflow-hidden"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="Search ..."
              className="w-[80%] bg-transparent text-md px-4 outline-none text-primaryWhite font-semibold"
              onFocus={() => dispatch(setValue(false))}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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

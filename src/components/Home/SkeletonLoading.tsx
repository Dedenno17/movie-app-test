import React from 'react';

const SkeletonLoading: React.FC = () => {
  return (
    <ul className="w-full grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-6 lg:grid-cols-6 lg:gap-8 animate-pulse">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
        <li
          key={item + ''}
          className="w-full h-56 rounded-lg flex flex-col overflow-hidden lg:h-64 xl:h-96"
        >
          <div className="w-full h-[75%] rounded-b-lg bg-secondaryGrey" />
          <div className="w-full h-[25%] flex flex-col justify-center gap-1">
            <span className="w-[80%] bg-secondaryGrey py-2" />
            <span className="w-[40%] bg-secondaryGrey py-1" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(SkeletonLoading);

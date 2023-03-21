import { useAppSelector } from '@/store/hooks';
import { Content, ContentData } from '@/types';
import React from 'react';

interface Props {
  contentData: ContentData | undefined;
  isLoading: boolean;
}

const MovieList: React.FC<Props> = ({ contentData, isLoading }) => {
  console.log(contentData);
  return <div className="w-full min-h-screen grid grid-cols-3">MovieList</div>;
};

export default React.memo(MovieList);

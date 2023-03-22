import { ContentData, SingleContent } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['GetContents', 'GetSingleContent'],
  endpoints: (build) => ({
    getContents: build.query<ContentData, { value: string; page: number }>({
      query: (args) => {
        const { value, page } = args;
        return {
          url: `?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${value}&page=${page}`,
          method: 'GET',
        };
      },
      providesTags: ['GetContents'],
    }),
    getSingleContent: build.query<SingleContent, string>({
      query: (id) =>
        `?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}&plot=full`,
      providesTags: ['GetSingleContent'],
    }),
  }),
});

export const { useLazyGetContentsQuery, useLazyGetSingleContentQuery } = api;

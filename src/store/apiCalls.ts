import { Content, ContentData } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['GetContents'],
  endpoints: (build) => ({
    getContents: build.query<ContentData, { value: string; page: number }>({
      query: (args) => {
        const { value, page } = args;
        return {
          url: `?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${value}&page=${page}`,
        };
      },
      providesTags: ['GetContents'],
    }),
  }),
});

export const { useLazyGetContentsQuery } = api;

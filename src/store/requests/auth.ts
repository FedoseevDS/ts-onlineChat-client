import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5004' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        method: 'get',
        url: '/users',
      }),
    }),
    postUser: builder.mutation({
      query: ({ userId, username }) => ({
        body: {
          id: userId,
          username,
        },
        method: 'post',
        url: '/add/user',
      }),
    }),
  }),
  reducerPath: 'authApi',
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/user" }),
  endpoints: (builder) => ({
    getUserlist: builder.query({
      query: () => `/user`,
      transformResponse: (response) => response.data,
    }),
    loginUser: builder.mutation({
      query: ({ userId, password }) => ({
        url: "/userLogIn",
        method: "POST",
        body: {
          id: userId,
          password: password,
        },
      }),
    }),
    registerUser: builder.mutation({
      query: ({ userId, password }) => ({
        url: `/userRegister`,
        method: "POST",
        body: {
          id: userId,
          password: password,
        },
      }),
    }),
    withdrawUser: builder.mutation({
      query: (userId) => ({
        url: `/userDelete`,
        method: "DELETE",
        body: {
          id: userId,
        },
      }),
    }),
  }),
});

export const {
  useGetUserlistQuery,
  useRegisterUserMutation,
  useWithdrawUserMutation,
  useLoginUserMutation,
} = userApi;

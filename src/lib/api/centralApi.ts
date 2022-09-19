import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
});

const tagTypes = ["Summoner"];

export default createApi({
  reducerPath: "centralApi",
  baseQuery,
  tagTypes,
  endpoints: () => ({}),
});

import centralApi from "./centralApi";

const summonerApi = centralApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecentMatchDetails: builder.query({
      query: ({ summonerName, count }) =>
        `/getRecentMatchDetails?summoner=${summonerName}&count=${count}`,
      providesTags: ["Summoner"],
    }),
  }),
});

export const { useGetRecentMatchDetailsQuery } = summonerApi;

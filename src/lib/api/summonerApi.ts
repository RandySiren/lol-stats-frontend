import centralApi from "./centralApi";

const summonerApi = centralApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecentMatchDetails: builder.query({
      query: (summonerName) =>
        `/getRecentMatchDetails?summoner=${summonerName}`,
      providesTags: ["Summoner"],
    }),
  }),
});

export const { useGetRecentMatchDetailsQuery } = summonerApi;

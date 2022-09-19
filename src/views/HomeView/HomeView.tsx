import { useState } from "react";
import MatchResults from "../../components/MatchResults";
import ViewContainer from "../../components/ViewContainer";
import { useGetRecentMatchDetailsQuery } from "../../lib/api/summonerApi";
import { skipToken } from "@reduxjs/toolkit/query/react";

const HomeView = () => {
  const [inputSummonerName, setInputSummonerName] = useState("");
  const [summonerName, setSummonerName] = useState<string | undefined>(
    undefined
  );
  const { data, isFetching, isError } = useGetRecentMatchDetailsQuery(
    summonerName ?? skipToken
  );

  const handleSearchClick = () => {
    setSummonerName(inputSummonerName);
  };
  return (
    <ViewContainer className="p-4">
      <div className="flex flex-col items-center pt-12">
        <h1 className="h-24 text-3xl font-semibold">
          League of Legends Stats App
        </h1>
        <div className="flex gap-4 items-center">
          <label htmlFor="summonerName" className="label">
            Summoner Name:
          </label>
          <input
            type="text"
            name="Summoner name"
            id="summonerName"
            className="input input-bordered input-secondary border-2"
            onChange={(e) => {
              setInputSummonerName(e.currentTarget.value);
            }}
          />
          <button className="btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        {/* Match Result Container */}
        {isError ? <>Summoner not found (or internal error!)</> : <></>}

        {isFetching ? <>Loading...</> : <></>}

        {!isError && !isFetching ? <MatchResults data={data} /> : <></>}
      </div>
    </ViewContainer>
  );
};
export default HomeView;

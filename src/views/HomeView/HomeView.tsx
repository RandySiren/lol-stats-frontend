import MatchResult from "../../components/MatchResults";
import ViewContainer from "../../components/ViewContainer";

const HomeView = () => {
  return (
    <ViewContainer className="p-4">
      <div className="flex flex-col items-center justify-center h-full">
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
          />
        </div>
        {/* Match Result Container */}
        <MatchResult />
      </div>
    </ViewContainer>
  );
};
export default HomeView;

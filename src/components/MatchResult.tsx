interface MatchResultProps {
  matchResult: any;
}
const MatchResult = ({ matchResult }: MatchResultProps) => {
  return (
    <div
      className={`w-full h-32 ${
        matchResult.winner ? "bg-blue-400" : "bg-red-400"
      }`}
    >
      <div className="w-full flex gap-6 items-center h-full">
        <div className="flex flex-col text-sm">
          <p>{matchResult.gameType}</p>
          <p>{matchResult.winner ? "Victory" : "Defeat"}</p>
        </div>
        <span className="w-20">{matchResult.champion}</span>
        <div className="flex flex-col text-xs">
          <div>{matchResult.summonerSpells[0]}</div>
          <div>{matchResult.summonerSpells[1]}</div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg">{`${matchResult.kda[0]}/${matchResult.kda[1]}/${matchResult.kda[2]}`}</span>
          <span className="text-sm">{`${(
            (matchResult.kda[0] + matchResult.kda[2]) /
            matchResult.kda[1]
          ).toPrecision(3)}:1 KDA`}</span>
        </div>
        <div className="flex flex-col text-sm">
          <span>Level {matchResult.level}</span>
          <span>{matchResult.creeps} CS</span>
        </div>
        <div className="flex flex-col text-xs">
          {matchResult.items.map((item: any, index: number) => {
            if (item)
              return <div key={matchResult.matchId + index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchResult;

import { useEffect } from "react";
import MatchResult from "./MatchResult";

const MatchResults = ({ data }: any) => {
  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const renderMatches = () => {
    return (
      <div className="w-full">
        {data.map((match: any) => (
          <div key={match.matchId}>
            <MatchResult matchResult={match} />
          </div>
        ))}
      </div>
    );
  };

  return <>{data ? renderMatches() : <></>}</>;
};

export default MatchResults;

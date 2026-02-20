import HeroCard from "./HeroCard";
import RecommendedConnections from "./RecommendedConnections";
import RankingSection from "./RankingSection";
import OpportunityRadar from "./OpportunityRadar";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <HeroCard />
      <RecommendedConnections />
      <RankingSection />
      <OpportunityRadar />
    </div>
  );
}

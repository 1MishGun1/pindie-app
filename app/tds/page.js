import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";

export default async function Tds() {
  // const TDS = getGamesByCategory("TDS");
  const TDS = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      <CardsList id="TDS" title="TDS" data={TDS} />
    </main>
  );
}

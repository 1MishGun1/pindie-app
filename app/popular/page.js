import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";

export default async function Popular() {
  const popularGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "popular"
  );
  return (
    <main className="main-inner">
      <CardsList id="popular" title="Популярные" data={popularGames} />
    </main>
  );
}

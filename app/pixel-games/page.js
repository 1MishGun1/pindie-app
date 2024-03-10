import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";

export default async function PixelGames() {
  const pixelGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "pixel"
  );
  return (
    <main className="main-inner">
      <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
    </main>
  );
}

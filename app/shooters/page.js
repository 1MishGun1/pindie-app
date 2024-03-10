import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";

export default async function Shooters() {
  const shooter = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "shooter"
  );
  return (
    <main className="main-inner">
      <CardsList id="shooter" title="Шутеры" data={shooter} />
    </main>
  );
}

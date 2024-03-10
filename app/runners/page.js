import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";

export default async function Runner() {
  const runner = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "runner"
  );
  return (
    <main className="main-inner">
      <CardsList id="runner" title="Раннеры" data={runner} />
    </main>
  );
}

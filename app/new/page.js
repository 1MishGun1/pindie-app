"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import Preloader from "../components/Preloader/Preloader";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main-inner">
      {newGames ? (
        <CardsList id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import Preloader from "../components/Preloader/Preloader";
import { CardsList } from "../components/CardsList/CardsList";

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className="main-inner">
      {popularGames ? (
        <CardsList id="popular" title="Популярные" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

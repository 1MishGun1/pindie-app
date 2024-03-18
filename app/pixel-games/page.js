"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import Preloader from "../components/Preloader/Preloader";
import { CardsList } from "../components/CardsList/CardsList";

export default function PixelGames() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
  return (
    <main className="main-inner">
      {pixelGames ? (
        <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

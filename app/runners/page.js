"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import Preloader from "../components/Preloader/Preloader";
import { CardsList } from "../components/CardsList/CardsList";

export default function Runner() {
  const runner = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      {runner ? (
        <CardsList id="runner" title="Раннеры" data={runner} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

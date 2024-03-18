"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import Preloader from "../components/Preloader/Preloader";
import { CardsList } from "../components/CardsList/CardsList";

export default function Shooters() {
  const shooter = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      {shooter ? (
        <CardsList id="shooter" title="Шутеры" data={shooter} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

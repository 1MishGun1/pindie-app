"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import Preloader from "../components/Preloader/Preloader";
import { CardsList } from "../components/CardsList/CardsList";

export default function Tds() {
  const TDS = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {TDS ? <CardsList id="TDS" title="TDS" data={TDS} /> : <Preloader />}
    </main>
  );
}

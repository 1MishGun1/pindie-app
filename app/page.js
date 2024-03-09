"use client";

import { getGamesByCategory } from "./data/data-utils.js";
import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";
import { useEffect } from "react";

// export const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (response.status !== 200) {
//       throw new Error("Ошибка получения данных");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

export default function Home() {
  // const dataFormUrl = await getData(
  //   "https://api-code-2.practicum-team.ru/games"
  // );
  // console.log(dataFormUrl);
  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    };
    getData("https://api-code-2.practicum-team.ru/games");
  }, []);

  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}

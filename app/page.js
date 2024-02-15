import Image from "next/image";
import styles from "./page.module.css";

import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment";
import { NewCardsFragment } from "./components/CardsList/NewCardsFragment";
import { Promo } from "./components/Promo/Promo";

import { getGamesByCategory } from "./data/data-utils.js";

export default function Home(props) {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />
      <CardsList
        title={props.id === "popular" ? "Популярные" : "Новинки"}
        id="popular"
        data={popularGames}
      >
        {props.id === "popular" ? (
          <PopularCardsFragment />
        ) : (
          <NewCardsFragment />
        )}
      </CardsList>
      <CardsList
        title={props.id === "new" ? "Новинки" : "Популярные"}
        id="new"
        data={newGames}
      >
        {props.id === "new" ? <NewCardsFragment /> : <PopularCardsFragment />}
      </CardsList>
      <Promo />
    </main>
  );
}

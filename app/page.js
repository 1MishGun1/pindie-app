'use client';

import { getNormalizedGamesDataByCategory } from './api/api-utils.js';
import { Banner } from './components/Banner/Banner';
import { CardsList } from './components/CardsList/CardsList';
import { Promo } from './components/Promo/Promo';

export default function Home() {
  const popularGames = getNormalizedGamesDataByCategory('popular');
  const newGames = getNormalizedGamesDataByCategory('new');

  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";

import { Promo } from "./components/Promo/Promo";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <section className="list-section">
        <h2 className="list-section__title" id="popular">
          Популярное
        </h2>
        {/* Add PopularCardsList */}
        <ul className="cards-list">
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Crystal Kepper</h3>
                  <p className="card__description">
                    Управляй боевым дроном, чтобы любой ценой защитить кристалл
                    от враждебных космо-слизней.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">Lonely Baobab</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Dangeons'n'Caves. Prologue</h3>
                  <p className="card__description">
                    Безымянный герой исследует пещеры и подземелья, чтобы найти
                    больше информации о себе.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">F-Style</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Defence of Crystal</h3>
                  <p className="card__description">
                    Защищай магический кристалл от монстров и уничтожай
                    кладбища, чтобы спасти Землю, которую поглотил мрак.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">MastWe</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
        </ul>
      </section>
      <section className="list-section">
        <h2 className="list-section__title" id="new">
          Новинки
        </h2>
        {/* Add NewCardsList */}
        <ul className="cards-list">
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Go Away</h3>
                  <p className="card__description">
                    Управляй автомобилем, избегая аварий и перепрыгивая
                    препятствия на пути к следующему уровню.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">Mahisto</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">G.U.N.N.E.R.</h3>
                  <p className="card__description">
                    Продержись как можно дольше, отбиваясь от врагов, которых
                    будет становиться всё больше.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">IDKWIAm</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Space Terror</h3>
                  <p className="card__description">
                    Лети как можно дальше в космическом пространстве, уничтожая
                    всё на своём пути.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">IDKWIAm</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Square Slayer</h3>
                  <p className="card__description">
                    Уворачивайся и отстреливайся от озлобленных квадратов и
                    собирай жизни для перехода на следующий уровень.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">niclan</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
        </ul>
      </section>
      <Promo />
    </main>
  );
}

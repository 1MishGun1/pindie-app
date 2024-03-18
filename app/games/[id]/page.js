"use client";

import Styles from "./Game.module.css";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { useEffect, useState } from "react";
import { endpoints } from "@/app/api/config";
import {
  getJWT,
  removeJWT,
  getMe,
  isResponseOk,
  getNormalizedGameDataById,
  checkIfUserVoted,
  vote,
} from "@/app/api/api-utils";
import Preloader from "@/app/components/Preloader/Preloader";

const GamePage = (props) => {
  const [game, setGame] = useState(null);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(
        endpoints.games,
        props.params.id
      );
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true);
          setCurrentUser(userData);
        } else {
          setIsAuthorized(false);
          removeJWT();
        }
      });
    }
  }, []);

  useEffect(() => {
    if (currentUser && game) {
      setIsVoted(checkIfUserVoted(game, currentUser.id));
    } else {
      setIsVoted(false);
    }
  }, [currentUser, game]);

  // Update API
  const handleVote = async () => {
    const jwt = getJWT();
    let usersArray = game.users.map((user) => user.id);

    if (isVoted) {
      usersArray = usersArray.filter((id) => id !== currentUser.id);
    } else {
      usersArray.push(currentUser.id);
    }

    if (jwt) {
      const response = await vote(
        `${endpoints.games}/${game.id}`,
        jwt,
        usersArray
      );

      if (isResponseOk(response)) {
        if (isVoted) {
          setIsVoted(false);
          setGame({
            ...game,
            users: game.users.filter((user) => user.id !== currentUser.id),
          });
        } else {
          setIsVoted(true);
          setGame({
            ...game,
            users: [...game.users, currentUser],
          });
        }
      }
    }
  };

  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles["game"]}>
            <iframe className={Styles["game__iframe"]} src={game.link}></iframe>
          </section>
          <section className={Styles["about"]}>
            <h2 className={Styles["about__title"]}>{game.title}</h2>
            <div className={Styles["about__content"]}>
              <p className={Styles["about__description"]}>{game.description}</p>
              <div className={Styles["about__author"]}>
                <p>
                  Автор:{" "}
                  <span className={Styles["about__accent"]}>
                    {game.developer}
                  </span>
                </p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>
                За игру уже проголосовали:{" "}
                <span className={Styles["about__accent"]}>
                  {game.users.length}
                </span>
              </p>
              <button
                disabled={!isAuthorized}
                className={`button ${Styles["about__vote-button"]}`}
                onClick={handleVote}
              >
                {isVoted ? "Удалить голос" : "Голосовать"}
              </button>
            </div>
          </section>
        </>
      ) : preloaderVisible ? (
        <Preloader />
      ) : (
        <section className={Styles["game"]}>
          <GameNotFound />
        </section>
      )}
    </main>
  );
};

export default GamePage;

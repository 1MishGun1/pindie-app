"use client";

import { useEffect, useState } from "react";
import Styles from "./MeDescription.module.css";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/store/app-store";
import Preloader from "../Preloader/Preloader";

export const MeDescription = () => {
  const authContext = useStore();
  const router = useRouter();
  const store = useStore();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogout = () => {
    router.push("/");
    authContext.logout();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initName = localStorage.getItem("username");
      const initEmail = localStorage.getItem("email");

      if (initName && initName !== username) {
        setUserName(initName);
      }

      if (initEmail && initEmail !== email) {
        setEmail(initEmail);
      }
    }
  }, [store.user]);

  useEffect(() => {
    if (store.user && typeof window !== "undefined") {
      localStorage.setItem("username", store.user.username);
      localStorage.setItem("email", store.user.email);
    }
  }, [store.user]);

  if (!store.user) {
    return <Preloader />;
  }

  return (
    <section className={Styles["about__page_user"]}>
      <h2 className={Styles["about__page_title"]}>Страница аккаунта</h2>
      <div className={Styles["about__page_field"]}>
        <h4 className={Styles["about__page_desc"]}>Юзернэйм: </h4>
        <p className={Styles["about__page_answer"]}>{username}</p>
      </div>
      <div className={Styles["about__page_field"]}>
        <h4 className={Styles["about__page_desc"]}>Email: </h4>
        <p className={Styles["about__page_answer"]}>{email}</p>
      </div>
      <button
        onClick={handleLogout}
        className={`button ${Styles["about__exit-button"]}`}
      >
        Выход
      </button>
    </section>
  );
};

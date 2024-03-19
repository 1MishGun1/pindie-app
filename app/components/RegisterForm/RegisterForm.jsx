"use client";

import Styles from "./RegisterForm.module.css";
import { useState } from "react";

export const RegisterForm = () => {
  return (
    <form className={Styles["form"]}>
      <h2 className={Styles["form__title"]}>Регистрация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>NickName</span>
          <input
            className={Styles["form__field-input"]}
            type="nickname"
            placeholder="helloWorld"
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email</span>
          <input
            className={Styles["form__field-input"]}
            type="email"
            placeholder="hello@world.com"
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Пароль</span>
          <input
            className={Styles["form__field-input"]}
            type="password"
            placeholder="***********"
          />
        </label>
      </div>
      <div className={Styles["form__actions"]}>
        <button className={Styles["form__reset"]} type="reset">
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

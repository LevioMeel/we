"use client";
import BlueButton from "@/components/buttons/BlueButton";
import Input from "@/components/forms/Input";
import InputPass from "@/components/forms/InputPass";
import Link from "next/link";

import { signup } from "@/app/actions/auth";

import styles from "./auth.module.css";

export default function Page() {
  return (
    <div className={styles.auth}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="71"
        height="45"
        viewBox="0 0 71 45"
        fill="none"
        className={styles.logo}
      >
        <path
          d="M0.5625 42V33.2727H2.93182V40.0909H6.46023V42H0.5625ZM9.78729 33.2727V42H7.41797V33.2727H9.78729ZM10.9102 42V33.2727H17.0465V35.1818H13.2795V36.6818H16.6715V38.5909H13.2795V42H10.9102ZM17.6793 35.1818V33.2727H25.2646V35.1818H22.6396V42H20.3043V35.1818H17.6793ZM30.4858 36.75V38.5227H26.3949V36.75H30.4858ZM40.3061 37.6364C40.3061 38.608 40.1172 39.4276 39.7393 40.0952C39.3615 40.7599 38.8516 41.2642 38.2095 41.608C37.5675 41.9489 36.8516 42.1193 36.0618 42.1193C35.2663 42.1193 34.5476 41.9474 33.9055 41.6037C33.2663 41.2571 32.7578 40.7514 32.38 40.0866C32.005 39.419 31.8175 38.6023 31.8175 37.6364C31.8175 36.6648 32.005 35.8466 32.38 35.1818C32.7578 34.5142 33.2663 34.0099 33.9055 33.669C34.5476 33.3253 35.2663 33.1534 36.0618 33.1534C36.8516 33.1534 37.5675 33.3253 38.2095 33.669C38.8516 34.0099 39.3615 34.5142 39.7393 35.1818C40.1172 35.8466 40.3061 36.6648 40.3061 37.6364ZM37.8686 37.6364C37.8686 37.1136 37.799 36.6733 37.6598 36.3153C37.5234 35.9545 37.3203 35.6818 37.0504 35.4972C36.7834 35.3097 36.4538 35.2159 36.0618 35.2159C35.6697 35.2159 35.3388 35.3097 35.0689 35.4972C34.8018 35.6818 34.5987 35.9545 34.4595 36.3153C34.3232 36.6733 34.255 37.1136 34.255 37.6364C34.255 38.1591 34.3232 38.6009 34.4595 38.9616C34.5987 39.3196 34.8018 39.5923 35.0689 39.7798C35.3388 39.9645 35.6697 40.0568 36.0618 40.0568C36.4538 40.0568 36.7834 39.9645 37.0504 39.7798C37.3203 39.5923 37.5234 39.3196 37.6598 38.9616C37.799 38.6009 37.8686 38.1591 37.8686 37.6364ZM41.4023 42V33.2727H47.5387V35.1818H43.7717V36.6818H47.1637V38.5909H43.7717V42H41.4023ZM48.4102 42V33.2727H54.5465V35.1818H50.7795V36.6818H54.1715V38.5909H50.7795V42H48.4102ZM55.418 42V33.2727H61.7077V35.1818H57.7873V36.6818H61.3839V38.5909H57.7873V40.0909H61.6907V42H55.418ZM62.8828 42V33.2727H66.6499C67.2976 33.2727 67.8643 33.3906 68.3501 33.6264C68.8359 33.8622 69.2138 34.2017 69.4837 34.6449C69.7536 35.0881 69.8885 35.6193 69.8885 36.2386C69.8885 36.8636 69.7493 37.3906 69.4709 37.8196C69.1953 38.2486 68.8075 38.5724 68.3075 38.7912C67.8104 39.0099 67.2294 39.1193 66.5646 39.1193H64.3146V37.2784H66.0874C66.3658 37.2784 66.603 37.2443 66.799 37.1761C66.9979 37.1051 67.1499 36.9929 67.255 36.8395C67.3629 36.6861 67.4169 36.4858 67.4169 36.2386C67.4169 35.9886 67.3629 35.7855 67.255 35.6293C67.1499 35.4702 66.9979 35.3537 66.799 35.2798C66.603 35.2031 66.3658 35.1648 66.0874 35.1648H65.2521V42H62.8828ZM67.9964 37.9943L70.1783 42H67.6044L65.4737 37.9943H67.9964Z"
          fill="#11142D"
        />
        <path
          d="M39.1369 25.5737C41.8983 25.5737 44.1842 23.3162 43.6732 20.6025C43.3528 18.9011 42.8679 17.2331 42.2235 15.6239C40.9602 12.4695 39.1087 9.60318 36.7745 7.1889C34.4403 4.77458 31.6692 2.85943 28.6195 1.55281C27.1138 0.907744 25.5548 0.417221 23.9649 0.0858795C21.2615 -0.477499 19 1.81226 19 4.57368V20.5737C19 23.3351 21.2386 25.5737 24 25.5737H39.1369Z"
          fill="#0065FF"
        />
        <g>
          <path
            d="M32.7012 25.5737C29.9398 25.5737 27.6539 23.3162 28.1649 20.6025C28.4854 18.9011 28.9702 17.2331 29.6146 15.6239C30.8779 12.4695 32.7294 9.60318 35.0636 7.1889C37.3978 4.77458 40.1689 2.85943 43.2186 1.55281C44.7243 0.907744 46.2833 0.417221 47.8732 0.0858795C50.5766 -0.477499 52.8381 1.81226 52.8381 4.57368V20.5737C52.8381 23.3351 50.5995 25.5737 47.8381 25.5737H32.7012Z"
            fill="#3DEB97"
          />
        </g>
      </svg>
      <div className={styles.authBody}>
        <div className={styles.title}>Регистрация</div>
        <form action={signup}>
          <Input
            style={{ marginBottom: "10px" }}
            placeholder="Введите email"
            name="email"
          ></Input>
          <InputPass
            style={{ marginBottom: "20px" }}
            name="password"
          ></InputPass>
          <BlueButton onClick={() => console.log("Clicked!")}>
            Зарегистрироваться
          </BlueButton>
        </form>
      </div>
      <div className={styles.links}>
        <span>Есть аккаунт?</span>
        <Link href="/login">
          <span className={styles.recoverPass}>Войти</span>
        </Link>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Лифт Оффер. Все права защищины.
      </div>
    </div>
  );
}

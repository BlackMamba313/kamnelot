import React from "react";
import styles from './YouAreWelcome.module.css'
import Image from "next/image";

export default function YouAreWelcome() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.owner}>
        <Image
          src="/contactPage/owner.png"
          layout="responsive"
          width={495}
          height={593}
          alt="Picture of the author"
          loading="lazy"
        />
      </div>
      <p className={styles.text}>
        Добро пожаловать на kamnelot.ru!<br/>
        <br/>
        Я Гончаров Даниил Михайлович — основатель kamnelot.ru. Мы добываем и продаем природный камень не рудным способом
        уже 19 лет. Помогаем клиентам, подобрать и купить нужный природный камень. На складе добычи загрузили, сразу у
        клиента разгрузили. Без лишних затрат и посредников. Доставляем в города России, Белоруссию и Казахстан. Хотите
        облицевать дом, украсить участок валунами, вымостить дорожки натуральным камнем и сэкономить? В этом наша
        компания сможет вам помочь. <br/>
        На выбор 95 позиций камня. Цена с учетом доставки будет ниже чем на витрине местного рынка.
      </p>
    </div>
  )
}

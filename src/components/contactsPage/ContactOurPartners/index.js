import React from "react";
import styles from './ContactOurPartners.module.css'
import Image from "next/image";
import useWindowSize from "@/vendor/useWindowSize";

export default function ContactOurPartners() {
  const size = useWindowSize();
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Контакты наших партнеров</h4>
      <h5 className={styles.subTitle}>Розничные точки для покупки от 1 кг</h5>
      <div className={styles.flexContainer}>
        <p className={styles.text}>
          Тульская область<br/>
          Тел. +7 962 968-43-40<br/>
          <br/>
          Тульская область<br/>
          Лесная улица, 65Б, деревня Скрипово,<br/>
          муниципальное образование Страховское,<br/>
          Заокский район<br/>
          <br/>
          Ростовская область<br/>
          Снт Исток ул. Добрососедская.<br/>
          Тел. +79034324000<br/>
          <br/>
          Хабаровская область<br/>
          Тел. +79034324000<br/>
          <br/>
          Московская область<br/>
          городской округ Истра, деревня Давыдовское,<br/>
          дом 45 (Новорижское шоссе 57 км.)<br/>
          Тел. +7 (915) 909-99-99<br/>
          <br/>
          Ленинградская область<br/>
          Компания &quot;О.Камень&quot; является ведущим
          производителем и поставщиком изделий и
          материалов из натурального камня, гранита
          для облицовки, мощения, ландшафтного
          дизайна и благоустройства.<br/>
          <br/>
          Ленинградская обл., Всеволожский р-н,<br/>
          Кузьмолово пос., Токсовское ш., 7й км.
          <br/>
          Руководитель отдела продаж<br/>
          Роман<br/>
          Тел. +7 (911) 242 27 01
        </p>
        {size.width > 1150 &&
        <div className={styles.imgWrapper}>
          <Image
            src="/contactPage/stones.png"
            layout="responsive"
            width={598}
            height={593}
            alt="Камни"
            loading="lazy"
          />
        </div>}
      </div>
    </div>
  )
}

import React from "react";
import styles from './SmallStoneTitle.module.css'

export default function SmallStoneTitle() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Мелкий камень для ландшафтного дизайна
      </h3>
      <p className={styles.text}>
        Фракции крупнее песка, меньше булыжника. 5 мм. до 50 мм.Камнем маленького размера в ландшафтном дизайне засыпают
        поверхность грунта слоем 3 — 5 см. Не растут сорные растения. Задается нужный цвет, добавляется практичности.
        Ходите в мокрую погоду в чистой обуви.<br/>
        <br/>
        Мелкий камень для ландшафтного дизайна делим на категории:<br/>
        Речной, морской камень — это галька получившая огранку в природе.<br/>
        Крошка камня — Специально измельченная горная порода.<br/>
        Галтованный мелкий камень — огранка крошки достигается машинным путем. <br/>
        Цена дороже, но шире выбор цвета.
      </p>
    </div>
  )
}

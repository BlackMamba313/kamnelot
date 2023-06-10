import React from "react";
import styles from './TopBlock.module.css'
import useWindowSize from "@/vendor/useWindowSize";
import ButtonText from "@/components/ButtonText";

export default function TopBlock() {
  const size = useWindowSize();
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Полный прайс камней для ландшафтного<br/> дизайна и облицовки
      </h3>
      <p className={styles.text}>
        На этой странице представлено 10 блоков и 101 позиция камня. Различается размер, форма, цвет и порода.
        Весь камень подходит для ландшафтного дизайна. Цена указана без учета доставки из расчета за 1 кг. Заказы
        формируются кратно 1 тонне. (В исключительных случаях кратность 100 кг.) Даем гарантию на точность веса.<br/>
        <br/>
        К цене камня для ландшафта добавится только стоимость доставки и разгрузки на объекте заказчика. Стоимость и
        уровень ландшафтных работ определяет заказчик самостоятельно.Мы постараемся помочь правильно выбрать камень для
        ландшафтного дизайна, определить цену и нужный объем.
      </p>
      {size.width > 1150 ?
        <ButtonText text='Скачать прайс'/>:
        <ButtonText style={{
          margin: '0 auto',
          width: '335px',
          height: '54px',
          fontSize: '19px',
          lineHeight: '27px',
        }} text='Скачать прайс'/>}
    </div>
  )
}

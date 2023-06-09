import styles from './OurTarget.module.css'
import Image from "next/image";
import useWindowSize from "@/vendor/useWindowSize";


export default function OurTarget() {
  const size = useWindowSize();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наша цель - доставить вам лучшие материалы
        <br/> для ландшафтного дизайна.
      </h2>
      <div className={styles.flexWrapper}>
        <Image
          className={styles.img}
          src="/stone.png"
          layout="responsive"
          width={430}
          height={385}
          alt="Stone"
        />
        <div>
          <p style={size.width > 1150?{marginBottom: "26px"}:{marginBottom: "12px"}} className={styles.text}>Компания «Камнелот» предлагает как оптовые так и розничные поставки натурального
            камня по выгодным ценам. Мы занимаемся поставками более 16 лет и продаем готовый продукт без посредников, а
            значит, вам не придется переплачивать. Наша компания готова организовать доставку в любой регион России.</p>
          <p className={styles.text}>У нас можно купить фуру природного камня, по оптовой цене. Одна машина 20 тонн.
            Если надо 3 фуры, сделаем дополнительную скидку. Доставим в течение пяти дней к дому. При маленьких объемах
            доставка выполняется чуть дольше и дороже 12 разновидностей, 95 позиций природного камня. Порода, размер и
            цвет на выбор. </p>
        </div>
      </div>
    </div>
  )
}

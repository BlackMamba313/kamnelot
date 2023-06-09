import styles from './OrderContainer.module.css'
import Image from "next/image";
import IconArrow from "@/images/IconArrow";
import useWindowSize from "@/vendor/useWindowSize";


export default function OrderContainer() {
  const size = useWindowSize();
  return (
    <div className={styles.container}>
      {size.width > 1150 ? <div className={styles.firstColumn}>
        <Image
          src="/mainPage/StoneConstructor.png"
          layout="responsive"
          width={699}
          height={475}
          alt="Picture of the author"
        />
        <p className={styles.text}>Поможем подобрать лучшие материалы для ваших задумок</p>
      </div>:
        <Image
        src="/mainPage/StoneConstructor.png"
        layout="responsive"
        width={699}
        height={475}
        alt="Picture of the author"
        />}
      <div className={styles.secondColumn}>
        <h3 className={styles.orderTitle}>
          Заказать консультацию эксперта
        </h3>
        {size.width > 1150 &&  <p className={styles.orderText}>
          Наш менеджер позвонит вам для консультации и уточнения деталей
        </p>}
        <div className={styles.inputContainer}>
          {size.width < 1151 && <p className={styles.orderText}>
            Наш менеджер позвонит вам в течение дня для уточнения деталей
          </p>}
          <input
          placeholder='Номер телефона'
            className={styles.phoneInput} />
          <div className={styles.btnSend}>
            {size.width > 1150 ?<IconArrow/>:<IconArrow width={50} height={50}/>}
            </div>
        </div>
      </div>
    </div>
  )
}

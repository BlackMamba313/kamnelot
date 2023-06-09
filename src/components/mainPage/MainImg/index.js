import styles from './MainImg.module.css'
import Image from "next/image";
import ButtonText from "@/components/ButtonText";
import useWindowSize from "@/vendor/useWindowSize";


export default function MainImg() {
  const size = useWindowSize();
  return (<>

    <div className={styles.wrapper}>
      {size.width < 1151 &&<p className={styles.text}>Доставка материалов<br/> для ландшафтного<br/> дизайна.</p>}
      <Image
        src="/mainPage/Banner.png"
        layout="responsive"
        width={1440}
        height={898}
        alt="Picture of the author"
        loading="lazy"
      />
      {size.width > 1150 ? <div className={styles.container}>
        <p className={styles.text}>Доставка материалов<br/> для ландшафтного<br/> дизайна.</p>
        <ButtonText text='Оставить заявку'/>
      </div>:
        <div className={styles.roundBtn}>оставить заявку</div>
      }
    </div>
    </>
  )
}

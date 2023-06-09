import styles from './Footer.module.css'
import Telegramm from "@/images/telegram";
import Vk from "@/images/vk";
import Whatsapp from "@/images/whatsapp";
import ButtonCall from "@/images/ButtonCall";
import ButtonMail from "@/images/ButtonMail";
import useWindowSize from "@/vendor/useWindowSize";
import {url} from "@/vendor/constants";


export default function Footer() {
  const size = useWindowSize();
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnInfo}>
        <p className={styles.defaultText}>
          Адрес: 143521 МО, г.о. Истра, д. Давыдовское, дом 45
        </p>
        <p className={styles.defaultText}>
          График работы:<br/> пн-вс 9.00 - 21.00
        </p>
        {size.width < 1151 && <>
          <div className={styles.row}><ButtonCall/>
            <p className={styles.contact}>+7 903 431-49-09</p>
          </div>
          <div className={styles.row}><ButtonMail/>
            <p className={styles.contact}>mail.kamnelot.ru</p>
          </div>
        </>}
        <div className={styles.socialButtons}>
          {size.width > 1150 ?
            <>
              <Telegramm/>
              <Vk/>
              <Whatsapp/>
            </> :
            <>
              <Telegramm width={40} height={40}/>
              <Vk width={40} height={40}/>
              <Whatsapp width={40} height={40}/>
            </>
          }
        </div>
        <div className={styles.textLink}>
          Политика конфиденциальности
        </div>
        <div className={styles.textLink}>
          Пользовательское соглашение
        </div>
        {size.width < 1151 && <div className={styles.textLink}>
          Все права защищены, 2023
        </div>}
      </div>
      {size.width > 1150 &&
        <>
          <div className={styles.column}>
            <nav className={styles.navLinks}>
              <a target="_self" href={url} className={styles.navLink}>Главная</a>
              <a target="_self" href={url+'catalog'} className={styles.navLink}>Каталог</a>
              <a target="_self" href={url+'delivery'} className={styles.navLink}>Доставка</a>
              <a target="_self" href={url+'articles'} className={styles.navLink}>Статьи</a>
              <a target="_self" href={url+'contacts'} className={styles.navLink}>Контакты</a>
            </nav>
            <div className={styles.textLink}>
              Все права защищены, 2023
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.row}><ButtonCall/> <p style={{margin: 0}} className={styles.contact}>+7 903
              431-49-09</p></div>
            <div className={styles.row}><ButtonMail/> <p style={{margin: 0}}
                                                         className={styles.contact}>mail.kamnelot.ru</p></div>
          </div>
        </>}
    </div>
  )
}

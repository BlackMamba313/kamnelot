import React, {useState} from "react";
import styles from './Header.module.css'
import Icon from "@/images/Logo";
import LogoMenu from "@/images/LogoMenu";
import ButtonText from "@/components/ButtonText";
import {url} from "@/vendor/constants";
import useWindowSize from "@/vendor/useWindowSize";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const size = useWindowSize();
  return (
    <div className={styles.wrapper}>
      {size.width > 1150 ?
        <Icon/> :
        <div>
          <Icon width={50} height={65}/>
          <p className={styles.phone}>+7 903 431-49-09</p>
        </div>}
      <div className={styles.headerItems}>
        {size.width > 1150 &&
          <>
            <p className={styles.phone}>+7 903 431-49-09</p>
            <ButtonText text={'Заказать звонок'}/>
          </>}
        <LogoMenu onClick={() => setShowMenu(!showMenu)}/>
      </div>
      {showMenu &&
        <nav className={styles.menuItems}>
          <a href={`${url}`} target="_self" className={styles.navLink}>Главная</a>
          <a href={`${url}catalog`} target="_self" className={styles.navLink}>Каталог</a>
          <a href={`${url}delivery`} target="_self" className={styles.navLink}>Доставка</a>
          <a href={`${url}articles`} target="_self" className={styles.navLink}>Статьи</a>
          <a href={`${url}contacts`} target="_self" className={styles.navLink}>Контакты</a>
        </nav>
      }
    </div>
  )
}

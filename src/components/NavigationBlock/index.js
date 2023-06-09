import React from "react";
import styles from './NavigationBlock.module.css'
import {url} from "@/vendor/constants";
import useWindowSize from "@/vendor/useWindowSize";
import {map} from "lodash";

export default function NavigationBlock({links}) {
  const size = useWindowSize();
  return (
    <>
    {size.width > 1150 ?
    <div className={styles.wrapper}>
      { map(links, item => <>
        {item.name !== 'Главная' &&
          <div className={styles.divider}/>}
        <a target="_self" href={url+item.link} className={styles.link}>{item.name}</a>
      </>)
      }
    </div>:null}
    </>
  )
}

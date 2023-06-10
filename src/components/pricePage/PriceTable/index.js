import React from "react";
import styles from './PriceTable.module.css'
import {map} from "lodash";
import Image from "next/image";

export default function PriceTable({priceData, title}) {
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>{title}</div>
      {map(priceData, stone =>
        <div className={styles.tableItem} style={{background: stone.background}}>
          <div className={styles.containerImages}>
            {map(stone.images , img =>
              <Image
                src={img.link}
                layout="responsive"
                width={364}
                height={img.height}
                alt='фото камня'
                loading="lazy"
              />
            )}
          </div>
          <p className={styles.nameStone}>{stone.name}</p>
          <div className={styles.costList}>
            {map(stone.price, item =>
              <div className={styles.costRow}>
                <div className={styles.size}>
                  {item.size}
                </div>
                <div className={styles.cost}>
                  {item.cost}
                </div>
              </div>)
            }
          </div>
        </div>
       )
      }
    </div>
  )
}

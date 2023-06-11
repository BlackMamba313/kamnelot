import styles from './DeliveryList.module.css'
import {map} from "lodash";
import {deliveryData1, deliveryData2} from "@/vendor/deliveryCost";

export default function DeliveryList() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Ориентировочная стоимость доставки</h3>
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          {map(deliveryData1, row =>
            <div className={styles.tableRow}>
              <div style={{justifyContent: 'left'}} className={styles.tableItem}>{row.city}</div>
              <div className={styles.tableItem}>{row.howFar}</div>
              <div className={styles.tableItem}>{row.cost1t}</div>
              <div className={styles.tableItem}>{row.cost20}</div>
              <div className={styles.tableItem}>{row.cost1m}</div>
            </div>)}
        </div>
        <div className={styles.table}>
          {map(deliveryData2, row =>
            <div className={styles.tableRow}>
              <div style={{justifyContent: 'left'}} className={styles.tableItem}>{row.city}</div>
              <div className={styles.tableItem}>{row.howFar}</div>
              <div className={styles.tableItem}>{row.cost1t}</div>
              <div className={styles.tableItem}>{row.cost20}</div>
              <div className={styles.tableItem}>{row.cost1m}</div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

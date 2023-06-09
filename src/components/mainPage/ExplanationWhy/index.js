import styles from './ExplanationWhy.module.css'
import Stones from "@/images/Stones";


export default function ExplanationWhy() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Почему именно мы станем вашим надежным партнером?
      </h2>
      <div className={styles.flexWrapper}>
        <div className={styles.flexItem}>
          <Stones styles={{position: 'absolute', top: '-10px',zIndex: -1}}/>
          <h4 className={styles.subTitle}>Опыт работы с 2007 года</h4>
          <p className={styles.text}>У нас есть опыт работы как с
            частными объектами, так и с масштабными предприятиями,
            благодаря чему мы готовы решить задачу любой сложности</p>
        </div>
        <div className={styles.flexItem}>
          <Stones styles={{position: 'absolute', top: '-10px',zIndex: -1}}/>
          <h4 className={styles.subTitle}>Только лучшие материалы</h4>
          <p className={styles.text}>У нас есть опыт работы как с
            частными объектами, так и с масштабными предприятиями,
            благодаря чему мы готовы решить задачу любой сложности</p>
        </div>
        <div className={styles.flexItem}>
          <Stones styles={{position: 'absolute', top: '-10px',zIndex: -1}}/>
          <h4 className={styles.subTitle}>Только проверенные поставщики</h4>
          <p className={styles.text}>У нас есть опыт работы как с
            частными объектами, так и с масштабными предприятиями,
            благодаря чему мы готовы решить задачу любой сложности</p>
        </div>
        <div className={styles.flexItem}>
          <Stones styles={{position: 'absolute', top: '-10px',zIndex: -1}}/>
          <h4 className={styles.subTitle}>Работаем на результат</h4>
          <p className={styles.text}>У нас есть опыт работы как с
            частными объектами, так и с масштабными предприятиями,
            благодаря чему мы готовы решить задачу любой сложности</p>
        </div>
      </div>
    </div>
  )
}

import styles from './WorkStages.module.css'


export default function WorkStages() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Этапы работы
      </h2>
      <div className={styles.flexWrapper}>
        <div className={styles.flexItem}>
          <p style={{paddingLeft: '15px'}}
             className={styles.number}>1</p>
          <div className={styles.round}/>
          <p className={styles.text}>
            Выберите подходящий товар в каталоге
          </p>
        </div>
        <div className={styles.flexItem}>
          <p className={styles.number}>2</p>
          <div className={styles.round}/>
          <p className={styles.text}>
            Позвоните нам или заполните заявку
          </p>
        </div>
        <div className={styles.flexItem}>
          <p className={styles.number}>3</p>
          <div className={styles.round}/>
          <p className={styles.text}>
            Дождитесь подтверждения заказа
          </p>
        </div>
        <div className={styles.flexItem}>
          <p className={styles.number}>4</p>
          <div className={styles.round}/>
          <p className={styles.text}>
            Оплатите удобным способом
          </p>
        </div>
      </div>
    </div>
  )
}

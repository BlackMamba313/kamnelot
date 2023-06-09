import styles from './ButtonText.module.css'


export default function ButtonText({text, style}) {
  return (
        <div style={style} className={styles.button}>
          {text}
        </div>
  )
}

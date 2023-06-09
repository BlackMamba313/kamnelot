import ButtonText from "@/components/ButtonText";
import styles from './OurAssortment.module.css'
import React, {useState} from "react";
import {stones} from "@/components/mainPage/OurAssortment/constants";
import Image from "next/image";
import useWindowSize from "@/vendor/useWindowSize";
import Chevron from "@/images/Chevron";

export default function OurAssortment() {
  const size = useWindowSize();
  const [currentStones, setCurrentStones] = useState( size.width > 1150?stones[0]:null)


  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Наш ассортимент материалов:</h3>
      <div className={styles.flexContainer}>
        <div className={styles.buttonContainer}>
          {stones.map((stone, index) =>
            <>
            <div onClick={() => setCurrentStones(stones[index])} className={styles.stoneRow} key={stone.name}>
              <div
                   className={`${styles.button} ${currentStones?.name === stone.name ? styles.selected : ''}`}>{stone.name}
              </div>
              {size.width < 1151 &&
                currentStones?.name === stone.name? <Chevron rewers={true}/>: <Chevron/>
                }
            </div>
              {size.width < 1151 &&
              currentStones?.name === stone.name?
                <div className={styles.infoContainer}>
                <Image
                  src={currentStones?.img}
                  layout="responsive"
                  width={662}
                  height={416}
                  alt="Stone"
                />
                <p className={styles.text}>{currentStones?.descriptions}</p>
                <ButtonText style={{
                  width: '336px',
                  margin:'0 auto',
                  height:'54px',
                  fontSize: '19px',
                  lineHeight: '27px'}} text='В каталог'/>
              </div>:null}
            </>
          )}
        </div>

        {size.width > 1150 &&
          <div className={styles.infoContainer}>
            <Image
              src={currentStones.img}
              layout="responsive"
              width={662}
              height={416}
              alt="Stone"
            />
            <p className={styles.text}>{currentStones.descriptions}</p>
            <ButtonText text='Подробнее'/>
          </div>}
      </div>

    </div>
  )
}

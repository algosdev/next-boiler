import React from 'react'
import styles from './delivery.module.scss'
import { OnTimeDeliveryIcon } from '../svg'
function DeliveryCard() {
  return (
    <div className={styles.wrapper_item}>
      <div className={styles.inner}>
        <OnTimeDeliveryIcon />
        <div className={styles.title}>Своевременная доставка</div>
        <div className={styles.desc}>
          Lorem Ipsum просто фиктивный текст в полиграфической и наборной
          индустрии.
        </div>
      </div>
    </div>
  )
}

export default DeliveryCard

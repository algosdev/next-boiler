import React from 'react'
import styles from './delivery.module.scss'
import { OnTimeDeliveryIcon, FastDeliveryIcon, SettingsIcon } from '../svg'
function DeliveryCard({ title, children }) {
  return (
    <div className={styles.wrapper_item}>
      {children}
      <div className={styles.title}>{title}</div>
      {/* <div className={styles.desc}>
          Lorem Ipsum просто фиктивный текст в полиграфической и наборной
          индустрии.
        </div> */}
    </div>
  )
}

export default DeliveryCard

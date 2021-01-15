import React from 'react'
import { Grid } from '@material-ui/core'
import style from './shops.module.scss'
import StorefrontIcon from '@material-ui/icons/Storefront'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
const shopsData = [
  {
    name: 'MACBRO Шахристан',
    address: 'г. Ташкент, Юнусабадский р-н, А. Тимура 129Б',
    workingHours: 'с 10-00 до 21-00 (без выходных)',
    isAvailable: 'Нет',
  },
  {
    name: 'MACBRO Бунёдкор',
    address: 'г. Ташкент, массив Чиланзар-6, ТЦ Bunyodkor',
    workingHours: 'с 10-00 до 21-00 (без выходных)',
    isAvailable: 'Нет',
  },
  {
    name: 'MACBRO Самарканд',
    address: 'г. Самарканд, ул. Гагарина, 178',
    workingHours: 'с 10-00 до 21-00 (без выходных)',
    isAvailable: 'Нет',
  },
]
function Shops() {
  return (
    <div className={style.wrapper}>
      <div className={style.main_title}>Наши филиалы</div>
      <div className={style.inner}>
        <div className={style.content}>
          <div className={style.header}>
            <Grid container className={style.field_container}>
              <Grid item xs={3} className={style.field}>
                <StorefrontIcon /> Магазин
              </Grid>
              <Grid item xs={4} className={style.field}>
                <LocationOnOutlinedIcon /> Адрес
              </Grid>
              <Grid item xs={3} className={style.field}>
                <ScheduleRoundedIcon /> Режим работы
              </Grid>
              <Grid item xs={2} className={style.field}>
                <AssignmentTurnedInOutlinedIcon /> Наличие
              </Grid>
            </Grid>
          </div>
          {shopsData.map((item, ind) => (
            <div className={style.row} key={ind}>
              <Grid container className={style.field_container}>
                <Grid item xs={3} className={style.field}>
                  <div>{item.name}</div>
                </Grid>
                <Grid item xs={4} className={style.field}>
                  <div>{item.address}</div>
                </Grid>
                <Grid item xs={3} className={style.field}>
                  <div>{item.workingHours}</div>
                </Grid>
                <Grid item xs={2} className={style.field}>
                  <div>{item.isAvailable}</div>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shops

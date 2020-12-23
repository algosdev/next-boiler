import React from 'react'
import { Grid } from '@material-ui/core'
// import useAxios from "../libs/hooks/useAxios";
import style from './banner.module.scss'

export default function Banner({ name, size, src }) {
  // const [banner, error] = useAxios(
  //   `${process.env.BANNER_API_URL}?position=${name}&active=true`
  // );

  return (
    // banner && (
    <Grid item xs={size} className={style.banner}>
      <img src={src} alt='Banner' />
    </Grid>
  )
  // );
}

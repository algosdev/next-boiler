import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
import style from './catalogList.module.scss'
import Link from 'next/link'
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '18px',
  },
}))
export default function CatalogList({ data }) {
  const classes = useStyles()
  return (
    <div className={style.catalogList}>
      <Container>
        <Typography variant='h2'>{data.title}</Typography>
        <div className={style.catalogListWrapper}>
          <Grid container spacing={3}>
            {data.catalog.map((item, index) => (
              <Grid item xs={3} key={index}>
                <Paper className={classes.root}>
                  <Link href='/shop'>
                    <a className={style.wrapper}>
                      <Typography variant='h3'>{item.name}</Typography>
                      <div className={style.catalogImage}>
                        <img src={item.image} alt={item.name} />
                      </div>
                    </a>
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  )
}

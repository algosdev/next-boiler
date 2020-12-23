import { Container, Grid, Paper, Typography, Box } from '@material-ui/core'
import React from 'react'
import style from './catalogList.module.scss'
import Link from 'next/link'

const catalog = [
  {
    name: 'iMac',
    image: 'images/mac.png',
  },
  {
    name: 'iPhone',
    image: 'images/iphone.png',
  },
  {
    name: 'iPad',
    image: 'images/ipad.png',
  },
  {
    name: 'Apple Watch',
    image: 'images/apple_watch.png',
  },
  {
    name: 'AirPods',
    image: 'images/airpods.png',
  },
  {
    name: 'Accessories',
    image: 'images/accessories.png',
  },
  {
    name: 'Macbook',
    image: 'images/mac.png',
  },
]

export default function CatalogList({ title }) {
  return (
    <div className={style.catalogList}>
      <Container>
        <Typography variant='h2'>{title}</Typography>
        <Box my={6}>
          <Grid container spacing={3}>
            {catalog.map((item, index) => (
              <Grid item xs={3} key={index}>
                <Paper>
                  <Link href='/'>
                    <a className={style.wrapper}>
                      <Typography variant='h3'>{item.name}</Typography>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={style.catalogImage}
                      />
                    </a>
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

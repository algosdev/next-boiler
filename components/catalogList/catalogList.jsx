import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
import style from './catalogList.module.scss'
import { Link, useTranslation } from '../../i18n'
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '18px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
}))
export default function CatalogList({ data }) {
  const { t } = useTranslation()
  const classes = useStyles()
  console.log(data)
  return (
    <div className={style.catalogList}>
      <Container>
        <Typography variant='h2' className={style.section_title}>
          {data.name}
        </Typography>
        <div className={style.catalogListWrapper}>
          <Grid container spacing={3}>
            {data?.children?.map((item, index) => (
              <Grid item lg={3} sm={6} xs={12} key={index}>
                <Paper className={classes.root}>
                  <Link
                    // href={`/shop?categ=${data.slug}&categid=${data.id}&subcateg=${item.slug}&subcategid=${item.id}`}
                    href={`/shop/${item.slug}`}
                  >
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

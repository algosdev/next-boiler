import React from 'react'
import ProductSingleCarousel from "../../components/productSingleCarousel/productSingleCarousel"
import ProductSingleContent from "../../components/productSingleContent/productSingleContent"
import {Container, Grid, Box} from "@material-ui/core"
function ProductSingle() {
    return (
        <>
        <div style={{background: "#fff", padding: "50px 0"}}>
        <Container >
        <Grid container justify='space-between' xs={12} spacing={2}>
          <Grid item xs={6}><ProductSingleCarousel /></Grid>
          <Grid item xs={6}><ProductSingleContent /></Grid>
          </Grid>
        </Container>
        </div>
        </>
    )
}

export default ProductSingle

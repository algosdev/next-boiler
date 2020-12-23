import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'

const BannerContainer = ({ children }) => {
  return (
    <Box my={6}>
      <Container>
        <Grid container spacing={3}>{children}</Grid>
      </Container>
    </Box>
  )
}

export default BannerContainer

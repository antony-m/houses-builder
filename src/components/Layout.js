import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/TopBar';
import HousesConfig from './housesConfig/HousesConfig';
import HousesPreview from '../components/housesPreview/HousesPreview';


const Layout = () => {
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12}>
          <TopBar/>
        </Grid>
        <Grid item xs={4}>
          <HousesConfig/>
        </Grid>
        <Grid item xs={8}>
          <HousesPreview/>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Layout;
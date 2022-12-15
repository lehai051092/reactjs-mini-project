import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import productApi from "../../../../api/productApi";

const useStyles = makeStyles(theme => ({
  root: {},
  left: {
    width: '250px',
    marginLeft: theme.spacing(1),
  },
  right: {
    flex: "1 1 auto"
  },
}));

ProductListPage.propTypes = {};

function ProductListPage(props) {
  const classes = useStyles();

  useEffect(() => {
    (
      async () => {
        const productList = await productApi.getAll({_page: 2, _limit: 10});
        console.log(productList);
      }
    )();

  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>Right Column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductListPage;
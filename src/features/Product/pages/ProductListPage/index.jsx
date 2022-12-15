import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import productApi from "../../../../api/productApi";
import ProductListSkeleton from "../../components/ProductListSkeleton";
import Typography from "@material-ui/core/Typography";

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
  const [getProductList, setProductList] = useState([]);
  const [getLoading, setLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        try {
          const {data, pagination} = await productApi.getAll({_page: 2, _limit: 10});
          console.log(data);
          setProductList(data);

        } catch (e) {
          console.log('Fetch api product fail.');
        }

        setLoading(false);
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
            <Paper elevation={0}>
              {getLoading ? <ProductListSkeleton/> : <Typography>Product List</Typography>}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductListPage;
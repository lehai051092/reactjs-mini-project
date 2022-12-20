import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import productApi from "../../../../api/productApi";
import ProductListSkeleton from "../../components/ProductListSkeleton";
import ProductList from "../../components/ProductList";
import {Pagination} from "@mui/material";

const useStyles = makeStyles(theme => ({
  root: {},
  left: {
    width: '250px',
    marginLeft: theme.spacing(1),
  },
  right: {
    flex: "1 1 0"
  },
}));

ProductListPage.propTypes = {};

function ProductListPage(props) {
  const classes = useStyles();
  const [getProductList, setProductList] = useState([]);
  const [getLoading, setLoading] = useState(true);
  const [getPagination, setPagination] = useState({
    limit: 9,
    page: 1,
    total: 10,
  });
  const [getFilters, setFilters] = useState({
    _page: 1,
    _limit: 9,
  });

  useEffect(() => {
    (async () => {
        try {
          const {data, pagination} = await productApi.getAll(getFilters);
          setProductList(data);
          setPagination(pagination);
        } catch (e) {
          console.log('Fetch api product fail: ', e);
        }

        setLoading(false);
      }
    )();
  }, [getFilters]);

  const handlePageChange = (event, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {getLoading ? <ProductListSkeleton/> : <ProductList productList={getProductList}/>}
              <Pagination
                color="primary"
                count={Math.ceil(getPagination.total / getPagination.limit)}
                page={getPagination.page}
                onChange={handlePageChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductListPage;
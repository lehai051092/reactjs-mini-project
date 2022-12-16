import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from "@material-ui/core";
import Product from "../Product";

ProductList.propTypes = {
  productList: PropTypes.array,
};

ProductList.defaultProps = {
  productList: [],
}

function ProductList({productList}) {
  return (
    <Box>
      <Grid container spacing={1}>
        {productList.map((product) => (
          <Grid item key={product.id} xs={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
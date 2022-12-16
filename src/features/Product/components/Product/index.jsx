import React from 'react';
import PropTypes from 'prop-types';
import {Box} from "@material-ui/core";
import {Skeleton} from "@mui/material";
import Typography from "@material-ui/core/Typography";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
}

function Product({product}) {
  return (
    <Box padding={1}>
      <Skeleton variant="rect" width="100%" height={118}/>
      <Typography variant="body2">
        {product.name}
      </Typography>
      <Typography variant="body2">
        {product.salePrice} -{product.promotionPercent}
      </Typography>
    </Box>
  )
}

export default Product;
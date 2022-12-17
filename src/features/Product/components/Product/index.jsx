import React from 'react';
import PropTypes from 'prop-types';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import productImageDefault444 from "assets/images/product/444.png";
import api from "../../../../constants/api";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  imageBox: {
    padding: theme.spacing(1),
  },
  price: {
    fontWeight: "bold !important",
    paddingRight: theme.spacing(1),
  }
}));

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
}

function Product({product}) {
  const classes = useStyles();
  const thumbnailUrl = product.thumbnail ? `${api.BASE_URL}${product.thumbnail?.url}` : productImageDefault444;

  return (
    <Box className={classes.root}>
      <Box className={classes.imageBox}>
        <img src={thumbnailUrl} alt={product.name} width="100%"/>
      </Box>
      <Typography variant="body2">
        {product.name}
      </Typography>
      <Typography variant="body2">
        <Typography className={classes.price} component="span">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Typography>
        {product.promotionPercent !== 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  )
}

export default Product;
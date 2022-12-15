import React from 'react';
import {Route, Routes, Outlet} from 'react-router-dom';
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
  },
}));

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Outlet />
      <Routes>
        <Route path="/" element={<ProductListPage/>}/>
        <Route path="/:id" element={<ProductDetailPage/>}/>
      </Routes>
    </Box>
  );
}

export default ProductFeature;
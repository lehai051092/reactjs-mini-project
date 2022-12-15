import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from "@material-ui/core";
import {Skeleton} from "@mui/material";

ProductListSkeleton.propTypes = {
  limitSkeleton: PropTypes.number,
};

ProductListSkeleton.defaultProps = {
  limitSkeleton: 9,
}

function ProductListSkeleton({limitSkeleton}) {
  return (
    <Box>
      <Grid container spacing={1}>
        {Array.from(new Array(limitSkeleton)).map((x, index) => (
          <Grid item key={index} xs={12} md={6} lg={4} xl={3}>
            <Skeleton variant="rect" width="100%" height={118}/>
            <Skeleton/>
            <Skeleton width="60%"/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductListSkeleton;
import React from 'react';
import PropTypes from 'prop-types';
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
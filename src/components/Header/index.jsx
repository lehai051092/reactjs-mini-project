import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {Link, NavLink} from "react-router-dom";
import DialogUser from "./components/DialogUser";
import IconButton from "@material-ui/core/IconButton";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  navLink: {
    display: "flex",
    flexGrow: 10,
  },
  link: {
    color: '#fff',
    textDecoration: "none",
    padding: theme.spacing(1),
    fontWeight: "500",
  },
  iconLink: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <IconButton className={classes.menuButton}>
          <Link to="/" className={classes.link}>
            <AcUnitIcon/>
          </Link>
        </IconButton>
        <Box className={classes.navLink}>
          <NavLink className={classes.link} to="/products">Products</NavLink>
        </Box>
        <Box className={classes.iconLink}>
          <DialogUser/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
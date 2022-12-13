import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {Link} from "react-router-dom";
import DialogRegister from "./components/DialogRegister";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: "none"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AcUnitIcon className={classes.menuButton}/>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">Mini Project</Link>
          </Typography>
          <DialogRegister/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
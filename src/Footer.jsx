import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  add: {
    position: "absolute",
    right: 10,
    bottom: 10
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.add}>
        <AddIcon />
      </Fab>
    </div>
  );
}

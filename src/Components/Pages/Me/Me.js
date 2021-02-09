import "./me.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 5,
    marginTop: 40,
    marginLeft: 20,
  },
});

export default function Me() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body1" component="p">
          I'm a mechanical engineering graduate who's extremely interested in
          web development and passionate about the need of improving the user
          interface using the latest frameworks technologies. I'm highly
          ambitious and eager to learn given the opportunity. Currently working
          on expanding my knowledge about frameworks such as React.js . I've
          gained an incredible amount of knowledge so far and I'm aspiring to
          acquire more through work experience in the field.
        </Typography>
      </CardContent>
    </Card>
  );
}

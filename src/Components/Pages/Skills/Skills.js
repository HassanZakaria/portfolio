import "./skills.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 60,
    backgroundColor: "black",
    borderRadius: "20px",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
});

export default function Education() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            React
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            JavaScript
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            HTML5
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            CSS
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

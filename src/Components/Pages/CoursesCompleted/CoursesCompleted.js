import "./coursescompleted.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 60,
    color: "white",
    backgroundColor: "black",
    borderRadius: "20px",
  },
});

export default function CoursesCompleted() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Beginner Path on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Complete Intro to React, Version 5, on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Intermediate React, Version 2, on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Object-Oriented Javascript, on Udacity
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

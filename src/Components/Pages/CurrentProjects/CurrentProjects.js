import "./currentprojects.css";
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

export default function CurrentlyWorkingOn() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Learning new Frontend technologies such as TypeScript
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Enhancing my understanding of React by working on some personal
            projects
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Professional path on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Learning Backend Javascript frameworks such as Node.js and Express
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Building a strong understanding of Computer Science topics such as
            algorithms and data structures
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

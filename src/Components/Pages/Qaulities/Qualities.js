import "./qualities.css";
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

export default function Qualities() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Equipped with demonstrable Self-Directed Learning skills
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Armed with Critical Thinking for Decision Making
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Highly Sociable & Charismatic
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Demonstrable Technical presentation skills
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Highly Teachable and ready to learn
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            Aware of the need for Team Coordination for Project Management
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

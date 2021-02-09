import "./projects.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 5,
    marginTop: 40,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
  },
});

export default function Projects() {
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
            Calculator
          </Typography>
          <Typography variant="body2" component="p">
            <a
              href="https://github.com/HassanZakaria/calculator"
              alt="calculator project"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <GitHubIcon />
            </a>
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
            Portfolio
          </Typography>
          <Typography variant="body2" component="p">
            <a
              href="https://github.com/HassanZakaria/portfolio"
              alt="portfolio"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <GitHubIcon />
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

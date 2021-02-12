import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: "9vh",
    marginBottom: "9vh",
    marginRight: "5vh",
    color: "white",
    backgroundColor: "#25222287",
    borderRadius: "20px",
    boxShadow:
      "5px 5px 5px 1px rgb(13 13 13 / 49%), 0px 1px 7px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)",
  },
  text: {
    paddingTop: 5,
  },
});

export default function CoursesCompleted() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Beginner Path on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Complete Intro to React, Version 5, on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Intermediate React, Version 2, on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Object-Oriented Javascript, on Udacity
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

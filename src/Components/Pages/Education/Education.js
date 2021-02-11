import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: "15vh",
    color: "white",
    backgroundColor: "#25222287",
    borderRadius: "20px",
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
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
            Czech Technical University in Prague
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ textAlign: "center" }}
          >
            Bachelor's of Science, Mechanical Engineering (2015-2020)
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
            Ain Shams University in Cairo
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ textAlign: "center" }}
          >
            Mechanical Engineering (2012-2015)(transferred)
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

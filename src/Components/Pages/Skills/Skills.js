import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles({
  root: {
    marginTop: "9vh",
    marginRight: "5vh",
    backgroundColor: "#25222287",
    borderRadius: "20px",
  },
  title: {
    fontSize: 24,
    color: "white",
    paddingTop: 10,
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
            <FontAwesomeIcon icon={faReact} />
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
            <FontAwesomeIcon icon={faJsSquare} />
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
            <FontAwesomeIcon icon={faHtml5} />
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
            <FontAwesomeIcon icon={faCss3} />
            CSS
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

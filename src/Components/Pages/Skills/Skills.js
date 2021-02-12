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
    boxShadow:
      "5px 5px 5px 1px rgb(13 13 13 / 49%), 0px 1px 7px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)",
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
            <span style={{ padding: 5 }}>React</span>
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
            <span style={{ padding: 5 }}>JavaScript</span>
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
            <span style={{ padding: 5 }}>HTML5</span>
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
            <span style={{ padding: 5 }}>CSS</span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

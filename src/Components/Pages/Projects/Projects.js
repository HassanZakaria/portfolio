import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    marginTop: "20vh",
    marginRight: "5vh",
    backgroundColor: "#25222287",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow:
      "5px 5px 5px 1px rgb(13 13 13 / 49%), 0px 1px 7px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  icon: {
    color: "white",
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
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <GitHubIcon className={classes.icon} />
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
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <GitHubIcon className={classes.icon} />
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

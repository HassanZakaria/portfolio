import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: "6vh",
    marginBottom: "3vh",
    color: "white",
    backgroundColor: "#25222287",
    borderRadius: "20px",
  },
  text: {
    paddingTop: 2,
  },
});

export default function Qualities() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Equipped with demonstrable Self-Directed Learning skills
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Armed with Critical Thinking for Decision Making
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Highly Sociable & Charismatic
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Demonstrable Technical presentation skills
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Highly Teachable and ready to learn
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Aware of the need for Team Coordination for Project Management
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

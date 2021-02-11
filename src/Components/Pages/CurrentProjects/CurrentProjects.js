import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: "8vh",
    marginBottom: "3vh",
    marginRight: "5vh",
    color: "white",
    backgroundColor: "#25222287",
    borderRadius: "20px",
  },
  text: {
    paddingTop: 5,
  },
});

export default function CurrentlyWorkingOn() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Learning new Frontend technologies such as TypeScript
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Enhancing my understanding of React by working on some personal
            projects
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Professional path on FrontendMasters
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Learning Backend Javascript frameworks such as Node.js and Express
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p" className={classes.text}>
            Building a strong understanding of Computer Science topics such as
            algorithms and data structures
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Header from "../../Header/Header";

const useStyles = makeStyles({
  root: {
    marginTop: "4vw",
    marginBottom: "2vh",
    marginRight: "4vh",
    color: "white",
    background: "linear-gradient(to right, #434343, #000000)",
    borderRadius: "20px",
    boxShadow:
      "5px 5px 5px 1px rgb(13 13 13 / 49%), 0px 1px 7px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)",
  },
});

export default function Me() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            I'm a mechanical engineering graduate who's extremely interested in
            web development and passionate about the need of improving the user
            interface using the latest frameworks technologies. I'm highly
            ambitious and eager to learn. Currently working on expanding my
            knowledge about frameworks such as React.js . I've gained an
            incredible amount of knowledge so far and I'm aspiring to acquire
            more through work experience in the field.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Me from "./Components/Pages/Me/Me";
import Qualities from "./Components/Pages/Qaulities/Qualities";
import Skills from "./Components/Pages/Skills/Skills";
import Education from "./Components/Pages/Education/Education";
import Projects from "./Components/Pages/Projects/Projects";
import Experience from "./Components/Pages/Experience/Experience";
import CoursesCompleted from "./Components/Pages/CoursesCompleted/CoursesCompleted";
import ResponsiveDrawer from "./Components/Drawer/Drawer";
import CurrentlyWorkingOn from "./Components/Pages/CurrentProjects/CurrentProjects";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  layout: {
    margin: "5vw",
  },
  App: {
    minHeight: "100vh",
    width: "100vw",
    background:
      "linear-gradient(45deg, rgb(193, 193, 199) 0%, rgb(146, 116, 116) 48%, rgb(30, 50, 54) 100%)",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <div className={classes.root}>
        <Grid container>
          <Router>
            <Grid item xs={2}>
              <ResponsiveDrawer />
            </Grid>
            <Grid item xs={8}>
              <Switch>
                <div className={classes.layout}>
                  <Route path="/me" component={Me} />
                  <Route path="/education" component={Education} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/qualities" component={Qualities} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/experience" component={Experience} />
                  <Route
                    path="/courses-completed"
                    component={CoursesCompleted}
                  />
                  <Route
                    path="/currently-working-on"
                    component={CurrentlyWorkingOn}
                  />
                </div>
              </Switch>
            </Grid>
            <Grid item xs={2} />
          </Router>
        </Grid>
      </div>
    </div>
  );
}

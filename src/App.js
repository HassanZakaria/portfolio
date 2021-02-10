import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Me from "./Components/Pages/Me/Me";
import Qualities from "./Components/Pages/Qaulities/Qualities";
import Skills from "./Components/Pages/Skills/Skills";
import Education from "./Components/Pages/Education/Education";
import Projects from "./Components/Pages/Projects/Projects";
import Experience from "./Components/Pages/Experience/Experience";
import CoursesCompleted from "./Components/Pages/CoursesCompleted/CoursesCompleted";
import ResponsiveDrawer from "./Components/Drawer/Drawer";
import CurrentlyWorkingOn from "./Components/Pages/CurrentProjects/CurrentProjects";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ResponsiveDrawer />
        <Header />
        <Switch>
          <div className="layout">
            <Route path="/me" exact component={Me} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/qualities" component={Qualities} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/courses-completed" component={CoursesCompleted} />
            <Route
              path="/currently-working-on"
              component={CurrentlyWorkingOn}
            />
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

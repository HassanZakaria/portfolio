import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./drawer.css";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    marginLeft: "2px",
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
    overflow: "hidden",
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List
        style={{
          padding: 0,
        }}
        onClick={() => setMobileOpen(false)}
      >
        <nav className="nav-bar">
          <ul className="nav-bar-list">
            <Link to="/">
              <li className="nav-item">Home</li>{" "}
            </Link>
            <Link to="/education">
              <li className="nav-item">Education</li>{" "}
            </Link>
            <Link to="/skills">
              <li className="nav-item">Skills</li>{" "}
            </Link>
            <Link to="/qualities">
              <li className="nav-item">Qualities</li>{" "}
            </Link>
            <Link to="/projects">
              <li className="nav-item">Projects</li>{" "}
            </Link>
            <Link to="/experience">
              <li className="nav-item">Experience</li>{" "}
            </Link>
            <Link to="/courses-completed">
              <li className="nav-item">Courses Completed</li>{" "}
            </Link>
            <Link to="/currently-working-on">
              <li className="nav-item">Currently Working On</li>{" "}
            </Link>
          </ul>
        </nav>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
export default ResponsiveDrawer;

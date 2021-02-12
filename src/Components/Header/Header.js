import "./header.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="app-header">
      <img
        src="https://avatars.githubusercontent.com/u/63402132?s=400&u=650a84b925a73f40d030286b48f2243001904982&v=4"
        alt="hassan"
        width="200"
        height="200"
        className="image"
      />
      <div className="info">
        <div>
          <FontAwesomeIcon icon={faReact} />
          <span style={{ padding: 3 }}>React Developer</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span style={{ padding: 3 }}>Prague, Czech Republic</span>
        </div>
        <a
          href="https://github.com/HassanZakaria"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-zakaria-886a1315a/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </header>
  );
};
export default Header;

import "./header.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Header = () => {
  return (
    <header className="app-header">
      <img
        src="https://avatars.githubusercontent.com/u/63402132?s=400&u=650a84b925a73f40d030286b48f2243001904982&v=4"
        alt="hassan"
        width="200"
        height="200"
        className="image"
      ></img>
      <div className="info">
        <div>React Developer</div>
        <div>Prague, Czech Republic</div>
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

import {
  faAnglesUp,
  faArrowAltCircleUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#homepage">
        <FontAwesomeIcon icon={faAnglesUp} size="xl" beatFade />
      </a>
      <div className="footer-container"></div>
      <p>
        &copy; {new Date().getFullYear()} | Victor Ccanchi | All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;

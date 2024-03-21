import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <motion.div className="bars" onClick={() => setOpen((prev) => !prev)} whileHover={{scale:0.9}}>
      {open ? (
        <FontAwesomeIcon size="xl" shake={open} icon={faXmark} />
      ) : (
        <FontAwesomeIcon size="xl" icon={faBars} />
      )}
    </motion.div>
  );
};

export default ToggleButton;

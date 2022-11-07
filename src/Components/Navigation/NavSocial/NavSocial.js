import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavSocial.module.css";

const NavSocial = ({ socialClass, socialIcons }) => {
    return (
      <>
        <li className={`${styles[socialClass]}`}>
          <a
            href="https://github.com/faisalalim1"
            className="socialIcons"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="My Github Portfolio."
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className={`${styles[socialIcons]}`}
            />
          </a>
        </li>
        <li className={`${styles[socialClass]}`}>
          <a
            href="https://www.linkedin.com/in/mohammad-faisal-alim-65ab5b177/"
            className="socialIcons"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="My Linkedin Profile."
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={`${styles[socialIcons]}`}
            />
          </a>
        </li>
        <li className={`${styles[socialClass]}`}>
          <a
            href="mailto:faisal4all786@gmail.com"
            className="socialIcons"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="My Linkedin email."
          >
            <FontAwesomeIcon
              icon="envelope"
              className={`${styles[socialIcons]}`}
            />
          </a>
        </li>
        <li className={`${styles[socialClass]}`}>
          <a
            href="tel:+917696139255"
            className="socialIcons"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="My Linkedin contact"
          >
            <FontAwesomeIcon
              icon="phone"
              className={`${styles[socialIcons]}`}
            />
          </a>
        </li>
        <li className={`${styles[socialClass]}`}>
          <a
            href="https://drive.google.com/file/d/1w6o4KIUg-fe-xTLVUMvEvWisAalD6hn6/view?usp=share_link"
            className="socialIcons"
            target="_blank"
            rel="noreferrer"
            aria-label="My Linkedin resume"
          >
            <FontAwesomeIcon icon="file" className={`${styles[socialIcons]}`} />
          </a>
        </li>
      </>
    );
};

export default NavSocial;

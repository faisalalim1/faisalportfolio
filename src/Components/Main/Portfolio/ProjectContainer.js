import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import userSm from "../../../Assets/img/Portfolio items/entry.png";
import userlg from "../../../Assets/img/Portfolio items/entry.png";
import walletSm from "../../../Assets/img/Portfolio items/walletapp.png";
import walletLg from "../../../Assets/img/Portfolio items/walletapp.png";
import airbnb from "../../../Assets/img/Portfolio items/airbnb.png";
import ecommerce from "../../../Assets/img/Portfolio items/ecommerce.png";
import ecommerces from "../../../Assets/img/Portfolio items/ecommerce.png";


import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import sql from "../../../Assets/img/logos/Sql.png";
import spring from "../../../Assets/img/logos/spring.png";
import java from "../../../Assets/img/logos/java.svg.png";
import redux from "../../../Assets/img/logos/redux.png";


const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [



      {
        image: [userSm,userlg],
        alt: "User Entry Book",
        heading: "User Entry Book",
        p1: "Here we have made a entry book to save to name, email-id of a person.",
        l1: "https://github.com/faisalalim1/userentrybook.git",
        a1: "Github page for a User Entry Book Website.",
        l2: "https://userentrybook.herokuapp.com/",
        a2: " User Entry Book live website.",
        tech: [java,spring,react,sql,html,css],
      },

      {
        image: [walletSm, walletLg],
        alt: "Wallet App",
        heading: "Wallet App",
        p1: "This is Full Stack Application where you can manage all your transactions.",
        l1: "https://github.com/faisalalim1/springwalletapp.git",
        a1: "Github page for a project.",
        l2: "https://faisalwalletapp.herokuapp.com",
        a2: "Wallet App live website.",
        tech: [java,spring,sql,react,html,css],
      },
      {
        image: [airbnb, airbnb],
        alt: "Air bnb",
        heading: "Air BNB Clone",
        p1: "This project is clone of air bnb.",
        l1: "https://github.com/faisalalim1/airbnbfaisal.git",
        a1: "Github page for a project.",
        l2: "https://airbnbfaisal.vercel.app/",
        a2: "Air bnb App live website",
        tech: [html, css, js, react, redux],
      }, 
      {
        image: [ecommerces, ecommerce],
        alt: "E-Commerce",
        heading: "E-Commerce Website",
        p1: "This is a E-Commerce Website, where we have used React.js, Bootstrap, Redux to achieve this.",
        l1: "https://github.com/faisalalim1/ecommerce.git",
        a1: "Github page for a project.",
        l2: "https://ecommercefaza.netlify.app/",
        a2: "E-Commerce",
        tech: [react, redux,  html, css]
      }
      
 
     
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;

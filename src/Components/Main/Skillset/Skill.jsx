import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import {
  SiJava,
  SiHtml5,
  SiMaterialui,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiRedux
  
} from "react-icons/si";
import { DiCss3} from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Skillset=()=>{
    return(
        <>
        <div className="section main" data-aos="fade-right">
        
          <div className="techsection">

          <div>
              <SiJava />
              <h5>Java</h5>
            </div>

            <div>
              <SiSpringboot />
              <h5>Springboot</h5>
            </div>


            <div>
              <SiMysql />
              <h5>SQL</h5>
            </div>

            <div>
              <SiPostman />
              <h5>Postman</h5>
            </div>

            <div>
              <SiJavascript />
              <h5>Javascript</h5>
            </div>
            <div>
              <SiHtml5 />
              <h5>HTML</h5>
            </div>
            <div>
              <DiCss3 />
              <h5>CSS</h5>
            </div>
            <div>
              <FaReact />
              <h5>React</h5>
            </div>

            <div>
              <SiRedux />
              <h5>Redux</h5>
            </div>
            
            
            <div>
              <SiMaterialui />
              <h5>Material Ui</h5>
            </div>
            <div>
              <BsBootstrap />
              <h5>Bootstrap</h5>
            </div>
            <div>
              <VscGithub />
              <h5>Github</h5>
            </div>
          </div>
        </div>
      </>
    )
}
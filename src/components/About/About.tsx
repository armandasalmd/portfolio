import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import jsIcon from "../../assets/js-icon.svg";

import csharpIcon from "../../assets/csharp.png";
import figmaIcon from "../../assets/figma.png";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>I am a software engineer with a great passion for web development. My dream is to be a part of an important solution that would positively impact thousands of people's lives. I love software development because here I feel like a wizard that can create some magic 🌟.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>I am familiar with the most up to date technologies on various devices &amp; platforms. Mainly I develop websites and APIs using HTML, CSS, and TypeScript, .NET.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>I am a dedicated person chasing my own dreams, hardworking and results oriented, always seeking to achieve the best version of myself! One day I dream to visit Tomorrowland music festival 🧡.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={csharpIcon} alt="csharp" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={figmaIcon} alt="figma" />
          </ScrollAnimation>
          </div>
          
          
          
          


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src="/profile.jpg" alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}

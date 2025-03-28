import Socials from "/src/Components/Socials/Socials.jsx"
import linkedin from "/src/assets/linkedin.png"
import github from "/src/assets/github.png"
import instagram from "/src/assets/instagram.png"
import profilePic from "/src/assets/portrait.jpg"
import "./About.styles.css"
function About(){
    return (
        <section id="About">
            <div id="introduction">
                <div id="text">
                    <h1><b>Daniel Hernandez</b></h1>
                    <p>I’m a computer science graduate currently pursuing my M.S. in Computer Science at Florida International University, with a passion for artificial intelligence, cybersecurity, research, and building inclusive tech communities. 

                      Currently, I work as a Data Scientist at GoFans.AI, where I collaborate with cross-functional teams to embed AI-driven features into live products. 
                      Additionally currently, I am a Tech Lead for the Code Crunch Club, I lead workshops on data structures, AI, and software development, helping students thrive in interview prep and real-world coding scenarios.
                      I’ve also contributed to mentored research through the CAHSI Local REU program, focusing on vulnerabilities in generative AI.

                      From crafting intelligent NBA data applications to investigating AI model security, I’m driven by curiosity, impact, and the belief that tech should empower people. Dive into my journey of coding, leadership, and service!
                    </p>
                </div>
                <div id="social-links">
                    <Socials 
                      link="https://www.linkedin.com/in/daniel-hernandez-10203b24a"
                      label="LinkedIn"
                      image={linkedin}
                      alt="LinkedIn"/>
                    <Socials 
                      link="https://github.com/danez13"
                      label="GitHub"
                      image={github}
                      alt="GitHub"/>
                    <Socials 
                      link="https://www.instagram.com/cloverscript/?hl=en#"
                      label="Instagram"
                      image={instagram}
                      alt="Instagram"/>
                </div>
                <div id="learn-more-btn">
                    <a href="#learn-more" id="learn-more">Learn More</a>
                </div>
            </div>
            <div id="portrait">
                <img src={profilePic} alt="portrait Picture"></img>
            </div>
        </section>
    );
}

export default About
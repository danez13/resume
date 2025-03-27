import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

import PropTypes from "prop-types"

import './stylesheet.css'
import profilePic from './assets/portrait.jpg'
import linkedin from './assets/linkedin.png'
import github from "./assets/github.png"
import instagram from "./assets/instagram.png"
import basketball from "./assets/basketball.png"
import hacker from "./assets/hacker.png"
import plane from "./assets/plane.png"
import windows from "./assets/windows.png"
import mlhub from "./assets/hub.png"
import artificial_intelligence from "./assets/artificial-intelligence.png"


function Header(){
  const sections = [
    {title:"WELCOME", link:"#section1"},
    {title:"EDUCATION", link:"#section2"},
    {title:"SKILLS", link:"#section3"},
    {title:"EXPERIENCE", link:"#section4"},
    {title:"PROJECTS", link:"#section5"},
    {title:"HONORS", link:"#section6"},
    {title:"LEADERSHIP", link:"#section7"},
  ]

  const listItems = sections.map(section=><li key={section.title}><a href={section.link} className="nav-link">{section.title}</a></li>)
  return (
      <header>
          <nav className="navbar">
              <ul>
                {listItems}
              </ul>
          </nav>
      </header>
  );
}

function Socials({link="https://www.youtube.com/watch?v=dQw4w9WgXcQ",label="PlaceHolder",image="https://placehold.co/600x400",alt="PlaceHolder"}){
  return (
  <a href={link} aria-label={label}>
    <img src={image} alt={alt}></img>
  </a>
  );
}

Socials.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string
}

function Section1(){
    return (
        <section id="section1" className="section">
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
                      alt="GitHub"/>
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

function Education({school="Florida International University", degree="degree", graduated="Graduated"}){
  return (
    <div className="education" id="FIU">
        <h4>{school}</h4>
        <p>{degree}, <i>{graduated}</i></p>
    </div>
  )
}

Education.propTypes = {
  school: PropTypes.string,
  degree: PropTypes.string,
  graduated: PropTypes.string,
}

function Coursework(){
  const courses = ["Discrete Mathematics", "Data Structures and Algorithms", "Theory of Algorithms", "AI", "Machine Learning", "Database I", "Calculus I", "Calculus II", "Physics I", "Physics II", "Modern Physics"]
  const coursesString = courses.join(', ');
  return (
    <div className="education" id="RC">
        <h4>Relevant Coursework</h4>
        <p>{coursesString}</p>
    </div>
  );
}

function Section2(){
  return (
      <section id="section2" className="section">
          <h2>Education</h2>
          <Education
            degree="Bachelors of Science in Computer Science"
            graduated="December 2024"/>

          <Education 
            degree="Masters of Science in Computer Science"
            graduated="Expected December 2026"/>

          <Coursework />
      </section>
  );
}

function Skills({heading="Heading", contents=["stuff","more stuff", "even more stuff"]}){
  const contentsString = contents.join(", ")
  return (
    <div className="skills">
      <p><b>{heading}:</b> {contentsString}</p>
    </div>
  );
}

Skills.propTypes = {
  heading:PropTypes.string,
  isLibraries:PropTypes.bool,
  contents:PropTypes.arrayOf(PropTypes.string),
  libaries:PropTypes.arrayOf(PropTypes.string)
}

function Certifications({from="where", certs = [{title:"cert title", link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]}){
  const listCerts = certs.map(cert => <li key={cert.title}><a href={cert.link}>"{cert.title}"</a></li>)
  return(
    <div>
      <p><strong>{from}:</strong></p>
      <ul>
        {listCerts}
      </ul>
    </div>
  );
}

Certifications.propTypes = {
  from: PropTypes.string,
  certs: PropTypes.arrayOf(PropTypes.object)
}

function Section3(){
  const certificates = [
    {title:"Applied Machine Learning: Ensemble Learning",link:"https://www.linkedin.com/learning/certificates/871ef1105c35aa1b27bddc62d175bf5542a0e1664a9e3490371ffc21d54241dd?trk=public_profile_see-credential"},
    {title:"Introduction to Large Language Models",link:"https://www.linkedin.com/learning/certificates/bc6504cf78a9cc6ac842748c690be29f86cf7d0faba59fe77a51781f8051d892?trk=public_profile_see-credential"}
  ]
  return (
  <section id="section3" className="section">
    <h2>Skills & Technologies</h2>

    <Skills 
      heading="Soft Skills"
      contents={["Teamwork", "Time Management", "Communication", "Initiative", "Luck"]}/>

    <Skills 
      heading="Languages"
      contents={["Python","Java","C","C++","HTML","CSS","Batch","Bash","JavaScript"]}/>

    <div className="skills">
      <p><b>Libraries:</b> FastAPI<i>(Python)</i>, numpy<i>(Python)</i>, pandas<i>(Python)</i>, matplotlib<i>(Python)</i>, 
      scikit-learn<i>(Python)</i>, tensorflow<i>(Python)</i>, keras<i>(Python)</i>, requests<i>(Python)</i>, BeautifulSoup<i>(Python)</i>, 
      Transformer<i>(Python)</i>, Tokenizer<i>(Python)</i>, tqdm<i>(Python)</i>, Scipy<i>(Python)</i>, Torch<i>(Python)</i>, OpenGL<i>(C++)</i>, 
      React<i>(JavaScript)</i></p>
    </div>
    
    <Skills 
      heading="Tools"
      contents={["Netbeans", "PyCharm", "Visual Studio", "IntelliJ", "Git", "Google Cloud", "Microsoft Office", "AWS", "Docker"]}/>

    <div className="skills">
      
      \
      <Certifications
        from="LinkedIn Learning"
        certs={certificates}/>
    </div>
  </section>
  );
}

function Experience({title="Title",organization="Organization",location="Miami, FL",start="Present", end="Present",sub_head="sub-Head",description="description"}){
  return(
    <div className="experience">
      <h4>{title}</h4>
      <p>{organization}, {location} - <b>{start} - {end}</b></p>
      <ul>
        <li><p><b>{sub_head}:</b> {description}
          </p></li>
      </ul>
    </div>
  );
}

Experience.propTypes={
  title: PropTypes.string,
  organization: PropTypes.string,
  location: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  sub_head: PropTypes.string,
  description: PropTypes.string
}

function Section4 (){
  return (
  <section id="section4" className="section">
    <h2>Professional Experience</h2>

    <Experience 
      title="Student IT Lab Assistant / Helpdesk"
      organization="Nicole wertheim college of nursing"
      location="Miami, FL"
      start="August 2024"
      end="Present"
      sub_head="Responsabilities"
      description="Performs network troubleshooting on equipment, hardware, and repair. 
          Assists with coordinating minor IT-related projects in the NWCNHS. 
          Manages computer lab workstations, assisting with backup and recovery procedures for workstations. 
          Ensuring all PCs remain updated with security patches and are complying as set forth by the FIU Department of IT Security."/>

    <Experience 
      title="ML Engineer"
      organization="GoFans"
      location="Miami, FL"
      start="December 2024"
      end="Present"
      sub_head="tasks"
      description="Conducted A/B testing and fine-tuned models to enhance performance based on user feedback and app analytics.
          Collaborated cross-functionally with app developers, UX/UI designers, and product managers to integrate AI-driven features seamlessly into the app ecosystem.
          Utilized natural language processing (NLP) and computer vision methodologies to analyze multimodal data inputs (e.g., text, audio, images).
          Engineered a scalable pipeline for training, testing, and validating the emotion detection model, reducing development time."/>

    <Experience 
      title="Tech Lead"
      organization="CodeCrunch"
      location="Miami, FL"
      start="September 2024"
      end="Present"
      sub_head="Contributions"
      description="Coordinate weekly club events, Led marketing campaigns, Streamlined logistics for event planning, Collaborated with the executive team to foster a vibrant community. Organized and conducted workshops on topics such as Data Structures, Data Science and Artificial Intelligence, catering to diverse skill levels. Supervised technical projects and provided mentorship for members working on AI and data science applications."/>
  </section>
  );
}
function Project({icon="https://placehold.co/600x400",alt="PlaceHolder",hasDemo=false, demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ",title="Title",description="description",tech_stack=["Tech", "More Tech", "Even More Tech"],proj_link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}){
  const stackString = tech_stack.join(", ")
  return (
  <div className="project">
    <div className="project-icon"><img src={icon} alt={alt}></img></div>
    <div className="content">
      <h4>{title}</h4>
      <p>{description}</p>
      <p><b>Tech Stack:</b> {stackString}</p>
      <div className="button-group">
        <a href={proj_link} className="project-button"><b>VIEW PROJECT</b></a>
        {hasDemo?<a href={demoLink} className="project-button"><b>VIEW DEMO</b></a>:""}
      </div>
    </div>
  </div>
  );
}

Project.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tech_stack:PropTypes.arrayOf(PropTypes.string),
  proj_link: PropTypes.string,
  hasDemo:PropTypes.bool,
  demoLink:PropTypes.string
}

function Projects(){
  return(
    <div id="projects-container">
      <Project 
        icon={basketball}
        alt="basketball"
        title="CRRJD: Data Driven NBA Application" 
        hasDemo={true}
        demoLink="https://danez13-crrjd-data-driven-basetball-application-main-guwczn.streamlit.app/"
        description="the go for all things NBA statistics.
          focused to improve user experience, and effectiveness.
          with a customizeable interface, a user is able to look through information and analytics of every player in the NBA both active and all-time, 
          able to give users information of upcoming, past, and present games with information on where the game will be played. 
          an able to compare two players of the NBA and compare analytics between them."
          tech_stack={["streamlit", "nba api", "pandas"]}
          proj_link="https://github.com/danez13/CRRJD_data-driven-basetball-application"/>
      <Project 
        icon={mlhub}
        alt="Hub"
        title="ML Hub" 
        hasDemo={true}
        demoLink="https://danez13-ml-hub-main-k2dbtt.streamlit.app/"
        description="This platform is a comprehensive web-based solution designed for data scientists,
                    ML engineers, and researchers to streamline the process of managing datasets, building models, 
                    tracking experiments, and collaborating on machine learning projects. With an intuitive UI, robust backend,
                    and scalable architecture, it supports end-to-end machine learning workflows—from data preprocessing to model 
                    evaluation and versioning."
          tech_stack={["streamlit", "pandas", "scikit-learn"]}
          proj_link="https://github.com/danez13/ML-Hub"/>
      <Project 
        icon={hacker}
        alt="hacker" 
        title="Pantheon:All-in-one hacking tool"
        description="Pantheon is a versatile information-gathering and scanning tool designed to collect, analyze, and identify potential vulnerabilities in target systems. 
        It features two main modules: Information Gathering, which focuses on extracting data through website scraping (e.g., links, emails, site mapping), and Scanning, which conducts comprehensive port scans on a target system. 
        With customizable options such as page limits, detailed scraping, formatted output, and data storage, Pantheon offers flexibility and precision."
        tech_stack={["BeautifulSoup", "requests", "whois", "socket"]}
        proj_link="https://github.com/danez13/Pantheon-ALL-in-one-Hacking-Tool"/>
      <Project 
        icon={windows}
        alt="windows logo"
        title="Unified Write Filter Batch interface"
        description="runs microsoft Unified Write Filter (UWF) commands through a interface to make it easier for a user to run the commands.
        there are 6 Menus that are available from the starting menu, each menu presents a sub-interface for each sub-command available to the UWF commandline tool.
        each sub-menu offers each possible sub-command that the Unified Write Filter Manager tool (UWFMGR) has available."
        tech_stack={["Batch", "powershell", "drives", "system services and features"]}
        proj_link="https://github.com/danez13/UWF"/>
      <Project
        icon={artificial_intelligence}
        alt="artificial intelligence"
        title="XAI"
        description='an experimental review of the paper "A Diagnostic Study of Explainability Techniques for Text Classification".
        investigating the effectiveness and reliability of various explainability methods applied to text classification tasks.
        systematically evaluating popular techniques, such as attention mechanisms, saliency maps, and feature attribution methods, across diverse datasets and models.' 
        tech_stack={["numpy", "matplotlib", "torch", "tqdm", "captum", "lime", "nltk", "scikit-learn", "sentencepiece", "tokenizers", "torchvision", "transformers", "pandas", "fastparquet"]}
        proj_link="https://github.com/danez13/XAI"/>
      <Project
        icon={plane}
        alt="airplane"
        title="Air Craft Maintaince Classifier"
        description="Different techniques such as boosted ensembles, neural networks, and support vector machines are utilized to predict maintenance events. 
        The repository also provides data visualization tools to analyze engine performance and maintenance history. 
        It's designed to assist in predictive maintenance tasks by accurately identifying potential issues in aircraft before they lead to failures."
        tech_stack={["pandas", "numpy", "matplotlib", "scikit-learn", "keras", "tensorflow", "seaborn"]}
        proj_link="https://github.com/danez13/Air-Craft-Maintaince-Classifier" />
    </div>
  );
}

function Section5 (){
  return (
  <section id="section5" className="section">
    <h2>Projects</h2>
    <p>Here are some of the key projects I've worked on, demonstrating my skills and expertise in various domains</p>
    <Projects />
  </section>
  );
}

function Section6 (){
  return (
    <section id="section6" className="section">
    <h2>Leadership and Professional development</h2>
    <p>Here, you will find a detailed overview of the initiatives I have led or been a significant part of, showcasing my commitment to growth and excellence in both technical and leadership capacities.</p>
    <div className="development">
      <h4>Florida International University – Student Organizations</h4>
      <p>June 2020 - Present</p>
      <ul>
        <li> Active participant in technical workshops as an INIT Member, and supporting organizations like ALPFA FIU and SHPE FIU.</li>
      </ul>
    </div>

    <div className="development">
      <h4>Computing alliance of hispanic serving institutions undergraduate Research</h4>
      <p>September 2024 - June 2024</p>
      <ul>
        <li> 
          Conducted mentored research as part of the CAHSI Local REU program, and engaged in training to strengthen my computing, 
          communication, and professional skills. Created a research plan, maintained a journal to report on research progress. 
        </li>
        <li>
          <p>Researched projects included recreations of the following papers:</p>
          <ul>
            <li>TrojLLM: A Black-box Trojan Prompt Attack on Large Language Models</li>
            <li>TrojFSP: Trojan Insertion in Few-shot Prompt Tuning</li>
            <li>TrojText: Test-time Invisible Textual Trojan Insertion</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  );
}
function Footer(){
  return(
      <footer id="section7">
          <p>&copy; {new Date().getFullYear()} Daniel Hernandez</p>
      </footer>
  );
};

function Website() {
  return (
    <>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Website />
  </StrictMode>,
)

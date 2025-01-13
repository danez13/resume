import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheet.css'
import profilePic from './assets/portrait.jpg'
import linkedin from './assets/linkedin.png'
import github from "./assets/github.png"
import basketball from "./assets/basketball.png"
import hacker from "./assets/hacker.png"
import plane from "./assets/plane.png"
import windows from "./assets/windows.png"
import artificial_intelligence from "./assets/artificial-intelligence.png"
function Header(){
  return (
      <header>
          <nav className="navbar">
              <ul>
              <li><a href="#section1" className="nav-link">WELCOME</a></li>
              <li><a href="#section2" className="nav-link">EDUCATION</a></li>
              <li><a href="#section3" className="nav-link">SKILLS</a></li>
              <li><a href="#section4" className="nav-link">EXPERIENCE</a></li>
              <li><a href="#section5" className="nav-link">PROJECTS</a></li>
              <li><a href="#section6" className="nav-link">HONORS</a></li>
              <li><a href="#section7" className="nav-link">LEADERSHIP</a></li>
              </ul>
          </nav>
      </header>
  );
}

function Socials(props){
  return (
  <a href={props.link} aria-label={props.label}>
    <img src={props.image} alt={props.alt}></img>
  </a>
  );
}

function Section1(){
    return (
        <section id="section1" className="section">
            <div id="introduction">
                <div id="text">
                    <h1><b>Daniel Hernandez</b></h1>
                    <p>I’m a computer science student who is passionate about AI, cybersecurity, research, and community-building. 
                        As the <strong>Vice-president and tech lead of Code Crunch Club</strong>, I empower students to excel in technical interview preparation, 
                        Datascience/AI, and software development by fostering an inclusive and collaborative environment. 
                        Dive into my journey of coding, leadership, and community service!
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

function Education(props){
  return (
    <div className="education" id="FIU">
        <h4>{props.school}</h4>
        <p>{props.degree}, <i>{props.graduated}</i></p>
    </div>
  )
}

function Coursework(){
  return (
    <div className="education" id="RC">
        <h4>Relevant Coursework</h4>
        <p>Discrete Mathematics, Data Structures and Algorithms, Theory of Algorithms, AI, Machine Learning, Database I, Calculus I, Calculus II, Physics I, Physics II, Modern Physics </p>
    </div>
  );
}

function Section2(){
  return (
      <section id="section2" className="section">
          <h2>Education</h2>
          <Education 
            school="Florida International University"
            degree="Bachelors of Science in Computer Science"
            graduated="December 2024"/>

          <Education 
            school="Florida International University"
            degree="Masters of Science in Computer Science"
            graduated="Expected December 2026"/>

          <Coursework />
      </section>
  );
}

function Section3(){
  return (
  <section id="section3" className="section">
    <h2>Skills & Technologies</h2>
    <div className="skills">
      <p><b>Soft Skills:</b> Teamwork, Time Management, Communication</p>
    </div>
    <div className="skills">
      <p><b>Languages:</b> Python, Java, C, C++, HTML, CSS, Batch, Bash</p>
    </div>
    <div className="skills">
      <p><b>Libraries:</b> numpy<i>(Python)</i>, pandas<i>(Python)</i>, matplotlib<i>(Python)</i>, scikit-learn<i>(Python)</i>, tensorflow<i>(Python)</i>, keras<i>(Python)</i>, requests<i>(Python)</i>, BeautifulSoup<i>(Python)</i>, Transformer<i>(Python)</i>, Tokenizer<i>(Python)</i>, tqdm<i>(Python)</i>, Scipy<i>(Python)</i>, Torch<i>(Python)</i>, OpenGL<i>(C++)</i></p>
    </div>
    <div className="skills">
      <p><b>Tools:</b> Netbeans, PyCharm, Visual Studio, IntelliJ, Git, Google Cloud, Microsoft office</p>
    </div>
    <div className="skills">
      <p><b>Certifications:</b></p>
      <p><strong>linkedin learning:</strong></p>
      <ul>
        <li><a href="https://www.linkedin.com/learning/certificates/871ef1105c35aa1b27bddc62d175bf5542a0e1664a9e3490371ffc21d54241dd?trk=public_profile_see-credential">"Applied Machine Learning: Ensemble Learning"</a></li>
        <li><a href="https://www.linkedin.com/learning/certificates/bc6504cf78a9cc6ac842748c690be29f86cf7d0faba59fe77a51781f8051d892?trk=public_profile_see-credential">"Introduction to Large Language Models"</a></li>
      </ul>
    </div>
  </section>
  );
}

function Experience(props){
  return(
    <div className="experience">
      <h4>{props.title}</h4>
      <p>{props.organization}, {props.location} - <b>{props.time}</b></p>
      <ul>
        <li><p><b>{props.sub_head}:</b> {props.description}
          </p></li>
      </ul>
    </div>
  );
}

function Section4 (){
  return (
  <section id="section4" className="section">
    <h2>Professional Experience</h2>

    <Experience 
      title="Student IT Lab Assistant / Helpdesk"
      organization="Nicole wertheim college of nursing"
      location="Miami, FL"
      time="August 2024 - Present"
      sub_head="Responsabilities"
      description="Performs network troubleshooting on equipment, hardware, and repair. 
          Assists with coordinating minor IT-related projects in the NWCNHS. 
          Manages computer lab workstations, assisting with backup and recovery procedures for workstations. 
          Ensuring all PCs remain updated with security patches and are complying as set forth by the FIU Department of IT Security."/>

    <Experience 
      title="ML Engineer"
      organization="GoFans"
      location="Miami, FL"
      time="December 2024 - Present"
      sub_head="tasks"
      description="Conducted A/B testing and fine-tuned models to enhance performance based on user feedback and app analytics.
          Collaborated cross-functionally with app developers, UX/UI designers, and product managers to integrate AI-driven features seamlessly into the app ecosystem.
          Utilized natural language processing (NLP) and computer vision methodologies to analyze multimodal data inputs (e.g., text, audio, images).
          Engineered a scalable pipeline for training, testing, and validating the emotion detection model, reducing development time."/>

    <Experience 
      title="Vice President & Tech Lead"
      organization="CodeCrunch"
      location="Miami, FL"
      time="September 2024 - Present"
      sub_head="Contributions"
      description="Coordinate weekly club events, Led marketing campaigns, Streamlined logistics for event planning, Collaborated with the executive team to foster a vibrant community. Organized and conducted workshops on topics such as Data Structures, Data Science and Artificial Intelligence, catering to diverse skill levels. Supervised technical projects and provided mentorship for members working on AI and data science applications."/>
  </section>
  );
}
function Project(props){
  return (
  <div className="project">
    <div className="project-icon"><img src={props.icon} alt="basketball"></img></div>
    <div className="content">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p><b>Tech Stack:</b> {props.tech_stack}</p>
      <div className="button-group">
        <a href={props.proj_link} className="project-button"><b>VIEW PROJECT</b></a>
        <a href="https://danez13-crrjd-data-driven-basetball-application-main-guwczn.streamlit.app/" className="project-button"><b>VIEW DEMO</b></a>
      </div>
    </div>
  </div>
  );
}

function Projects(){
  return(
    <div id="projects-container">
      <Project 
        icon={basketball}
        title="CRRJD: Data Driven NBA Application" 
        description="the go for all things NBA statistics.
          focused to improve user experience, and effectiveness.
          with a customizeable interface, a user is able to look through information and analytics of every player in the NBA both active and all-time, 
          able to give users information of upcoming, past, and present games with information on where the game will be played. 
          an able to compare two players of the NBA and compare analytics between them."
          tech_stack="streamlit, nba api, pandas"
          proj_link="https://github.com/danez13/CRRJD_data-driven-basetball-application"/>
      <Project 
        icon={hacker} 
        title="Pantheon:All-in-one hacking tool"
        description="Pantheon is a versatile information-gathering and scanning tool designed to collect, analyze, and identify potential vulnerabilities in target systems. 
        It features two main modules: Information Gathering, which focuses on extracting data through website scraping (e.g., links, emails, site mapping), and Scanning, which conducts comprehensive port scans on a target system. 
        With customizable options such as page limits, detailed scraping, formatted output, and data storage, Pantheon offers flexibility and precision."
        tech_stack="BeautifulSoup, requests, whois, socket"
        proj_link="https://github.com/danez13/Pantheon-ALL-in-one-Hacking-Tool"/>
      <Project 
        icon={windows}
        title="Unified Write Filter Batch interface"
        description="runs microsoft Unified Write Filter (UWF) commands through a interface to make it easier for a user to run the commands.
        there are 6 Menus that are available from the starting menu, each menu presents a sub-interface for each sub-command available to the UWF commandline tool.
        each sub-menu offers each possible sub-command that the Unified Write Filter Manager tool (UWFMGR) has available."
        tech_stack="Batch, powershell, drives, system services and features"
        proj_link="https://github.com/danez13/UWF"
        />
      <Project
        icon={artificial_intelligence}
        title="XAI"
        description='an experimental review of the paper "A Diagnostic Study of Explainability Techniques for Text Classification".
        investigating the effectiveness and reliability of various explainability methods applied to text classification tasks.
        systematically evaluating popular techniques, such as attention mechanisms, saliency maps, and feature attribution methods, across diverse datasets and models.' 
        tech_stack="numpy, matplotlib, torch, tqdm, captum, lime, nltk, scikit-learn, sentencepiece, tokenizers, torchvision, transformers, pandas, fastparquet"
        proj_link="https://github.com/danez13/XAI"/>
      <Project
        icon={plane}
        title="Air Craft Maintaince Classifier"
        description="Different techniques such as boosted ensembles, neural networks, and support vector machines are utilized to predict maintenance events. 
        The repository also provides data visualization tools to analyze engine performance and maintenance history. 
        It's designed to assist in predictive maintenance tasks by accurately identifying potential issues in aircraft before they lead to failures."
        tech_stack="pandas, numpy, matplotlib, scikit-learn, keras, tensorflow, seaborn"
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
          <p>Researched projects included recreations of the following appers:</p>
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

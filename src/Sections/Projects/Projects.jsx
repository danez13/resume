import Project from "/src/Components/Project/Project.jsx"
import basketball from "/src/assets/basketball.png"
import hacker from "/src/assets/hacker.png"
import plane from "/src/assets/plane.png"
import windows from "/src/assets/windows.png"
import mlhub from "/src/assets/hub.png"
import artificial_intelligence from "/src/assets/artificial-intelligence.png"
import "./Projects.styles.css"
function Projects(){
    return(
        <section id="projects">
            <h2>Projects</h2>
            <p>Here are some of the key projects I've worked on, demonstrating my skills and expertise in various domains</p>
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
        </section>
    );
}
export default Projects
import Experience from "/src/Components/Experience/Experience.jsx"
import "./Experiences.styles.css"
function Experiences(){
    return (
      <section id="Experiences">
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
export default Experiences
import Skills from "/src/Components/Skills/Skills.jsx"
import Certifications from "/src/Components/Certifications/Certifications.jsx"
import "./SkillsTechs.styles.css"
function SkillsTechs(){
    return (
    <section id="SkillsTechs">
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
        
        <Certifications
          from="LinkedIn Learning"
          certs={[
            {title:"Applied Machine Learning: Ensemble Learning",link:"https://www.linkedin.com/learning/certificates/871ef1105c35aa1b27bddc62d175bf5542a0e1664a9e3490371ffc21d54241dd?trk=public_profile_see-credential"},
            {title:"Introduction to Large Language Models",link:"https://www.linkedin.com/learning/certificates/bc6504cf78a9cc6ac842748c690be29f86cf7d0faba59fe77a51781f8051d892?trk=public_profile_see-credential"}
          ]}/>
      </div>
    </section>
    );
}

export default SkillsTechs
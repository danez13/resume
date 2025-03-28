import Coursework from "/src/Components/Coursework/Coursework.jsx"
import Degree from "/src/Components/Degree/Degree.jsx"
import "./Education.styles.css"
function Education(){
    return (
        <section id="Education">
            <h2>Education</h2>
            <Degree
              school="Florida Internation University"
              degree="Bachelors of Science in Computer Science"
              graduated="December 2024"/>
  
            <Degree
              school="Florida Internation University"
              degree="Masters of Science in Computer Science"
              graduated="Expected December 2026"/>
  
            <Coursework 
                courses={["AI", "Machine Learning", "Database I","Discrete Mathematics", "Data Structures and Algorithms", 
                          "Theory of Algorithms", "Calculus I", "Calculus II", "Physics I", "Physics II", 
                          "Modern Physics", "Data Mining"]}/>
        </section>
    );
}
export default Education
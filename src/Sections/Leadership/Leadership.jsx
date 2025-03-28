import "./Leadership.styles.css"
function Leadership (){
    return (
      <section id="Leadership" className="section">
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
export default Leadership
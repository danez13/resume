import "./Skills.styles.css"
function Skills({heading="Heading", contents=["stuff","more stuff", "even more stuff"]}){
    const contentsString = contents.join(", ")
    return (
      <div className="skills">
        <p><b>{heading}:</b> {contentsString}</p>
      </div>
    );
}
export default Skills
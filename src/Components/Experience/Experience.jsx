import "./Experience.styles.css"
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
export default Experience
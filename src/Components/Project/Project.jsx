import "./Project.styles.css"
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
export default Project
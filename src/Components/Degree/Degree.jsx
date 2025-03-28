import "./Degree.styles.css"
function Degree({school="School", degree="degree", graduated="Graduated"}){
    return (
      <div className="education">
          <h4>{school}</h4>
          <p>{degree}, <i>{graduated}</i></p>
      </div>
    )
}

export default Degree
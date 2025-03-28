function Coursework({courses=[]}){
    const coursesString = courses.join(', ');
    return (
      <div className="education" id="RC">
          <h4>Relevant Coursework</h4>
          <p>{coursesString}</p>
      </div>
    );
}
export default Coursework
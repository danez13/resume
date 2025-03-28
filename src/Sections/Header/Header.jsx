import './Header.styles.css'
function Header(){
    const sections = [
      {title:"WELCOME", link:"#section1"},
      {title:"EDUCATION", link:"#section2"},
      {title:"SKILLS", link:"#section3"},
      {title:"EXPERIENCE", link:"#section4"},
      {title:"PROJECTS", link:"#section5"},
      {title:"HONORS", link:"#section6"},
      {title:"LEADERSHIP", link:"#section7"},
    ]
  
    const listItems = sections.map(section=><li key={section.title}><a href={section.link} className="nav-link">{section.title}</a></li>)
    return (
        <header>
            <nav id="navbar">
                <ul>
                  {listItems}
                </ul>
            </nav>
        </header>
    ); 
}
export default Header
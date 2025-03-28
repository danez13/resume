import './Header.styles.css'
function Header(){
    const sections = [
      {title:"HOME", link:"#About"},
      {title:"EDUCATION", link:"#Education"},
      {title:"SKILLS", link:"#SkillsTechs"},
      {title:"EXPERIENCE", link:"#Experiences"},
      {title:"PROJECTS", link:"#Projects"},
      {title:"LEADERSHIP", link:"#Leadership"},
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
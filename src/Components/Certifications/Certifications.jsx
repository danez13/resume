import "./Certifications.styles.css"
function Certifications({from="where", certs = [{title:"cert title", link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]}){
    const listCerts = certs.map(cert => <li key={cert.title}><a href={cert.link}>"{cert.title}"</a></li>)
    return(
      <div>
        <p><strong>{from}:</strong></p>
        <ul>
          {listCerts}
        </ul>
      </div>
    );
}
export default Certifications
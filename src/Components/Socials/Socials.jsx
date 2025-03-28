function Socials({link="https://www.youtube.com/watch?v=dQw4w9WgXcQ",label="PlaceHolder",image="https://placehold.co/600x400",alt="PlaceHolder"}){
    return (
        <a href={link} aria-label={label}>
            <img src={image} alt={alt}></img>
        </a>
    );
}
export default Socials
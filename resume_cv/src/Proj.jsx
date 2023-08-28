function Project(props){
    return(
    <div>
        <p className="heading">{props.heading}</p>
        <p>{props.title}</p>
        <p>{props.link}</p>
    </div>
    );
}
export default Project;
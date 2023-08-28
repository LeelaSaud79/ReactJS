function Project(props){
    return(
        <div className="project">
            <p className="heading">{props.heading}</p>
            {/* <p>{prop.title}</p> */}
            <p>{props.activity}</p>
            <p>{props.link}</p>
        </div>
    );
}
export default Project;
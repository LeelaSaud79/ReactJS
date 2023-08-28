function Experience(props) {
    return (
        <div className="experience">
            <p className="heading">{props.heading}</p>
            <p>{props.title}</p>
            <p>{props.activity}</p>
        </div>
    );
}
export default Experience;
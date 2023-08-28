function Education(props) {
    return (
        <div className="college">
            {/* <h4>Bachelors</h4> */}
            <p className="heading">{props.heading}</p>
            <p>{props.title}</p>
            <p>{props.activity}</p>

        </div>
    );
};
export default Education;
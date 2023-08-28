import Education from "./Education";
import Experience from "./Experience";
import Training from "./Training";
import Project from "./Project";

const cv = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center bg-dark">
                <div className="row box">
                    <div className="col-sm-5">
                        <div className="intro">
                            <h1>Leela Saud</h1>
                            <h5> Software Engineer</h5>
                        </div>
                        <div className="cont">
                            <h3>CONTACT</h3>
                            <hr />
                            <p><i className="fa-solid fa-phone"></i><a href="tel:9865874157"> Click to call</a></p>
                            <p><i className="fa-solid fa-location-dot"></i><a href="https://www.google.com/maps/place/Maitidevi,+Kathmandu+44600/@27.7055667,85.3292605,16z/data=!3m1!4b1!4m6!3m5!1s0x39eb199ffe9d7c6b:0x91b3a969f305a0bc!8m2!3d27.7051799!4d85.3349433!16s%2Fg%2F1td_w_tx?hl=en&entry=ttu"
                                target="_blank"> Maitidevi, Kathmandu</a></p>
                            <p><a href="mailto:"><i className="fa-regular fa-envelope"></i> Gmail</a></p>
                            <p><a href="https://www.linkedin.com/in/leela-saud-1010a924a/"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></p>
                            <p><a href="https://github.com/"><i className="fa-brands fa-square-github"></i> GitHub</a></p>
                        </div>
                        <div className="skill">
                            <h3>Skills</h3>
                            <hr />
                            <p> ⚫ Communication skills</p>
                            <p> ⚫ Analyzing, Observing</p>
                            <p> ⚫ Leadership</p>
                            <p> ⚫ Nepal/English Language</p>

                        </div>
                        <div className="reference">
                            <h3>REFERENCE</h3>
                            <hr />
                            <p className="heading">SHUSHIL SHRESTHA</p>
                            <p>GROWBYDATA | PRINCIPLE ENGINEER</p>
                            <p>98XXXX</p>
                            <p>sushilshrestha@growbydata.com</p>
                        </div>
                        <div className="button">
                        <a id="hire-button" href="mailto:leelasaud79@gmail.com">Click Here to Hire</a>

                            {/* <button id="hire-button">Click Here to Hire</button> */}
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="summary">
                            <h3>SUMMARY</h3>
                            <hr />
                            <p>Highly motivated and dedicated software student with a strong background in software development. Seeking
                                opportunities to apply and further enhance my skills in a dynamic and data-driven environment like
                                in yours. </p>
                        </div>
                        <br />

                        {/* for Education */}
                        <div>
                            <h3>EDUCATION</h3>
                            <hr />
                            <Education heading="Bachelor Degree" title="Padmakanya Multiple Campus (2019 -  present)" activity="Activity: Flutter, web Development" />
                            <Education heading="High School" title="Nast (2017 - 2019)" activity=" Activity: Volunteer, Basketabll Player" />
                        </div>
                        <br />

                        {/* For Experience */}

                        <div>
                            <h3>EXPERIENCE</h3>
                            <hr />
                            <Experience heading="Engineering Intern" title="GrowByData (May, 2023 - August, 2023)" activity=" Activity: Php Frontend Backend Google Analysis" />
                            <Experience heading="Solution Developer" title="Inspire Organization (September,2023 - present)" activity=" Activity: ReactJS DotNet MySql" />
                            <br />
                        </div>
                        <br />

                        {/* Training/Certifications */}
                        <div>
                            <h3>TRAINING/CERTIFICATIONS</h3>
                            <hr />
                            <Training heading="Web Development and Flutter" title="Padmakanya Multiple Campus" activity="Used Language: HTML CSS JD DART C++" />
                            <Training heading="Python and ML" title="Deerwalk Training Center" activity="Used Language: Python ML Dl" />
                        </div>
                        <br />

                        {/* PROJECTS INVOLVED */}
                        <div>
                            <h3>PROJECTS INVOLVED</h3>
                            <hr />
                            <Project heading="Ecommerce project" activity="Language: PHP Backend MYsql" />
                            <Project heading="Machine Learning Project" activity="Language: PYTHON Machine Learning,Deep Learning " />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default cv;
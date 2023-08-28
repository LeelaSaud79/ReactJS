
import Train from './Train'
import Education from './Edu'
import Project from './Proj/'

const Resume = () => {
    return (
        <>
            {/* <div className="container-fluid d-flex justify-content-center "> */}
            {/* <div className="row box"> */}
            <div className="main">
                <div className="intro">
                    <h1>Leela Saud</h1>
                    <h5>Software Engineering | Data Engineering</h5>
                </div>

                {/* COntacts */}
                <div className="contact">
                    <h5>CONTACT INFORMATION</h5>
                    <hr />
                    <p><i class="fa-solid fa-location-dot"></i><a href="https://goo.gl/maps/oKWFs2kzC6Hj8VHf6"> Maitidevi, Kathmandu</a></p>
                    <p><i class="fa-solid fa-phone"></i><a href="tel: 9865874157"> Click here to call</a></p>
                    <p><i class="fa-regular fa-envelope"></i><a href="mailto: leelasaud79@gmail.com"> Gmail</a></p>
                    <p><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/leela-saud-1010a924a/">LinkedIn</a></p>
                    <p><i class="fa-brands fa-github"></i><a href="https://github.com/LeelaSaud79">GitHub</a></p>
                </div>

                {/* Summary */}
                <div className="summary">
                    <h3>About me</h3>
                    <hr />
                    <p>Highly motivated and dedicated data engineering student with a strong background in data
                        management and analysis. Skilled in various aspects of data engineering, including data integration,
                        data modeling, and data warehousing.</p>
                </div>

                {/* Experience */}
                <div className="exp">
                    <h3>EXPERIENCE</h3>
                    <hr />
                    <h5>GrowByData</h5>
                    <h6>Engineering Intern(May 2023 - August 2023)</h6>
                    <p>PHP, MYSQL, BACKEND, GOOGLE ANALYSIS</p>
                </div>

                {/* Skills */}
                <div className="skills">
                    <h3>Skills</h3>
                    <hr />
                    <p>* Analysizing</p>
                    <p>* Communication Skills</p>
                    <p>* Leadership skill</p>
                    <p>* Problem Solving</p>
                    <p>* English and Nepali Language</p>

                </div>

                {/* For Traing and certifications */}
                <div className="train">
                    <h3>TRAINING / CERTIFICATIONS </h3>
                    <hr />
                    <Train heading="Deerwalk Training Center" title="Trainee (MAY 2022 - August 2022)" learn="Python, Machine Learning, Deep Learning" />
                    <Train heading="Padmakanya Multiple Campus" title="Web Development, Flutter" learn="HTML, CSS, JS, DART" />
                </div>

                {/* Education  */}
                <div className='education'>
                    <h3>Education</h3>
                    <hr />
                    <Education heading="Padmakanya Multiple Campus, Bagbazar, Kathamandu" title="Bachelors (2019 - present)" />
                    <Education heading="NAST, Dhangadhi " title="High School(2017 - 2019)" />
                </div>


                {/* Recent Projects */}
                <div className="proj">
                    <h3>Projects</h3>
                    <hr />
                    <Project heading="A Dynamic ecommerce project" title="PHP, MYsql, HTML, CSS, JS, Google Analysis" Github link="https://github.com/LeelaSaud79/Php_mysql/tree/master/frontend/cover" />
                    <Project heading="A Machine Learning Project" title="Python, ML, DL" Github link="https://github.com/LeelaSaud79/Php_mysql/tree/master/frontend/cover" />


                </div>
            </div>

        </>
    )
}
export default Resume;

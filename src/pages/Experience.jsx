import './style.css';

export function Experience() {
  return (
    <div id="experience" className="container-fluid">
      <h2 className="mb-5">
        <span className="text-danger">My</span> Profile
      </h2>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="mt-2">
                <h4>Achievements</h4>
                <span className="line"></span>
              </div>
            </div>
            <div className="card-body">
              <h6 className="title text-danger">
                National Conference Paper Presentation
              </h6>
              <p>AI in Health Care</p>
              <p className="subtitle">
                Presented paper titled "Impact of Artificial Intelligence on
                Healthcare" at national level conference
              </p>
              <hr />
              <h6 className="title text-danger">YRC Volunteer</h6>
              <p>Volunteering service</p>
              <p className="subtitle">
                80 hours of volunteering and community service as part of the
                Youth Red Cross Foundation
              </p>
              <hr />
              <h6 className="title text-danger">CLEF task 2023 </h6>
              <p>MEDIQA-Sum 2023 Task & Paper Presentation</p>
              <p className="subtitle">
                Developed a model for summarizing doctor-patient dialogue
                summarization using Machine Learning techniques and ranked 10
                internationally
              </p>
              <hr />
              <h6 className="title text-danger">NPTEL Course Completion</h6>
              <p>Discrete Structures</p>
              <p className="subtitle">
                Completed 12-week course offered by IIT Kharagpur on the topic "Discrete Structures"
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="mt-2">
                <h4>Education</h4>
                <span className="line"></span>
              </div>
            </div>
            <div className="card-body">
              <h6 className="title text-danger">2020 - Present</h6>
              <p>B.E Computer Engineering</p>
              <p className="subtitle">
                Sri Sivasubramaniya Nadar College of Engineering
              </p>
              <hr />
              <h6 className="title text-danger">2014 - 2020</h6>
              <p>High School Degree</p>
              <p className="subtitle">
                Padma Seshadri Bala Bhavan Senior Secondary School
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="pull-left">
                <h4 className="mt-2">Skills</h4>
                <span className="line"></span>
              </div>
            </div>
            <div className="card-body pb-2">
              <h6>HTML & CSS</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '97%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>JavaScript</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '85%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>Python</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '80%' }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>SQL</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '90%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>NodeJS</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '70%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>ReactJS</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '70%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

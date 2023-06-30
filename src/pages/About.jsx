import './style.css';

export function About() {
  return (
    <div className="container-fluid">
      <div id="about" className="row about-section">
        <div className="col-lg-4 about-card ">
          <h3 className="font-weight-light">Who am I ?</h3>
          <span className="line mb-5"></span>
          <h5 className="mb-3">Aspiring Computer Engineer</h5>
          <p className="mt-20">
            I am immensely passionate about the field of Artificial Intelligence
            and Machine Learning. From a very young age, I have been fascinated
            with computers and things which work on their own with no human
            interference. This interest was nurtured into something substantial,
            and now I am keen to make an impact in the domain. I am currently
            working on a couple of projects to strengthen my foundation in the
            field of AI/ML. These include a CNN-based model to identify oral
            squamous cell carcinoma from images, and facial expression detection
            application. I aspire to pursue my Masters in Computer Science
            abroad, in the United States of America.
          </p>
        </div>
        
        <div className="col-lg-4 about-card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div>
   
    
    <img src="https://drive.google.com/uc?id=1kUzhBJByXO0zyuNnTMSwoYyH2UbPIgXV" alt="My Image" style={{ width: '600px', height: 'auto' }} />
  </div>
</div>
        
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">My Expertise</h3>
          <span className="line mb-5"></span>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-widget icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Machine Learning Models</h6>
              <p className="subtitle">
                Linear SVC, Convolutional Neural Networks.
              </p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-paint-bucket icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Web Development</h6>
              <p className="subtitle">HTML, CSS, JS, React, NodeJS.</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-stats-up icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Data Processing</h6>
              <p className="subtitle">MS Word, PowerPoint, Excel.</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-widget icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Database Management & Data Storage</h6>
              <p className="subtitle">SQL, MongoDB, XML</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

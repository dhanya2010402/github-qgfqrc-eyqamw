export function Projects() {
  return (
    <div id="projects" className="col-lg-4">
      <div className="contact-info-card">
        <h4 className="contact-title">Get in touch</h4>
        <div className="row mb-2">
          <div className="col-1 pt-1 mr-1">
            <i className="ti-mobile icon-md"></i>
          </div>
          <div className="col-10 ">
            <h6 className="d-inline">
              Phone: <br />{' '}
              <span className="text-muted">+ (91) 9840609502</span>
            </h6>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1 pt-1 mr-1">
            <i className="ti-map-alt icon-md"></i>
          </div>
          <div className="col-10">
            <h6 className="d-inline">
              Address:
              <br />{' '}
              <span className="text-muted">
                B2, Raja Street, Kalyani Nagar, Kottivakkam.
              </span>
            </h6>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1 pt-1 mr-1">
            <i className="ti-envelope icon-md"></i>
          </div>
          <div className="col-10">
            <h6 className="d-inline">
              Email:
              <br /> <span className="text-muted">dhannukrish@gmail.com</span>
            </h6>
          </div>
        </div>
      </div>
      <footer className="text-white " style={{
          background:
            'linear-gradient(45deg,#8B123F, #9A1D41  , #9A1D68  , #881477  , #560D6C)',
        }} >
            © 2023 Dhanya Krishnan. All rights reserved
        </footer>
    </div>
  );
}

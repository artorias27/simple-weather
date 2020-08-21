import React from "react";

function CheckForm() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-12 col-md-6 col-xs-8 mx-auto wrapper">
          <div className="form-group">
            <input name="email" type="text" className="form-control" placeholder="Type City Name..." />
            {/* <p className="invalid-feedback">
              Please enter a message in the textarea.
            </p> */}
          </div>
          <button type="button" className="btn btn-outline-secondary mr-4 btn-small">
            Check
          </button>
          <button type="button" className="btn btn-outline-secondary btn-small">
            Find me
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CheckForm;

import React from "react";

function CheckForm() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6 mx-auto wrapper">
          <div className="form-group">
            <input name="email" type="text" className="form-control" placeholder="Type City Name..." />
            <p className="invalid-feedback">
              Please enter a message in the textarea.
            </p>
          </div>
          <button type="button" className="btn btn-dark mr-4">
            Check
          </button>
          <button type="button" className="btn btn-dark">
            Check By Your location
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CheckForm;

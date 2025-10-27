import React from 'react';

const SuccessMessage = ({ applicationId }) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-4 text-center">
            <div className="card-body p-5">
              <div className="mb-4">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
              </div>
              <h2 className="fw-bold text-success mb-3">Application Submitted Successfully!</h2>
              <p className="text-muted mb-4">Your loan application has been received and is under review.</p>
              
              <div className="bg-light p-4 rounded-3 mb-4">
                <p className="text-muted small mb-2">Your Application ID</p>
                <h4 className="fw-bold text-primary">{applicationId}</h4>
              </div>

              <p className="text-muted small">
                We will review your application and get back to you within 24-48 hours. 
                You will receive updates via email and SMS.
              </p>

              <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>
                View My Applications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
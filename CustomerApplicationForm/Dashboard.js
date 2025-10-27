import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const Dashboard = ({ username, onStartNewApplication }) => {
  const [applications, setApplications] = useState([
    {
      applicationId: 'SCB2024ABC123XYZ',
      loanType: 'home',
      loanAmount: 4500000,
      loanTenure: 240,
      fullName: 'Sam Daniel',
      fatherName: 'Daniel Sam',
      email: 'daniel@email.com',
      mobile: '9876543210',
      pan: 'ABCDE1234F',
      aadhaar: '1234-5678-9012',
      dob: '1990-05-15',
      gender: 'male',
      maritalStatus: 'married',
      educationLevel: 'postgraduate',
      currentAddress: '123, MG Road, Bangalore',
      currentCity: 'Bangalore',
      currentPincode: '560001',
      employmentType: 'salaried',
      companyName: 'Tech Solutions Pvt Ltd',
      designation: 'Senior Software Engineer',
      totalExperience: 8,
      monthlyIncome: 120000,
      status: 'Under Review',
      submittedDate: '2024-10-10',
      statusColor: 'warning',
      termsAccept: true
    },
    {
      applicationId: 'SCB2024DEF456ABC',
      loanType: 'personal',
      loanAmount: 500000,
      loanTenure: 36,
      fullName: 'Jiya Patel',
      fatherName: 'Jayath Patel',
      email: 'priya.sharma@email.com',
      mobile: '9876543211',
      pan: 'BCDEF2345G',
      aadhaar: '2345-6789-0123',
      dob: '1985-08-20',
      gender: 'female',
      maritalStatus: 'single',
      educationLevel: 'undergraduate',
      currentAddress: '456, Park Street, Mumbai',
      currentCity: 'Mumbai',
      currentPincode: '400001',
      employmentType: 'self-employed',
      businessName: 'Fashion Boutique',
      businessType: 'Retail',
      yearsInBusiness: 5,
      monthlyIncome: 80000,
      status: 'Approved',
      submittedDate: '2024-09-25',
      statusColor: 'success',
      termsAccept: true
    },
    {
      applicationId: 'SCB2024GHI789DEF',
      loanType: 'vehicle',
      loanAmount: 800000,
      loanTenure: 60,
      fullName: 'Amit Patel',
      fatherName: 'Vijay Patel',
      email: 'amit.patel@email.com',
      mobile: '9876543212',
      pan: 'CDEFG3456H',
      aadhaar: '3456-7890-1234',
      dob: '1992-12-10',
      gender: 'male',
      maritalStatus: 'married',
      educationLevel: 'diploma',
      currentAddress: '789, Gandhi Nagar, Delhi',
      currentCity: 'Delhi',
      currentPincode: '110001',
      employmentType: 'salaried',
      companyName: 'Auto Parts Co',
      designation: 'Sales Manager',
      totalExperience: 6,
      monthlyIncome: 95000,
      status: 'Rejected',
      submittedDate: '2024-10-05',
      statusColor: 'danger',
      termsAccept: true
    }
  ]);

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getStatusBadge = (status, color) => {
    return <span className={`badge bg-${color}`}>{status}</span>;
  };

  const handleViewDetails = (app) => {
    setSelectedApplication(app);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-vh-100 bg-light" style={{ paddingTop: '80px' }}>
        <div className="container py-5">
          
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm" style={{ 
                background: '#0473EA ',
                borderRadius: '16px'
              }}>
                <div className="card-body p-5 text-white">
                  <h1 className="fw-bold mb-3">Hi, {username}! </h1>
                  <p className="mb-0 fs-5">Welcome back to your Standard Chartered Loan Portal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-60">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">                    
                    <div>
                      <h5 className="fw-bold mb-0">About Us</h5>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    Standard Chartered is a leading international banking group with over 150 years of experience in providing financial solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-60">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">                    
                    <div>
                      <h5 className="fw-bold mb-0">Our Loans</h5>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    We offer competitive rates on Home Loans, Personal Loans, and Vehicle Loans with flexible tenure options from 12 to 120 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-60">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">                    
                    <div>
                      <h5 className="fw-bold mb-0">Quick Process</h5>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    Get instant approval with minimal documentation. Our digital process ensures your loan is processed in 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h3 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>My Loan Applications</h3>
                      <p className="text-muted mb-0">Track and manage your loan applications</p>
                    </div>
                    <button 
                      className="btn btn-primary btn-lg"
                      onClick={onStartNewApplication}
                      style={{
                        borderRadius: '12px',
                        transition: 'all 0.3s ease'
                      }}                      
                    >
                      + Apply for New Loan
                    </button>
                  </div>

                  {applications.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-hover align-middle">
                        <thead className="table-light">
                          <tr>
                            <th className="fw-semibold">Application ID</th>
                            <th className="fw-semibold">Loan Type</th>
                            <th className="fw-semibold">Loan Amount</th>
                            <th className="fw-semibold">Status</th>
                            <th className="fw-semibold">Submitted Date</th>
                            <th className="fw-semibold">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {applications.map((app, index) => (
                            <tr key={index}>
                              <td>
                                <span className="font-monospace small">{app.applicationId}</span>
                              </td>
                              <td className="fw-semibold text-capitalize">{app.loanType}</td>
                              <td>₹{app.loanAmount.toLocaleString('en-IN')}</td>
                              <td>
                                {getStatusBadge(app.status, app.statusColor)}
                              </td>
                              <td>{new Date(app.submittedDate).toLocaleDateString('en-IN', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}</td>
                              <td>
                                <button 
                                  className="btn btn-sm btn-outline-primary me-2"
                                  onClick={() => handleViewDetails(app)}
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-5">
                      <div style={{ fontSize: '4rem', opacity: 0.3 }}>📋</div>
                      <h5 className="text-muted mt-3">No Applications Yet</h5>
                      <p className="text-muted">Start your loan application journey today!</p>
                      <button 
                        className="btn btn-primary mt-3"
                        onClick={onStartNewApplication}
                      >
                        Apply for Your First Loan
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && selectedApplication && (
        <>
          <div 
            className="modal fade show" 
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={handleCloseModal}
          >
            <div 
              className="modal-dialog modal-xl modal-dialog-scrollable"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content" style={{ borderRadius: '16px' }}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold">Application Details</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body p-4">
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                      Loan Details
                    </h5>
                    <div className="row g-3">
                      <div className="col-md-3">
                        <div className="text-muted small">Application ID</div>
                        <div className="fw-semibold font-monospace">{selectedApplication.applicationId}</div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-muted small">Loan Type</div>
                        <div className="fw-semibold text-capitalize">{selectedApplication.loanType}</div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-muted small">Loan Amount</div>
                        <div className="fw-semibold">₹{selectedApplication.loanAmount.toLocaleString('en-IN')}</div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-muted small">Tenure</div>
                        <div className="fw-semibold">{selectedApplication.loanTenure} months</div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-muted small">Status</div>
                        <div>{getStatusBadge(selectedApplication.status, selectedApplication.statusColor)}</div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-muted small">Submitted Date</div>
                        <div className="fw-semibold">
                          {new Date(selectedApplication.submittedDate).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                      Personal Information
                    </h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="text-muted small">Full Name</div>
                        <div className="fw-semibold">{selectedApplication.fullName}</div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-muted small">Father's Name</div>
                        <div className="fw-semibold">{selectedApplication.fatherName}</div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-muted small">Date of Birth</div>
                        <div className="fw-semibold">{selectedApplication.dob}</div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-muted small">Gender</div>
                        <div className="fw-semibold text-capitalize">{selectedApplication.gender}</div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-muted small">Marital Status</div>
                        <div className="fw-semibold text-capitalize">{selectedApplication.maritalStatus}</div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-muted small">Email</div>
                        <div className="fw-semibold">{selectedApplication.email}</div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-muted small">Mobile</div>
                        <div className="fw-semibold">{selectedApplication.mobile}</div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-muted small">PAN Number</div>
                        <div className="fw-semibold">{selectedApplication.pan}</div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-muted small">Aadhaar Number</div>
                        <div className="fw-semibold">{selectedApplication.aadhaar}</div>
                      </div>
                      <div className="col-12">
                        <div className="text-muted small">Address</div>
                        <div className="fw-semibold">
                          {selectedApplication.currentAddress}, {selectedApplication.currentCity} - {selectedApplication.currentPincode}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                      Employment Details
                    </h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="text-muted small">Employment Type</div>
                        <div className="fw-semibold text-capitalize">{selectedApplication.employmentType}</div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-muted small">Monthly Income</div>
                        <div className="fw-semibold">₹{selectedApplication.monthlyIncome.toLocaleString('en-IN')}</div>
                      </div>
                      
                      {selectedApplication.employmentType === 'salaried' && (
                        <>
                          <div className="col-md-6">
                            <div className="text-muted small">Company Name</div>
                            <div className="fw-semibold">{selectedApplication.companyName}</div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-muted small">Designation</div>
                            <div className="fw-semibold">{selectedApplication.designation}</div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-muted small">Total Experience</div>
                            <div className="fw-semibold">{selectedApplication.totalExperience} years</div>
                          </div>
                        </>
                      )}
                      
                      {selectedApplication.employmentType === 'self-employed' && (
                        <>
                          <div className="col-md-6">
                            <div className="text-muted small">Business Name</div>
                            <div className="fw-semibold">{selectedApplication.businessName}</div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-muted small">Business Type</div>
                            <div className="fw-semibold">{selectedApplication.businessType}</div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-muted small">Years in Business</div>
                            <div className="fw-semibold">{selectedApplication.yearsInBusiness} years</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={`alert alert-${selectedApplication.statusColor} border-0 mb-0`}>
                    <div className="d-flex align-items-center">
                      <div className="me-3" style={{ fontSize: '1.5rem' }}>
                        {selectedApplication.status === 'Approved' }
                        {selectedApplication.status === 'Under Review' }
                        {selectedApplication.status === 'Rejected'}
                      </div>
                      <div>
                        <strong>Application Status: {selectedApplication.status}</strong>
                        <div className="small mt-1">
                          {selectedApplication.status === 'Approved' && 'Your loan has been approved! We will contact you shortly.'}
                          {selectedApplication.status === 'Under Review' && 'Your application is being reviewed by our team. We will update you within 24-48 hours.'}
                          {selectedApplication.status === 'Rejected' && 'Unfortunately, your application was not approved. Please contact support for more details.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button 
                    type="button" 
                    className="btn btn-secondary px-4"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
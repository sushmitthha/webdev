import React from 'react';

const ReviewSubmitStep = ({ 
  formData, 
  documents, 
  existingLoans, 
  references, 
  handleInputChange, 
  handleSubmit, 
  onPrev 
}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
            Review & Submit
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Please review your information before submitting
          </p>
        </div>

        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
            
            <div className="mb-5">
              <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                Loan Details
              </h4>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="text-muted small">Loan Type</div>
                  <div className="fw-semibold text-capitalize">{formData.loanType || 'N/A'}</div>
                </div>
                <div className="col-md-4">
                  <div className="text-muted small">Loan Amount</div>
                  <div className="fw-semibold">₹{formData.loanAmount ? parseInt(formData.loanAmount).toLocaleString('en-IN') : 'N/A'}</div>
                </div>
                <div className="col-md-4">
                  <div className="text-muted small">Tenure</div>
                  <div className="fw-semibold">{formData.loanTenure || 'N/A'} months</div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                Personal Information
              </h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="text-muted small">Full Name</div>
                  <div className="fw-semibold">{formData.fullName || 'N/A'}</div>
                </div>
                <div className="col-md-6">
                  <div className="text-muted small">Father's Name</div>
                  <div className="fw-semibold">{formData.fatherName || 'N/A'}</div>
                </div>
                <div className="col-md-4">
                  <div className="text-muted small">Date of Birth</div>
                  <div className="fw-semibold">{formData.dob || 'N/A'}</div>
                </div>
                <div className="col-md-4">
                  <div className="text-muted small">Gender</div>
                  <div className="fw-semibold text-capitalize">{formData.gender || 'N/A'}</div>
                </div>
                <div className="col-md-4">
                  <div className="text-muted small">Marital Status</div>
                  <div className="fw-semibold text-capitalize">{formData.maritalStatus || 'N/A'}</div>
                </div>
                <div className="col-md-6">
                  <div className="text-muted small">Email</div>
                  <div className="fw-semibold">{formData.email || 'N/A'}</div>
                </div>
                <div className="col-md-6">
                  <div className="text-muted small">Mobile</div>
                  <div className="fw-semibold">{formData.mobile || 'N/A'}</div>
                </div>
                <div className="col-md-6">
                  <div className="text-muted small">PAN Number</div>
                  <div className="fw-semibold">{formData.pan || 'N/A'}</div>
                </div>
                <div className="col-md-6">
                  <div className="text-muted small">Aadhaar Number</div>
                  <div className="fw-semibold">{formData.aadhaar || 'N/A'}</div>
                </div>
                <div className="col-12">
                  <div className="text-muted small">Current Address</div>
                  <div className="fw-semibold">{formData.currentAddress || 'N/A'}, {formData.currentCity || 'N/A'} - {formData.currentPincode || 'N/A'}</div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                Employment Details
              </h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="text-muted small">Employment Type</div>
                  <div className="fw-semibold text-capitalize">{formData.employmentType || 'N/A'}</div>
                </div>
                <div className="col-md-6">
                  <div className="text-muted small">Monthly Income</div>
                  <div className="fw-semibold">₹{formData.monthlyIncome ? parseInt(formData.monthlyIncome).toLocaleString('en-IN') : 'N/A'}</div>
                </div>
                
                {formData.employmentType === 'salaried' && (
                  <>
                    <div className="col-md-6">
                      <div className="text-muted small">Company Name</div>
                      <div className="fw-semibold">{formData.companyName || 'N/A'}</div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-muted small">Designation</div>
                      <div className="fw-semibold">{formData.designation || 'N/A'}</div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-muted small">Total Experience</div>
                      <div className="fw-semibold">{formData.totalExperience || 'N/A'} years</div>
                    </div>
                  </>
                )}
                
                {formData.employmentType === 'self-employed' && (
                  <>
                    <div className="col-md-6">
                      <div className="text-muted small">Business Name</div>
                      <div className="fw-semibold">{formData.businessName || 'N/A'}</div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-muted small">Business Type</div>
                      <div className="fw-semibold">{formData.businessType || 'N/A'}</div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-muted small">Years in Business</div>
                      <div className="fw-semibold">{formData.yearsInBusiness || 'N/A'} years</div>
                    </div>
                  </>
                )}
                
                {formData.existingEmi && (
                  <div className="col-md-6">
                    <div className="text-muted small">Existing EMI</div>
                    <div className="fw-semibold">₹{parseInt(formData.existingEmi).toLocaleString('en-IN')}</div>
                  </div>
                )}
              </div>
            </div>

            {existingLoans && existingLoans.length > 0 && (
              <div className="mb-5">
                <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                  Existing Loans
                </h4>
                {existingLoans.map((loan, index) => (
                  <div key={index} className="card bg-light mb-2">
                    <div className="card-body p-3">
                      <div className="row g-2 small">
                        <div className="col-md-3">
                          <div className="text-muted">Type</div>
                          <div className="fw-semibold">{loan.loanType}</div>
                        </div>
                        <div className="col-md-3">
                          <div className="text-muted">Lender</div>
                          <div className="fw-semibold">{loan.lender}</div>
                        </div>
                        <div className="col-md-3">
                          <div className="text-muted">Outstanding</div>
                          <div className="fw-semibold">₹{parseInt(loan.outstandingAmount).toLocaleString('en-IN')}</div>
                        </div>
                        <div className="col-md-3">
                          <div className="text-muted">EMI</div>
                          <div className="fw-semibold">₹{parseInt(loan.emi).toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {references && references.length > 0 && (
              <div className="mb-5">
                <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                  References
                </h4>
                {references.map((reference, index) => (
                  <div key={index} className="card bg-light mb-2">
                    <div className="card-body p-3">
                      <div className="row g-2 small">
                        <div className="col-md-4">
                          <div className="text-muted">Name</div>
                          <div className="fw-semibold">{reference.name}</div>
                        </div>
                        <div className="col-md-3">
                          <div className="text-muted">Relationship</div>
                          <div className="fw-semibold">{reference.relationship}</div>
                        </div>
                        <div className="col-md-3">
                          <div className="text-muted">Contact</div>
                          <div className="fw-semibold">{reference.contactNumber}</div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-muted">Address</div>
                          <div className="fw-semibold">{reference.address}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mb-4">
              <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1a1a1a' }}>
                Uploaded Documents
              </h4>
              
              <div className="row g-2">
                {documents.photo && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Passport Photo</div>
                        <div className="fw-semibold small">{documents.photo.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.idProof && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">ID Proof</div>
                        <div className="fw-semibold small">{documents.idProof.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.addressProof && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Address Proof</div>
                        <div className="fw-semibold small">{documents.addressProof.name}</div>
                      </div>
                    </div>
                  </div>
                )}

                {documents.employmentProof && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Employment Proof</div>
                        <div className="fw-semibold small">{documents.employmentProof.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.salarySlips && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Salary Slips</div>
                        <div className="fw-semibold small">{documents.salarySlips.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.businessProof && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Business Proof</div>
                        <div className="fw-semibold small">{documents.businessProof.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.gstCertificate && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">GST Certificate</div>
                        <div className="fw-semibold small">{documents.gstCertificate.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.itrDocuments && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">ITR Documents</div>
                        <div className="fw-semibold small">{documents.itrDocuments.name}</div>
                      </div>
                    </div>
                  </div>
                )}

                {documents.saleAgreement && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Sale Agreement</div>
                        <div className="fw-semibold small">{documents.saleAgreement.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.evaluationCertificate && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Evaluation Certificate</div>
                        <div className="fw-semibold small">{documents.evaluationCertificate.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.dealerInvoice && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Dealer Invoice</div>
                        <div className="fw-semibold small">{documents.dealerInvoice.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {documents.dealerQuotation && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <div>
                        <div className="small text-muted">Dealer Quotation</div>
                        <div className="fw-semibold small">{documents.dealerQuotation.name}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="form-check mb-4 p-3 bg-light rounded">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsAccept"
                name="termsAccept"
                checked={formData.termsAccept}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="termsAccept">
                I hereby declare that the information provided is true and accurate. I accept the
                terms and conditions and authorize Standard Chartered Bank to verify my information and process my loan application.
              </label>
            </div>

            <div className="d-flex gap-3 mt-4">
              <button 
                className="btn btn-outline-secondary btn-lg flex-fill py-3"
                onClick={onPrev}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Back
              </button>
              <button 
                className="btn btn-success btn-lg flex-fill py-3"
                onClick={handleSubmit}
                disabled={!formData.termsAccept}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (formData.termsAccept) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(25, 135, 84, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmitStep;
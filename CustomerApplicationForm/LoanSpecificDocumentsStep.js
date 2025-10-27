import React, { useState } from 'react';

const LoanSpecificDocumentsStep = ({ formData, handleInputChange, onNext, onPrev }) => {
  const [loanDocuments, setLoanDocuments] = useState({
    saleAgreement: null,
    evaluationCertificate: null,
    dealerInvoice: null,
    dealerQuotation: null
  });

  const [existingLoans, setExistingLoans] = useState([]);
  const [showAddLoan, setShowAddLoan] = useState(false);
  const [currentLoan, setCurrentLoan] = useState({
    loanType: '',
    lender: '',
    outstandingAmount: '',
    emi: '',
    tenureRemaining: ''
  });

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setLoanDocuments(prev => ({ ...prev, [type]: file }));
    }
  };

  const removeFile = (type) => {
    setLoanDocuments(prev => ({ ...prev, [type]: null }));
  };

  const handleLoanInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentLoan(prev => ({ ...prev, [name]: value }));
  };

  const addExistingLoan = () => {
    if (currentLoan.loanType && currentLoan.lender && currentLoan.outstandingAmount) {
      setExistingLoans([...existingLoans, currentLoan]);
      setCurrentLoan({
        loanType: '',
        lender: '',
        outstandingAmount: '',
        emi: '',
        tenureRemaining: ''
      });
      setShowAddLoan(false);
    }
  };

  const removeLoan = (index) => {
    setExistingLoans(existingLoans.filter((_, i) => i !== index));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
            Loan Documents & Existing Loans
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Upload required documents and provide existing loan details
          </p>
        </div>

        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
            
            <div className="mb-5">
              <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                {formData.loanType === 'home' && 'Home Loan Documents'}
                {formData.loanType === 'vehicle' && 'Vehicle Loan Documents'}
                {formData.loanType === 'personal' && 'Personal Loan - No Additional Documents Required'}
              </h4>
              
              {formData.loanType === 'home' && (
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                      Sale Agreement *
                    </label>
                    <div className="card border-2 border-primary">
                      <div className="card-body text-center p-3">
                        {!loanDocuments.saleAgreement ? (
                          <label className="btn btn-outline-primary btn-sm w-100">
                            Upload Document
                            <input
                              type="file"
                              className="d-none"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange(e, 'saleAgreement')}
                            />
                          </label>
                        ) : (
                          <div>
                            <p className="text-success small mb-2">
                              ✓ {loanDocuments.saleAgreement.name.length > 20 ? loanDocuments.saleAgreement.name.substring(0, 20) + '...' : loanDocuments.saleAgreement.name}
                            </p>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeFile('saleAgreement')}
                            >
                              Remove
                            </button>
                          </div>
                        )}
                        <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Property sale agreement</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                      Evaluation Certificate *
                    </label>
                    <div className="card border-2 border-primary">
                      <div className="card-body text-center p-3">
                        {!loanDocuments.evaluationCertificate ? (
                          <label className="btn btn-outline-primary btn-sm w-100">
                            Upload Certificate
                            <input
                              type="file"
                              className="d-none"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange(e, 'evaluationCertificate')}
                            />
                          </label>
                        ) : (
                          <div>
                            <p className="text-success small mb-2">
                              ✓ {loanDocuments.evaluationCertificate.name.length > 20 ? loanDocuments.evaluationCertificate.name.substring(0, 20) + '...' : loanDocuments.evaluationCertificate.name}
                            </p>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeFile('evaluationCertificate')}
                            >
                              Remove
                            </button>
                          </div>
                        )}
                        <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Property valuation certificate</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {formData.loanType === 'vehicle' && (
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                      Dealer Invoice *
                    </label>
                    <div className="card border-2 border-primary">
                      <div className="card-body text-center p-3">
                        {!loanDocuments.dealerInvoice ? (
                          <label className="btn btn-outline-primary btn-sm w-100">
                            Upload Invoice
                            <input
                              type="file"
                              className="d-none"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange(e, 'dealerInvoice')}
                            />
                          </label>
                        ) : (
                          <div>
                            <p className="text-success small mb-2">
                              ✓ {loanDocuments.dealerInvoice.name.length > 20 ? loanDocuments.dealerInvoice.name.substring(0, 20) + '...' : loanDocuments.dealerInvoice.name}
                            </p>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeFile('dealerInvoice')}
                            >
                              Remove
                            </button>
                          </div>
                        )}
                        <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Invoice from dealer</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                      Dealer Quotation *
                    </label>
                    <div className="card border-2 border-primary">
                      <div className="card-body text-center p-3">
                        {!loanDocuments.dealerQuotation ? (
                          <label className="btn btn-outline-primary btn-sm w-100">
                            Upload Quotation
                            <input
                              type="file"
                              className="d-none"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange(e, 'dealerQuotation')}
                            />
                          </label>
                        ) : (
                          <div>
                            <p className="text-success small mb-2">
                              ✓ {loanDocuments.dealerQuotation.name.length > 20 ? loanDocuments.dealerQuotation.name.substring(0, 20) + '...' : loanDocuments.dealerQuotation.name}
                            </p>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeFile('dealerQuotation')}
                            >
                              Remove
                            </button>
                          </div>
                        )}
                        <small className="text-muted d-block mt-2" style={{ fontSize: '0.7rem' }}>Price quotation</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {formData.loanType === 'personal' && (
                <div className="alert alert-info border-0" style={{ background: ' #bbdefb ' }}>
                  <div className="d-flex align-items-center">                    
                    <div>
                      <strong>No additional documents required</strong>
                      <div className="small text-muted mt-1">
                        All necessary documents have already been collected in previous steps.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0" style={{ color: '#1a1a1a' }}>
                  Existing Loan Details
                </h4>
                {!showAddLoan && (
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => setShowAddLoan(true)}
                  >
                    + Add Existing Loan
                  </button>
                )}
              </div>

              {existingLoans.length > 0 && (
                <div className="mb-4">
                  {existingLoans.map((loan, index) => (
                    <div key={index} className="card mb-3 border-2 border-secondary">
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h6 className="fw-bold mb-2">{loan.loanType}</h6>
                            <div className="row g-2 small">
                              <div className="col-md-4">
                                <strong>Lender:</strong> {loan.lender}
                              </div>
                              <div className="col-md-4">
                                <strong>Outstanding:</strong> ₹{loan.outstandingAmount}
                              </div>
                              <div className="col-md-4">
                                <strong>EMI:</strong> ₹{loan.emi}
                              </div>
                              <div className="col-md-4">
                                <strong>Tenure Remaining:</strong> {loan.tenureRemaining} months
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeLoan(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {showAddLoan && (
                <div className="card border-2 border-primary mb-3">
                  <div className="card-body p-4">
                    <h6 className="fw-bold mb-3">Add Existing Loan</h6>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                          Loan Type *
                        </label>
                        <select
                          className="form-select"
                          name="loanType"
                          value={currentLoan.loanType}
                          onChange={handleLoanInputChange}
                          style={{ fontSize: '0.9rem' }}
                        >
                          <option value="">Select loan type</option>
                          <option value="Home Loan">Home Loan</option>
                          <option value="Vehicle Loan">Vehicle Loan</option>
                          <option value="Personal Loan">Personal Loan</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Education Loan">Education Loan</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                          Lender Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lender"
                          value={currentLoan.lender}
                          onChange={handleLoanInputChange}
                          placeholder="Bank/NBFC name"
                          style={{ fontSize: '0.9rem' }}
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                          Outstanding Amount (₹) *
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="outstandingAmount"
                          value={currentLoan.outstandingAmount}
                          onChange={handleLoanInputChange}
                          placeholder="Amount"
                          style={{ fontSize: '0.9rem' }}
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                          Monthly EMI (₹) *
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="emi"
                          value={currentLoan.emi}
                          onChange={handleLoanInputChange}
                          placeholder="EMI amount"
                          style={{ fontSize: '0.9rem' }}
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057', fontSize: '0.9rem' }}>
                          Tenure Remaining (Months) *
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="tenureRemaining"
                          value={currentLoan.tenureRemaining}
                          onChange={handleLoanInputChange}
                          placeholder="Months"
                          style={{ fontSize: '0.9rem' }}
                        />
                      </div>

                      <div className="col-12">
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={addExistingLoan}
                          >
                            Add Loan
                          </button>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => {
                              setShowAddLoan(false);
                              setCurrentLoan({
                                loanType: '',
                                lender: '',
                                outstandingAmount: '',
                                emi: '',
                                tenureRemaining: ''
                              });
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {existingLoans.length === 0 && !showAddLoan && (
                <div className="alert alert-light border" role="alert">
                  <p className="mb-0 text-muted small">
                    No existing loans added. Click "Add Existing Loan" if you have any ongoing loans.
                  </p>
                </div>
              )}
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
                className="btn btn-primary btn-lg flex-fill py-3"
                onClick={onNext}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(13, 110, 253, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSpecificDocumentsStep;
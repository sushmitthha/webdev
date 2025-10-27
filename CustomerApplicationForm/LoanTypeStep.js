import React from 'react';

const LoanTypeStep = ({ formData, setFormData, onNext }) => {
  const loanTypes = [
    { 
      id: 'personal', 
      icon: 'bi-wallet2', 
      name: 'Personal Loan', 
      desc: 'Quick funds for personal needs',
      amount: 'Up to ₹25 Lakhs',
      rate: '8.5% p.a.',
      gradient: 'linear-gradient(135deg, #01be24ff 0%, #00c531ff 100%)'
    },
    { 
      id: 'home', 
      icon: 'bi-house-heart-fill', 
      name: 'Home Loan', 
      desc: 'Fulfill your dream home',
      amount: 'Up to ₹5 Crores',
      rate: '7.5% p.a.',
      gradient: 'linear-gradient(135deg, #01be24ff 0%, #00c531ff 100%)'
    },
    { 
      id: 'vehicle', 
      icon: 'bi-car-front-fill', 
      name: 'Vehicle Loan', 
      desc: 'Drive your dream vehicle',
      amount: 'Up to ₹50 Lakhs',
      rate: '8.0% p.a.',
      gradient: 'linear-gradient(135deg, #01be24ff 0%, #00c531ff 100%)'
    }
  ];

  const selectLoanType = (type) => {
    setFormData(prev => ({ ...prev, loanType: type }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
            Choose Your Loan Type
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Select the loan that best fits your needs
          </p>
        </div>


        <div className="row g-4 mb-5">
          {loanTypes.map(loan => {
            const isSelected = formData.loanType === loan.id;
            return (
              <div className="col-md-4" key={loan.id}>
                <div
                  className={`card h-100 border-0 position-relative overflow-hidden ${
                    isSelected ? 'shadow-lg' : 'shadow-sm'
                  }`}
                  onClick={() => selectLoanType(loan.id)}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease',
                    transform: isSelected ? 'translateY(-8px)' : 'translateY(0)',
                    border: isSelected ? '3px solid #0d6efd' : '1px solid #e0e0e0'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.classList.add('shadow');
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.classList.remove('shadow');
                    }
                  }}
                >
                  

                  {isSelected && (
                    <div 
                      className="position-absolute top-0 end-0 m-3"
                      style={{ zIndex: 10 }}
                    >
                      <div 
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '32px', height: '32px' }}
                      >
                        <i className="bi bi-check-lg fw-bold"></i>
                      </div>
                    </div>
                  )}

                  <div className="card-body text-center p-4">
                    <div 
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: isSelected ? loan.gradient : '#f8f9fa',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i 
                        className={`bi ${loan.icon}`} 
                        style={{ 
                          fontSize: '2.5rem',
                          color: isSelected ? '#ffffff' : '#6c757d'
                        }}
                      />
                    </div>

                    <h4 className="fw-bold mb-2" style={{ color: '#1a1a1a' }}>
                      {loan.name}
                    </h4>

                    <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                      {loan.desc}
                    </p>

                    <div className="border-top pt-3 mt-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted small">Amount:</span>
                        <span className="fw-semibold">{loan.amount}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted small">Interest Rate:</span>
                        <span className="fw-semibold text-success">{loan.rate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Loan Details Form */}
        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
            <h4 className="fw-bold mb-4 text-center text-md-start" style={{ color: '#1a1a1a' }}>
              
              Loan Details
            </h4>

            <div className="row g-4">
              {/* Loan Amount */}
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                  Loan Amount (₹) *
                </label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-light border-end-0">
                    <i className="bi bi-currency-rupee"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control border-start-0 ps-0"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    style={{ 
                      fontSize: '1.1rem',
                      boxShadow: 'none'
                    }}
                  />
                </div>
                <small className="text-muted mt-1 d-block">
                  Enter the amount you wish to borrow
                </small>
              </div>

              {/* Loan Tenure */}
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                  Loan Tenure *
                </label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-light border-end-0">
                    <i className="bi bi-calendar-range"></i>
                  </span>
                  <select
                    className="form-select border-start-0 ps-0"
                    name="loanTenure"
                    value={formData.loanTenure}
                    onChange={handleInputChange}
                    style={{ 
                      fontSize: '1.1rem',
                      boxShadow: 'none'
                    }}
                  >
                    <option value="">Select tenure</option>
                    <option value="12">12 Months (1 Year)</option>
                    <option value="24">24 Months (2 Years)</option>
                    <option value="36">36 Months (3 Years)</option>
                    <option value="48">48 Months (4 Years)</option>
                    <option value="60">60 Months (5 Years)</option>
                    <option value="84">84 Months (7 Years)</option>
                    <option value="120">120 Months (10 Years)</option>
                  </select>
                </div>
                <small className="text-muted mt-1 d-block">
                  Choose your repayment period
                </small>
              </div>
            </div>

            {/* EMI Preview */}
            {formData.loanAmount && formData.loanTenure && (
              <div className="alert alert-info border-0 mt-4 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}>
                               
                  <strong>Estimated Monthly EMI: </strong>
                  <span className="fs-5 fw-bold text-primary ms-2">
                  ₹{Math.round((formData.loanAmount * 1.085) / formData.loanTenure).toLocaleString('en-IN')}
                  </span>
                  <div className="small text-muted mt-1 ms-2">
                    (This is an approximate calculation. Final EMI will be calculated based on your profile.)
                  </div>
                
              </div>
            )}

            {/* Continue Button */}
            <button 
              className="btn btn-primary btn-lg w-100 mt-4 py-3 d-flex align-items-center justify-content-center"
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
              <i className="bi bi-arrow-right-circle ms-2" style={{ fontSize: '1.3rem' }}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTypeStep;
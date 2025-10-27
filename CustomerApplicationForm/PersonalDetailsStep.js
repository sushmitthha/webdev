import React, { useState } from 'react';

const PersonalDetailsStep = ({ formData, handleInputChange, onNext, onPrev }) => {
  const [sameAsCurrentAddress, setSameAsCurrentAddress] = useState(false);
  const [documents, setDocuments] = useState({
    photo: null,
    idProof: null,
    addressProof: null
  });

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsCurrentAddress(checked);
    
    if (checked) {
      handleInputChange({ target: { name: 'permanentAddress', value: formData.currentAddress } });
      handleInputChange({ target: { name: 'permanentCity', value: formData.currentCity } });
      handleInputChange({ target: { name: 'permanentPincode', value: formData.currentPincode } });
    } else {
      handleInputChange({ target: { name: 'permanentAddress', value: '' } });
      handleInputChange({ target: { name: 'permanentCity', value: '' } });
      handleInputChange({ target: { name: 'permanentPincode', value: '' } });
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments(prev => ({ ...prev, [type]: file }));
    }
  };

  const removeFile = (type) => {
    setDocuments(prev => ({ ...prev, [type]: null }));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
            Personal Details
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Please provide your complete personal information
          </p>
        </div>


        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
            
            <div className="mb-5">
              <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                Basic Information
              </h4>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Full Name *
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control "
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                  <small className="text-muted mt-1 d-block">As per official documents</small>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Father's Name *
                  </label>
                  <div className="input-group input-group-lg">     
                    <input
                      type="text"
                      className="form-control "
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="Enter father's name"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Date of Birth *
                  </label>
                  <div className="input-group input-group-lg">
                    
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                  <small className="text-muted mt-1 d-block">You must be 18 years or older</small>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Gender *
                  </label>
                  <div className="input-group input-group-lg">
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Marital Status *
                  </label>
                  <div className="input-group input-group-lg">
                    <select
                      className="form-select"
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    >
                      <option value="">Select marital status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Education Level *
                  </label>
                  <div className="input-group input-group-lg">
                    <select
                      className="form-select"
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="diploma">Diploma</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="doctorate">Doctorate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                Contact Information
              </h4>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Email Address *
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      type="email"
                      className="form-control "
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                  <small className="text-muted mt-1 d-block">We'll send updates to this email</small>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Mobile Number *
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      type="tel"
                      className="form-control"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      maxLength="10"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                  <small className="text-muted mt-1 d-block">For verification and updates</small>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                Identity Documents
              </h4>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    PAN Number *
                  </label>
                  <div className="input-group input-group-lg">

                    <input
                      type="text"
                      className="form-control "
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                      placeholder="ABCDE1234F"
                      maxLength="10"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                  <small className="text-muted mt-1 d-block">10-character alphanumeric code</small>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Aadhaar Number *
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={handleInputChange}
                      placeholder="1234-5678-9012"
                      maxLength="12"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                  <small className="text-muted mt-1 d-block">12-digit unique identification number</small>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                Current Address
              </h4>
              
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Complete Address *
                  </label>
                  <div className="input-group">

                    <textarea
                      className="form-control "
                      name="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="House No., Building, Street, Area"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    City *
                  </label>
                  <div className="input-group input-group-lg">

                    <input
                      type="text"
                      className="form-control"
                      name="currentCity"
                      value={formData.currentCity}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Pincode *
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      name="currentPincode"
                      value={formData.currentPincode}
                      onChange={handleInputChange}
                      placeholder="6-digit pincode"
                      maxLength="6"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0" style={{ color: '#1a1a1a' }}>
                  Permanent Address
                </h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sameAddress"
                    checked={sameAsCurrentAddress}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="sameAddress">
                    Same as current address
                  </label>
                </div>
              </div>
              
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Complete Address *
                  </label>
                  <div className="input-group">

                    <textarea
                      className="form-control"
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="House No., Building, Street, Area"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      disabled={sameAsCurrentAddress}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    City *
                  </label>
                  <div className="input-group input-group-lg">

                    <input
                      type="text"
                      className="form-control"
                      name="permanentCity"
                      value={formData.permanentCity}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      disabled={sameAsCurrentAddress}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                    Pincode *
                  </label>
                  <div className="input-group input-group-lg">

                    <input
                      type="text"
                      className="form-control "
                      name="permanentPincode"
                      value={formData.permanentPincode}
                      onChange={handleInputChange}
                      placeholder="6-digit pincode"
                      maxLength="6"
                      style={{ fontSize: '1rem', boxShadow: 'none' }}
                      disabled={sameAsCurrentAddress}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                Document Uploads
              </h4>
              
              <div className="row g-4">
                <div className="col-md-4">
                  <label className="form-label fw-semibold mb-3" style={{ color: '#495057' }}>
                    Passport Size Photo *
                  </label>
                  <div className="card border-2 border-primary h-70">
                    <div className="card-body text-center p-4">
                      {!documents.photo ? (
                        <label className="btn btn-outline-primary w-100">
                          <i className="bi bi-upload me-2"></i> Upload Photo
                          <input
                            type="file"
                            className="d-none"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'photo')}
                          />
                        </label>
                      ) : (
                        <div>
                          <p className="text-success small mb-2">
                            <i className="bi bi-check-circle-fill me-1"></i> {documents.photo.name}
                          </p>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFile('photo')}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                      <small className="text-muted d-block mt-2">JPG, PNG (Max 2MB)</small>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold mb-3" style={{ color: '#495057' }}>
                    ID Proof *
                  </label>
                  <div className="card border-2 border-primary h-70">
                    <div className="card-body text-center p-4">
                      {!documents.idProof ? (
                        <label className="btn btn-outline-primary w-100">
                          <i className="bi bi-upload me-2"></i> Upload ID
                          <input
                            type="file"
                            className="d-none"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, 'idProof')}
                          />
                        </label>
                      ) : (
                        <div>
                          <p className="text-success small mb-2">
                            <i className="bi bi-check-circle-fill me-1"></i> {documents.idProof.name}
                          </p>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFile('idProof')}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                      <small className="text-muted d-block mt-2">Aadhaar/License/Passport</small>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold mb-3" style={{ color: '#495057' }}>
                    Address Proof *
                  </label>
                  <div className="card border-2 border-primary h-70">
                    <div className="card-body text-center p-4">
                     
                      {!documents.addressProof ? (
                        <label className="btn btn-outline-primary w-100">
                          <i className="bi bi-upload me-2"></i> Upload Proof
                          <input
                            type="file"
                            className="d-none"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, 'addressProof')}
                          />
                        </label>
                      ) : (
                        <div>
                          <p className="text-success small mb-2">
                            <i className="bi bi-check-circle-fill me-1"></i> {documents.addressProof.name}
                          </p>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFile('addressProof')}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                      <small className="text-muted d-block mt-2">Rental/Utility Bill/Aadhaar</small>
                    </div>
                  </div>
                </div>
              </div>
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
                <i className="bi bi-arrow-left-circle me-2" style={{ fontSize: '1.3rem' }}></i>
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
                <i className="bi bi-arrow-right-circle ms-2" style={{ fontSize: '1.3rem' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsStep;
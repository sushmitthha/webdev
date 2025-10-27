import React, { useState } from 'react';

const ReferencesStep = ({ references, setReferences, onNext, onPrev }) => {
  const [showAddReference, setShowAddReference] = useState(references.length === 0);
  const [currentReference, setCurrentReference] = useState({
    name: '',
    relationship: '',
    contactNumber: '',
    address: ''
  });

  const handleReferenceInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentReference(prev => ({ ...prev, [name]: value }));
  };

  const addReference = () => {
    if (currentReference.name && currentReference.relationship && currentReference.contactNumber && currentReference.address) {
      setReferences([...references, currentReference]);
      setCurrentReference({
        name: '',
        relationship: '',
        contactNumber: '',
        address: ''
      });
      setShowAddReference(false);
    } else {
      alert('Please fill in all reference fields');
    }
  };

  const removeReference = (index) => {
    setReferences(references.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (references.length < 1) {
      alert('Please add at least 1 reference');
      return;
    }
    onNext();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
            References
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Please provide at least 1 reference (maximum 3)
          </p>
        </div>

        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
                        
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0" style={{ color: '#1a1a1a' }}>
                  Reference Details
                </h4>
                {!showAddReference && references.length < 3 && (
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => setShowAddReference(true)}
                  >
                    + Add Reference
                  </button>
                )}
              </div>

              {references.length > 0 && (
                <div className="mb-4">
                  {references.map((reference, index) => (
                    <div key={index} className="card mb-3 border">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="flex-grow-1">
                            <h5 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>
                              {reference.name}
                            </h5>
                            <div className="mb-2">
                              <span className="text-muted">Relationship: </span>
                              <span>{reference.relationship}</span>
                            </div>
                            <div className="mb-2">
                              <span className="text-muted">Contact: </span>
                              <span>{reference.contactNumber}</span>
                            </div>
                            <div>
                              <span className="text-muted">Address: </span>
                              <span>{reference.address}</span>
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeReference(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {showAddReference && (
                <div className="card border-2 border-primary mb-3">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">
                      Add Reference {references.length + 1}
                      {references.length === 0 && <span className="text-danger ms-2">*</span>}
                    </h5>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="name"
                          value={currentReference.name}
                          onChange={handleReferenceInputChange}
                          placeholder="Reference name"
                          style={{ fontSize: '0.9rem' }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                          Relationship *
                        </label>
                        <select
                          className="form-select form-select-lg"
                          name="relationship"
                          value={currentReference.relationship}
                          onChange={handleReferenceInputChange}
                          style={{ fontSize: '0.9rem' }}
                        >
                          <option value="">Select relationship</option>
                          <option value="Family Member">Family Member</option>
                          <option value="Friend">Friend</option>
                          <option value="Colleague">Colleague</option>
                          <option value="Business Associate">Business Associate</option>
                          <option value="Neighbor">Neighbor</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                          Contact Number *
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          name="contactNumber"
                          value={currentReference.contactNumber}
                          onChange={handleReferenceInputChange}
                          placeholder="10-digit mobile number"
                          maxLength="10"
                          style={{ fontSize: '0.9rem' }}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold mb-2" style={{ color: '#495057' }}>
                          Address *
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          name="address"
                          value={currentReference.address}
                          onChange={handleReferenceInputChange}
                          rows="3"
                          placeholder="Complete address"
                          style={{ fontSize: '0.9rem' }}
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-primary"
                            onClick={addReference}
                          >
                            Add Reference
                          </button>
                          {references.length > 0 && (
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => {
                                setShowAddReference(false);
                                setCurrentReference({
                                  name: '',
                                  relationship: '',
                                  contactNumber: '',
                                  address: ''
                                });
                              }}
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {references.length === 0 && !showAddReference && (
                <div className="alert alert-warning border-0" style={{ background: 'linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)' }}>
                  <div className="d-flex align-items-center">
                    <div className="me-3" style={{ fontSize: '1.5rem' }}>⚠️</div>
                    <div>
                      <strong>At least 1 reference is required</strong>
                      <div className="small text-muted mt-1">
                        Please add at least one reference to continue.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {references.length >= 1 && references.length < 3 && !showAddReference && (
                <div className="alert alert-info border-0" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}>
                  <div className="d-flex align-items-center">
                    <div>
                      <strong>You can add up to {3 - references.length} more reference(s)</strong>
                      <div className="small text-muted mt-1">
                        {references.length} of 3 references added.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {references.length === 3 && (
                <div className="alert alert-success border-0" style={{ background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)' }}>
                  <div className="d-flex align-items-center">
                    <div className="me-3" style={{ fontSize: '1.5rem' }}>✓</div>
                    <div>
                      <strong>Maximum references added</strong>
                      <div className="small text-muted mt-1">
                        You have added the maximum number of references (3).
                      </div>
                    </div>
                  </div>
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
                onClick={handleNext}
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

export default ReferencesStep;
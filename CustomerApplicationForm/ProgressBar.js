import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, name: 'Loan Details', shortName: 'Loan' },
    { number: 2, name: 'Personal Info', shortName: 'Personal' },
    { number: 3, name: 'Employment', shortName: 'Employment' },
    { number: 4, name: 'Loan Docs', shortName: 'Docs' },
    { number: 5, name: 'References', shortName: 'References' },
    { number: 6, name: 'Review', shortName: 'Review' }
  ];

  return (
    <div className="bg-white shadow-sm border-bottom" style={{ top: '72px', zIndex: 999 }}>
      <div className="container py-2 py-md-3">
        <div className="d-none d-md-flex align-items-center justify-content-center position-relative">
          {steps.map((step, index) => {
            const isCompleted = step.number < currentStep;
            const isActive = step.number === currentStep;

            return (
              <React.Fragment key={step.number}>
                <div className="d-flex flex-column align-items-center position-relative" style={{ minWidth: '90px' }}>
                  <div 
                    className={`rounded-circle d-flex align-items-center justify-content-center fw-bold mb-1 ${
                      isCompleted 
                        ? 'bg-success text-white' 
                        : isActive
                        ? 'bg-primary text-white'
                        : 'bg-light text-secondary border border-2'
                    }`}
                    style={{ 
                      width: '36px', 
                      height: '36px',
                      fontSize: '0.9rem',
                      boxShadow: isActive ? '0 0 0 4px rgba(13, 110, 253, 0.2)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {isCompleted ? (
                      <span style={{ fontSize: '1rem' }}>✓</span>
                    ) : (
                      step.number
                    )}
                  </div>

                  <div className="text-center">
                    <div 
                      className={`fw-semibold ${
                        isActive ? 'text-primary' : isCompleted ? 'text-success' : 'text-muted'
                      }`}
                      style={{ fontSize: '0.7rem' }}
                    >
                      {step.name}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div 
                    className={`${isCompleted ? 'bg-success' : 'bg-light'}`}
                    style={{ 
                      height: '2px', 
                      width: '50px',
                      marginBottom: '30px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>        
      </div>
    </div>
  );
};

export default ProgressBar;
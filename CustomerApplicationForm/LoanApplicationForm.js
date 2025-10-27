import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ProgressBar from './ProgressBar';
import SuccessMessage from './SuccessMessage';
import LoanTypeStep from './LoanTypeStep';
import PersonalDetailsStep from './PersonalDetailsStep';
import EmploymentStep from './EmploymentStep';
import LoanSpecificDocumentsStep from './LoanSpecificDocumentsStep';
import ReferencesStep from './ReferencesStep';
import ReviewSubmitStep from './ReviewSubmitStep';
import { validateStep } from './validation';

const LoanApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: '',
    loanAmount: '',
    loanTenure: '',
    fullName: '',
    fatherName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    educationLevel: '',
    email: '',
    mobile: '',
    pan: '',
    aadhaar: '',
    currentAddress: '',
    currentCity: '',
    currentPincode: '',
    permanentAddress: '',
    permanentCity: '',
    permanentPincode: '',
    employmentType: '',
    companyName: '',
    designation: '',
    totalExperience: '',
    businessName: '',
    businessType: '',
    yearsInBusiness: '',
    monthlyIncome: '',
    officeAddress: '',
    existingEmi: '',
    termsAccept: false
  });

  const [documents, setDocuments] = useState({
    photo: null,
    idProof: null,
    addressProof: null,
    employmentProof: null,
    salarySlips: null,
    businessProof: null,
    gstCertificate: null,
    registrationCertificate: null,
    businessLicense: null,
    itrDocuments: null,
    saleAgreement: null,
    evaluationCertificate: null,
    dealerInvoice: null,
    dealerQuotation: null
  });

  const [existingLoans, setExistingLoans] = useState([]);
  const [references, setReferences] = useState([]);
  const [applicationId, setApplicationId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const totalSteps = 6; 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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

  const nextStep = () => {
    if (validateStep(currentStep, formData, documents, existingLoans, references)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(6, formData, documents, existingLoans, references)) {
      const appId = 'SCB' + new Date().getFullYear() + 
                    Math.random().toString(36).substr(2, 9).toUpperCase();
      setApplicationId(appId);
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (showSuccess) {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <SuccessMessage applicationId={applicationId} />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-vh-100 bg-light" style={{ paddingTop: '80px' }}>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        
        <div className="container py-5">
          {currentStep === 1 && (
            <LoanTypeStep
              formData={formData}
              setFormData={setFormData}
              onNext={nextStep}
            />
          )}
          {currentStep === 2 && (
            <PersonalDetailsStep
              formData={formData}
              handleInputChange={handleInputChange}
              documents={documents}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 3 && (
            <EmploymentStep
              formData={formData}
              handleInputChange={handleInputChange}
              documents={documents}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 4 && (
            <LoanSpecificDocumentsStep
              formData={formData}
              documents={documents}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              existingLoans={existingLoans}
              setExistingLoans={setExistingLoans}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 5 && (
            <ReferencesStep
              references={references}
              setReferences={setReferences}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 6 && (
            <ReviewSubmitStep
              formData={formData}
              documents={documents}
              existingLoans={existingLoans}
              references={references}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onPrev={prevStep}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default LoanApplicationForm;
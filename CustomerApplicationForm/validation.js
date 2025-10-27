export const validateStep = (step, formData, documents, existingLoans, references) => {
    let requiredFields = [];
    let requiredDocuments = [];
    return true;
    
    switch(step) {
      case 1:
        requiredFields = ['loanType', 'loanAmount', 'loanTenure'];
        break;
        
      case 2:
        requiredFields = [
          'fullName', 'fatherName', 'dob', 'gender', 'maritalStatus', 
          'educationLevel', 'email', 'mobile', 'pan', 'aadhaar',
          'currentAddress', 'currentCity', 'currentPincode',
          'permanentAddress', 'permanentCity', 'permanentPincode'
        ];
        requiredDocuments = ['photo', 'idProof', 'addressProof'];
        break;
        
      case 3:
        requiredFields = ['employmentType', 'monthlyIncome', 'officeAddress'];
        
        if (formData.employmentType === 'salaried') {
          requiredFields.push('companyName', 'designation', 'totalExperience');
          requiredDocuments = ['employmentProof', 'salarySlips', 'itrDocuments'];
        } else if (formData.employmentType === 'self-employed') {
          requiredFields.push('businessName', 'businessType', 'yearsInBusiness');
          requiredDocuments = ['businessProof', 'gstCertificate', 'itrDocuments'];
        }
        break;
        
      case 4:
        if (formData.loanType === 'home') {
          requiredDocuments = ['saleAgreement', 'evaluationCertificate'];
        } else if (formData.loanType === 'vehicle') {
          requiredDocuments = ['dealerInvoice', 'dealerQuotation'];
        }
        break;
        
      case 5:
        if (!references || references.length < 1) {
          alert('Please add at least 1 reference');
          return false;
        }
        if (references.length > 3) {
          alert('Maximum 3 references allowed');
          return false;
        }
        return true;
        
      case 6:
        if (!formData.termsAccept) {
          alert('Please accept the terms and conditions');
          return false;
        }
        return true;
        
      default:
        return true;
    }
    
    for (let field of requiredFields) {
      if (!formData[field] || formData[field] === '') {
        alert(`Please fill in all required fields`);
        return false;
      }
    }
    
    for (let doc of requiredDocuments) {
      if (!documents[doc]) {
        alert(`Please upload all required documents`);
        return false;
      }
    }
    
    return true;
  };
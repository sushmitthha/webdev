import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployementStep = () => {
  const { loanId } = useParams(); // Get loanId from URL

  const [formData, setFormData] = useState({
    employmentType: "",
    monthlyIncome: "",
    companyName: "",
    designation: "",
    totalExperience: "",
    businessName: "",
    businessType: "",
    yearsInBusiness: ""
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit data and store in DB
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/loans/${loanId}/employment`,
        formData
      );
      alert("✅ Employment details saved to database!");
      console.log(res.data);
    } catch (error) {
      console.error("❌ Error saving employment details:", error);
      alert("Error saving to database.");
    }
  };

  return (
    <div className="employment-container">
      <h2>Employment Details</h2>

      {/* Employment Type */}
      <label>Employment Type:</label>
      <select
        name="employmentType"
        value={formData.employmentType}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="salaried">Salaried</option>
        <option value="self-employed">Self-Employed</option>
      </select>

      {/* Monthly Income */}
      <label>Monthly Income:</label>
      <input
        type="number"
        name="monthlyIncome"
        value={formData.monthlyIncome}
        onChange={handleChange}
        placeholder="Enter monthly income"
      />

      {/* Company Fields - Only for Salaried */}
      {formData.employmentType === "salaried" && (
        <>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
          />

          <label>Designation:</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
          />

          <label>Total Experience (Years):</label>
          <input
            type="number"
            name="totalExperience"
            value={formData.totalExperience}
            onChange={handleChange}
            placeholder="Enter total experience"
          />
        </>
      )}

      {/* Business Fields - Only for Self-Employed */}
      {formData.employmentType === "self-employed" && (
        <>
          <label>Business Name:</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter business name"
          />

          <label>Business Type:</label>
          <input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            placeholder="Enter business type"
          />

          <label>Years in Business:</label>
          <input
            type="number"
            name="yearsInBusiness"
            value={formData.yearsInBusiness}
            onChange={handleChange}
            placeholder="Enter years in business"
          />
        </>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit}>Save Employment Details</button>
    </div>
  );
};

export default EmployementStep;

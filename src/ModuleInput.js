import React from 'react';
import './App.css';

const ModuleInput = ({ index, module, onModuleChange }) => {
  const handleNameChange = (e) => {
    onModuleChange(index, 'name', e.target.value);
  };

  const handleGradeChange = (e) => {
    onModuleChange(index, 'grade', e.target.value);
  };

  const handleCreditChange = (e) => {
    onModuleChange(index, 'credits', e.target.value);
  };

  return (
    <div className="module-input">
      <input
        type="text"
        placeholder={`Module ${index + 1} Name`}
        value={module.name}
        onChange={handleNameChange}
        className="module-name"
      />
      <select value={module.grade} onChange={handleGradeChange} className="grade-select">
        <option value="">Select Grade</option>
        <option value="A+">A+ (85-100)</option>
        <option value="A">A (70-84)</option>
        <option value="A-">A- (65-69)</option>
        <option value="B+">B+ (60-64)</option>
        <option value="B">B (55-59)</option>
        <option value="B-">B- (50-54)</option>
        <option value="C+">C+ (45-49)</option>
        <option value="C">C (40-44)</option>
        <option value="C-">C- (35-39)</option>
        <option value="D+">D+ (30-34)</option>
        <option value="D">D (25-29)</option>
        <option value="E">E (00-24)</option>
      </select>
      <input
        type="number"
        placeholder="Credits"
        value={module.credits}
        onChange={handleCreditChange}
        className="credits-input"
      />
    </div>
  );
};

export default ModuleInput;

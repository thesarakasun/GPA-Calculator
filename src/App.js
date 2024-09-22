import React, { useState } from 'react';
import './App.css';
import ModuleInput from './ModuleInput';

const App = () => {
  const [moduleCount, setModuleCount] = useState(0);
  const [modules, setModules] = useState([]);

  const handleModuleCountChange = (e) => {
    const count = Math.min(Math.max(e.target.value, 0), 15);
    setModuleCount(count);
    setModules(new Array(count).fill({ name: '', grade: '', credits: 0 }));
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...modules];
    updatedModules[index] = { ...updatedModules[index], [field]: value };
    setModules(updatedModules);
  };

  const calculateGPA = () => {
    const gradeValues = {
      'A+': 4.0, 'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D+': 1.3, 'D': 1.0, 'E': 0.0
    };
    let totalPoints = 0;
    let totalCredits = 0;

    modules.forEach((module) => {
      const gradeValue = gradeValues[module.grade] || 0;
      totalPoints += gradeValue * module.credits;
      totalCredits += parseFloat(module.credits);
    });

    const gpa = totalPoints / totalCredits;
    return isNaN(gpa) ? 0 : gpa.toFixed(2);
  };

  return (
    <div className="App">
      <h1>GPA Calculator</h1>
      <div className="module-count">
        <label htmlFor="moduleCount">Number of Modules (Max 15): </label>
        <input
          type="number"
          id="moduleCount"
          className="module-c"
          value={moduleCount}
          onChange={handleModuleCountChange}
          max="15"
        />
      </div>
      {Array.from({ length: moduleCount }).map((_, index) => (
        <ModuleInput
          key={index}
          index={index}
          module={modules[index]}
          onModuleChange={handleModuleChange}
        />
      ))}
      {moduleCount > 0 && (
        <div className="result">
          
          <h3>Your GPA: {calculateGPA()}</h3>
        </div>
      )}
    </div>
  );
};

export default App;

import React from 'react';
import GeneralInfo from './component/GeneralInfo';
import Education from './component/Education';
import PracticalExperience from './component/PracticalExperience';
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <GeneralInfo/>
      <Education/>
      <PracticalExperience/>
    </div>
  );
}

export default App;

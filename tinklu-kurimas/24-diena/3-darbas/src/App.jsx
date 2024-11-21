import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import jobData from './data.json';

import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="job-cards">
        {jobData.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;

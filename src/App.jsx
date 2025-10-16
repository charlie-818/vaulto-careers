import { useState } from 'react';
import Header from './components/Header';
import JobBoard from './components/JobBoard';
import JobDetailModal from './components/JobDetailModal';
import ApplicationModal from './components/ApplicationModal';
import Footer from './components/Footer';
import jobsData from './data/jobs.json';
import './styles/globals.css';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  const handleJobModalClose = () => {
    setIsJobModalOpen(false);
    setSelectedJob(null);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsJobModalOpen(false);
    setIsApplicationModalOpen(true);
  };

  const handleApplicationModalClose = () => {
    setIsApplicationModalOpen(false);
    setSelectedJob(null);
  };

  const handleApplicationSubmit = () => {
    // This will be handled by the ApplicationModal component
    // The form submission is managed within the modal
  };

  return (
    <div className="App">
      <Header />
      <main>
        <JobBoard 
          jobs={jobsData} 
          onJobClick={handleJobClick}
        />
      </main>
      
      <JobDetailModal
        job={selectedJob}
        isOpen={isJobModalOpen}
        onClose={handleJobModalClose}
        onApply={handleApplyClick}
      />
      
      <ApplicationModal
        job={selectedJob}
        isOpen={isApplicationModalOpen}
        onClose={handleApplicationModalClose}
        onSubmit={handleApplicationSubmit}
      />
      
      <Footer />
    </div>
  );
}

export default App;
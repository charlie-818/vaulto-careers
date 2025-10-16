import { useState } from 'react';
import { motion } from 'framer-motion';
import JobCard from './JobCard';

const JobBoard = ({ jobs, onJobClick }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Get unique job types for filter options
  const jobTypes = ['all', ...new Set(jobs.map(job => job.type))];
  
  // Filter jobs based on selected type
  const filteredJobs = selectedFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.type === selectedFilter);

  return (
    <section className="job-board">
      <div className="container">
        <motion.div
          className="job-board-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>Join the Vaulto Team</h1>
          <p>Shape the future of digital finance with cutting-edge blockchain innovation</p>
        </motion.div>

        <motion.div
          className="job-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="filter-buttons">
            {jobTypes.map(type => (
              <motion.button
                key={type}
                className={`filter-btn ${selectedFilter === type ? 'active' : ''}`}
                onClick={() => setSelectedFilter(type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type === 'all' ? 'All Positions' : type}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="jobs-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <JobCard job={job} onClick={onJobClick} />
            </motion.div>
          ))}
        </motion.div>

        {filteredJobs.length === 0 && (
          <motion.div
            className="no-jobs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>No positions found</h3>
            <p>Try adjusting your filter or check back soon for new opportunities.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default JobBoard;

import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

const JobCard = ({ job, onClick }) => {
  return (
    <motion.div
      className="job-card"
      onClick={() => onClick(job)}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="job-card-header">
        <div className="job-header-content">
          <h3 className="job-title">{job.title}</h3>
          <div className="job-meta">
            <div className="job-location">
              <FiMapPin />
              <span>{job.location}</span>
            </div>
            <div className="job-type">
              <FiClock />
              <span>{job.type}</span>
            </div>
          </div>
        </div>
        <motion.div
          className="job-arrow"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <FiArrowRight />
        </motion.div>
      </div>
      
      <p className="job-summary">{job.summary}</p>
      
      <div className="job-footer">
        <span className="job-posted">Posted {new Date(job.posted).toLocaleDateString()}</span>
      </div>
    </motion.div>
  );
};

export default JobCard;

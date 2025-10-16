import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMapPin, FiClock, FiCheck } from 'react-icons/fi';

const JobDetailModal = ({ job, isOpen, onClose, onApply }) => {
  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content job-detail-modal"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="job-header-info">
                <h2 className="job-detail-title">{job.title}</h2>
                <div className="job-detail-meta">
                  <div className="job-detail-location">
                    <FiMapPin />
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail-type">
                    <FiClock />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>

            <div className="modal-body">
              <div className="job-section">
                <h3>About this role</h3>
                <p>{job.description}</p>
              </div>

              <div className="job-section">
                <h3>Requirements</h3>
                <ul className="requirements-list">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="requirement-item">
                      <FiCheck className="check-icon" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="modal-footer">
              <div className="job-posted-info">
                <span>Posted on {new Date(job.posted).toLocaleDateString()}</span>
              </div>
              <motion.button
                className="btn btn-primary apply-btn"
                onClick={() => onApply(job)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply for this position
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobDetailModal;

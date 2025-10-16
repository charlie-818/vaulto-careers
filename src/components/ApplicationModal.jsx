import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUser, FiMail, FiLink, FiMessageSquare, FiUpload, FiCheck } from 'react-icons/fi';

const ApplicationModal = ({ job, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    message: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us why you\'re interested in this role';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual Netlify form submission)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      linkedin: '',
      message: '',
      resume: null
    });
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-content application-modal"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <div className="application-header">
                    <h2>Apply for {job.title}</h2>
                    <p>Join our team and help build the future of crypto</p>
                  </div>
                  <button
                    className="modal-close"
                    onClick={handleClose}
                    aria-label="Close modal"
                  >
                    <FiX />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="application-form" data-netlify="true" name="job-application">
                  <input type="hidden" name="form-name" value="job-application" />
                  <input type="hidden" name="job-title" value={job.title} />
                  
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <FiUser />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <FiMail />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="linkedin" className="form-label">
                      <FiLink />
                      LinkedIn Profile / Portfolio URL
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      className="form-input"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile or portfolio URL"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      <FiMessageSquare />
                      Why are you interested in this role? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your experience, passion for crypto, and why you'd be a great fit for this role..."
                      rows={4}
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume" className="form-label">
                      <FiUpload />
                      Resume / CV (Optional)
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="form-input file-input"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                    />
                    <small className="file-help">PDF, DOC, or DOCX files only (max 10MB)</small>
                  </div>

                  {errors.submit && (
                    <div className="error-message submit-error">{errors.submit}</div>
                  )}

                  <div className="form-actions">
                    <motion.button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? 'Sending Application...' : 'Send Application'}
                    </motion.button>
                  </div>
                </form>
              </>
            ) : (
              <div className="success-message">
                <motion.div
                  className="success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <FiCheck />
                </motion.div>
                <h2>Application Submitted!</h2>
                <p>Thank you for your interest in joining Vaulto AI. We've received your application for the <strong>{job.title}</strong> position and will review it shortly.</p>
                <p>We'll be in touch within 5-7 business days.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationModal;

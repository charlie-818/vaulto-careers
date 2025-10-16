import { motion } from 'framer-motion';
import { FiTwitter, FiYoutube, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: FiTwitter,
      url: 'https://twitter.com/VaultoAI',
      ariaLabel: 'Follow Vaulto AI on Twitter'
    },
    {
      name: 'YouTube',
      icon: FiYoutube,
      url: 'https://youtube.com/@VaultoAI',
      ariaLabel: 'Subscribe to Vaulto AI on YouTube'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/company/Vaulto',
      ariaLabel: 'Follow Vaulto company on LinkedIn'
    },
    {
      name: 'Instagram',
      icon: FiInstagram,
      url: 'https://instagram.com/VaultoAI',
      ariaLabel: 'Follow Vaulto AI on Instagram'
    }
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.ariaLabel}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

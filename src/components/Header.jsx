import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/favicon.png" 
              alt="Vaulto AI Logo" 
              className="logo-icon"
            />
            <span className="logo-text">Vaulto</span>
          </motion.div>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

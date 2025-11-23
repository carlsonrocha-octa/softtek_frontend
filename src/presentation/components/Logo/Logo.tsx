import './Logo.css';

/**
 * Logo component
 * Displays the Softtek company logo
 */
export const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src="/images/softtek-logo.png" 
        alt="Softtek" 
        className="logo-image"
      />
    </div>
  );
};


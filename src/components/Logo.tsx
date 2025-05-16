
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/0c212343-7aef-4795-8296-eebd44d4ddfe.png" 
        alt="StreamHib Logo" 
        className="h-10 md:h-12" 
      />
    </div>
  );
};

export default Logo;

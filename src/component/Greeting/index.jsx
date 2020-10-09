
import React from 'react';
import './style.css';

const Greeting = ({name}) => {

      return (
        
        <div className="text-center">
              <h1> Hello {name}! Have a great day!!!!</h1>
        </div>
      );
    };
  
export default Greeting;
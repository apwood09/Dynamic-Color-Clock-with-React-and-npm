import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import './App.css'

// function to call app 
function App() {
  const [time, setTime] = useState(new Date());

  // interval effect: countown ms too next minnute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); 
  }, []);

  // return clock displyed 
  return (
    <div className="app-container">
      <div className="clock-card">
        <p className="clock-text">
          {format(time, 'hh:mm:ss aa')}
        </p>
      </div>
    </div>
  );
}

export default App;

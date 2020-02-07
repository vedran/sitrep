import React, { useState, useEffect } from 'react';

import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:4001')

function App() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    socket.on("clock", newTime => {
      setTime(new Date(newTime));
    });
  }, []);
   

  return (
    <div>
      {time.toISOString()}
    </div>
  );
}

export default App;

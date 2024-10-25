import React, { useEffect, useState } from 'react';

const Loader = () => {
  const sandFrames = [
    "⠁", "⠂", "⠄", "⡀", "⡈", "⡐", "⡠", "⣀", "⣁", 
    "⣂", "⣄", "⣌", "⣔", "⣤", "⣥", "⣦", "⣮", "⣶", 
    "⣷", "⣿", "⡿", "⠿", "⢟", "⠟", "⡛", "⠛", 
    "⠫", "⢋", "⠋", "⠍", "⡉", "⠉", "⠑", "⠡", "⢁"
  ];
  
  const interval = 80; // interval from your configuration
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % sandFrames.length);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: '24px', textAlign: 'center', padding: '20px' }}>
      {sandFrames[frameIndex]}
    </div>
  );
};

export default Loader;

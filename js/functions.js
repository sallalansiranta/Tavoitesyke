'use strict'

const calculateHeartRateLimits = () => {
  const age = document.querySelector('#age').value;
  
  if (age) {
    const lowerLimit = (220 - age) * 0.65;
    const upperLimit = (220 - age) * 0.85;
    
    document.querySelector('#limits').innerHTML = `${lowerLimit.toFixed(0)}-${upperLimit.toFixed(0)}`;
  } else {
    document.querySelector('#limits').innerHTML = 'Please enter your age';
  }
};

document.querySelector('#calculate-btn').addEventListener('click', calculateHeartRateLimits);

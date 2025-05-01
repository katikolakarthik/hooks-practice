import { useState, useRef } from 'react';

const NumberTracker = () => {
const [currentNumber, setCurrentNumber] = useState(0);
const previousNumber = useRef(0);

  const handleUpdate = () => {
    previousNumber.current = currentNumber;
    setCurrentNumber(currentNumber => currentNumber + 1);
  };

  return (
    <div>
      <h2>Number Tracker</h2>
      <div>
        <p>Current number: {currentNumber}</p>
        <p>Previous number: {previousNumber.current}</p>
        <button onClick={handleUpdate}>
          Update Number
        </button>
      </div>
    </div>
  );
};

export default NumberTracker; 
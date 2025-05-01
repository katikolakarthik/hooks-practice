import { useState, useRef } from 'react';

const RenderDemoComponent = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const incrementState = () => {
    setStateCount(prev => prev + 1);
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log('Ref count:', refCount.current);
  };

  console.log('Component rendered!');

  return (
    <div>
      <h2>Re-render Demonstration</h2>
      <div>
        <div>
          <p>useState count (causes re-render): {stateCount}</p>
          <button onClick={incrementState}>
            Increment State
          </button>
        </div>
        <div>
          <p>useRef count (check console): {refCount.current}</p>
          <button onClick={incrementRef}>
            Increment Ref
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderDemoComponent; 
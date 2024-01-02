import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const Visualization = () => {
  const result=useSelector((state)=>state.binary.result)
  const array=useSelector((state)=>state.binary.array)
  const left=useSelector((state)=>state.binary.left)
  const right=useSelector((state)=>state.binary.right)
  return (
    <div className="binary-visualizer">
      <h2>Binary Search Visualization</h2>
      <div className="array">
        {array?.map((num, index) => (
          <div
            key={index}
            className={`array-element ${index < left || index>right? 'inactive' : ''} $`}
          >
            {num}
          </div>
        ))}
      </div>
      <div className='result'>{ result === -1 ? <div>Not Found</div> : <div>Element found at {result+1}</div>}
      </div>
    </div>
  );
};

export default Visualization;


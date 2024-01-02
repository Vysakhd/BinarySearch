import React, { useState } from 'react';
import '../App.css'
import { useDispatch } from "react-redux";
import { setresult,settarget,setInputArray,setleft,setright } from '../redux/binarySlice';

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [executionTime, setExecutionTime] = useState(null);
  const dispatch=useDispatch()
 const handleInputChange=(e)=>{
  const value=e.target.value.split(',').map(Number)
  setArray(value)
  dispatch(setInputArray(value))
 }

  const binarySearch = async () => {
    const startTime = performance.now(); 
    let left = 0;
    dispatch(setleft(left))
    let right = array.length - 1;
    dispatch(setright(right))

    while (left <= right) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      const mid = Math.floor((left + right) / 2);
      
      if (array[mid] === target) {
        dispatch(setleft(mid));
        dispatch(setright(mid));
        dispatch(setresult(mid))
        const endTime = performance.now(); 
        setExecutionTime(endTime - startTime); 
        return;
      } else if (array[mid] < target) {
        left = mid + 1;
        
        dispatch(setleft(left))
      } else {
        right = mid - 1;
        dispatch(setright(right))
      }
    }

    dispatch(setresult(-1))
    const endTime = performance.now(); 
    setExecutionTime(endTime - startTime); 
  };

  return (
    <div className='binary'>
      <h1>Binary Search</h1>
      <div className='first'>
        <label>
          Enter numbers:
          <input
            type="text"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <br />
      <div className='second'>
        <label>
          Number to be searched:
          <input
            type="text"
            value={target}
            onChange={(e) => {setTarget(Number(e.target.value));
            dispatch(settarget(target))}}
          />
        </label>
      </div>
      <br />
      <button onClick={binarySearch}>Search</button>
      <br />
      {executionTime !== null && <p>Execution Time: {executionTime.toFixed(2)} milliseconds</p>}
    </div>
  );
};

export default BinarySearch;

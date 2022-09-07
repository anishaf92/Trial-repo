import React, { useState } from 'react';

function increment(n){
  return n + 1;
}
function decrement(n){
    return n - 1;
  }

function Counter() {
  const [n, setN] = useState(0);
  
  return (
    <div>
        <span>{n}</span>
        <br></br>
        <button 
         onClick={() => setN(increment)}>
           Increment 
        </button>
        <br></br>
        <button 
         onClick={() => setN(decrement)}>
           Decrement 
        </button>
    </div>
  );
}

export default Counter;
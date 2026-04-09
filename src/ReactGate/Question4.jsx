import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [secNames, setSecNames] = useState([])

  useEffect(() => {
    let timer = setInterval(() => {
        if(names.length === 0){
            clearInterval(timer)
        }
        let n = names.shift()
        setSecNames(prev => [...prev, n])
    }, 2000)

    return () => clearInterval(timer)
  }, [initialNames])

  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {secNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;

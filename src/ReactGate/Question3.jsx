import React, { useState } from 'react';

function ToggleButtons() {

 const initialColors = [
    {id: 1, color: 'gray'},
    {id: 2, color: 'gray'},
    {id: 3, color: 'gray'},
    {id: 4, color: 'gray'},
    {id: 5, color: 'gray'},
];  
 const [buttonColors, setButtonColors] = useState(initialColors);

 function handleClick(id){
    setButtonColors(prev => {
        return prev.map(obj => ({...obj, color: obj.id === id ? (obj.color === 'blue' ? 'gray' : 'blue') : obj.color}))
    })

 }
 
 return (
   <div>
     {buttonColors.map(btn => (
       <button
         key={btn.id}
         style={{ backgroundColor: btn.color, padding: '10px', margin: '5px', border: 'none' }}
         onClick={() => handleClick(btn.id)}
       >
         Button {btn.id}
       </button>
     ))}
   </div>
	);
}

export default ToggleButtons;


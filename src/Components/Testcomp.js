import React, { useState } from 'react';
import Testcompchild from './Testcompchild';


const Testcomp = () => {
    const [counter, setCounter] = useState(false);
    const onClick = ()=>{
        console.log("i am in");
        setCounter(!counter);
        console.log(counter);
    }
  return (
    <div>
        Vandana
        <button onClick={()=> onClick()}>
            Submit
        </button>
        {counter ? <Testcompchild arpit="10"/> : null }
        
    </div>
  );
}

export default Testcomp;

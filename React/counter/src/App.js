import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = ()=>{
     setCount(count + 1);
  }

  const handleDecrement = ()=>{
    if( count === 0) {
      return
    }
    setCount(count - 1);
  }


  return (
    <div>
        
          
          <div className='container'>
          <h1 className='heading'>Lets start counting!</h1>
            <div className='count'>{count}</div>
          <div className=''></div>
        
          <button onClick={handleDecrement} className='button-6'>-</button>
          <button onClick={handleIncrement} className='button-6'>+</button>
          </div>
      
    </div>
  );
}

export default App;

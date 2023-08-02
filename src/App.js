import { useState } from 'react';
import './index.css';


export default function MyApp(){

  return(
    <div>
      <h1>Number of likes</h1>
      <MyButton/>
      <MyButton/>
    </div>
  );
}
function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount (count + 1);
  }
  return(
    <button className="btns" onClick={handleClick}>
      Liked {count} times
    </button>
  );
}

import { useState } from 'react';
import './index.css';


export default function MyApp(){
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount (count + 1);
  }
  return(
    <div>
      <h1>Number of likes</h1>
      <MyButton count={count} onclick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  );
}
function MyButton({count, onClick}){
return(
    <button className="btns" onClick={onClick}>
      Liked {count} times
    </button>
  );
}


import React ,{useState,useRef} from 'react';


const Renderfun = ()=>{
 const [count,setCount] = useState(10)
  const rendercount = useRef(0)

 const increment = (e)=>{
  e.preventDefault();
  setCount(count+1)
  rendercount.current = rendercount.current + 1
 }
  return(
    <div>
        <h1>Render Counter</h1>
      <p>count : {count}</p>
      <p>rendercount:{rendercount.current}</p>
      <button onClick={increment}>increment</button>
      
    </div>
  )
}
export default Renderfun;


import React, {useRef} from "react";


const Focusfun = () =>{
const name = useRef();
const handle = (e)=>{
  e.preventDefault()
  name.current.focus();
}






  return(
    <div>
      <br /><br />
      <h1>Focus Button</h1>
      <label htmlFor="">Name</label>
      <input type="text" ref={name} />
      <button onClick={handle}>FocusButton</button>
    </div>
  )
}
export default Focusfun;
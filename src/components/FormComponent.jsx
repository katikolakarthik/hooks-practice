import React ,{useRef} from "react";

const Myfunction = ()=>{
const nameref = useRef();
const passwordref= useRef();



const handler = (e)=>{
    e.preventDefault();
    console.log(nameref.current.value)
    console.log(passwordref.current.value)
}






  return(
    <div>
      <form action="" onSubmit={handler}>
      <label htmlFor="">Name:</label>
      <input type="text" ref={nameref}/>
      <label htmlFor="">Name:</label>
      <input type="password" ref={passwordref}/>
      <button>submit</button>


      </form>
    </div>
  )
}
export default Myfunction;
import {React,useState} from 'react';


const Usestate = () =>{

const [live , setLive] = useState("presnt i am live if u click a button i deied")
const handle = (e)=>{
    setLive("died")
}


    return(
        <div>

        <p>{live}</p>
        <button onClick={handle}>dont click</button>
        

        </div>
    )
}
export default Usestate;
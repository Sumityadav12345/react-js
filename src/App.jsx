import { useState } from "react"
import Counter from "./Counter";
import User from "./User";
import User1 from "./User1";
import Student from "./Student";
import Wrapper from "./wrapper";

function App(){
  const[fruit,setFruit]=useState("Apple");
  const[display,setDisplay]=useState(true);
  const[val,setVal]=useState("")
  const handleFruit=()=>{
    setFruit("banana")
  }
  let userObject={
    name:"sumit yadav",
    age:22,
    email:"sumit@gmail.com"
  }
  let userObject1={
    name:"sahil yadav",
    age:21,
    email:"sahil@gmail.com"
  }
  let userObject2={
    name:"satish yadav",
    age:20,
    email:"satish@gmail.com"
  }

  const[student,setStudent]=useState("suu")
  return(
    <div>
      <h1>State in react js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter/>
      <h1>Tgggle in react js</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {/* {
        display?<h1>Sumit yadav</h1>:null
      } */}
      {
        display?<User/>:null
      }

      <h1>Props in react js</h1>
      
      {/* <User1 name="Sumit yadav" age={22} email="ysumit@gmail.com"/> */}
      <User1 user={userObject}/>
      <User1 user={userObject1}/>
      <User1 user={userObject2}/>

    {student && <Student name={student}/>}
    <button onClick={()=>setStudent("buuu")}>Update student name</button>


  <Wrapper colore="orenge">
    <h1>hello everone</h1>
  </Wrapper>
  <Wrapper color="red">
    <h1>hello sumit</h1>
  </Wrapper>
  <Wrapper color="blue">
    <h1 >hello sahil</h1>
  </Wrapper>

  <h1>Get Input field Value</h1>
  <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="enter your name"></input>
  <h1>{val}</h1>
  <button onClick={()=>setVal("")}>clear value</button>
    </div>
  )
}
export default App
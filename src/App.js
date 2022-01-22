import { useState } from "react";
import Header from "./components/Header";
// import FeedBackItem from "./components/FeedBackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedBackData";
import Card from "./components/shared/Card";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import {v4 as uuidv4} from 'uuid';

function App(){

   const[feedback, setfeedBack] = useState(FeedbackData)

   const addFeedback = (newFeedback)=>{
     newFeedback.id= uuidv4()
    //  console.log(newFeedback);
    setfeedBack([newFeedback,...feedback])

   }
   const deleteFeedback = (id) => {
    //  console.log('App', id)
    if(window.confirm('Are you sure you want to delete?')){
      setfeedBack(feedback.filter((item) => item.id !== id))
    }
   }
   return(
     <>
     
     <Header/>
     <div className="container">
     <FeedBackForm handleAdd={addFeedback}/>
    <FeedBackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} 
      handleDelete={deleteFeedback}/>
     <Card>Hello, User</Card> 
     </div>  
     </>
   )
}

export default App

 /*
   return(
     <>
    1 <Header text="Hello World"/>
    2 <Header text={"FeedBack App"}/>
    3  <Header bgColor="red" textColor="blue"/>
     <div>
     <h1>My App</h1>
     </div>  
     </>
   )
}

export default App
   */
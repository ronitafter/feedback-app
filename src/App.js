import { useState } from "react";
import Header from "./components/Header";
// import FeedBackItem from "./components/FeedBackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedBackData";
import Card from "./components/shared/Card";


function App(){

   const[feedback, setfeedBack] = useState(FeedbackData);
   const deleteFeedback = (id) => {
    //  console.log('App', id)
    if(window.confirm('Are you sure you want to delete?')){
      setfeedBack(feedback.filter((item) => item.id !== id))
    }
   }

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
 
   return(
     <>
     
     <Header/>
     <div>
      <FeedbackList feedback={feedback} 
      handleDelete={deleteFeedback}/>
     <Card>Hello, App</Card> 
     </div>  
     </>
   )
}

export default App
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
// import FeedBackItem from "./components/FeedBackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedBackData";
import Card from "./components/shared/Card";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import {v4 as uuidv4} from 'uuid';
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

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
     <Router>
     <Header/>
     <div className="container">
     <Routes>
     <Route exact path='/' element={
       <>
         <FeedBackForm handleAdd={addFeedback}/>
    <FeedBackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} 
      handleDelete={deleteFeedback}/>
       </>
     }>
   
      </Route>
      <Route path='/about' element={<About/>}/>
      </Routes>
    <Card>Hello, User</Card> 
     <AboutIconLink/>
     </div>  
     </Router>
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
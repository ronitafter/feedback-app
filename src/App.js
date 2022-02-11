import { useState } from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Card from "./components/shared/Card";
import Header from "./components/Header";
// import FeedBackItem from "./components/FeedBackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedBackData";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import {v4 as uuidv4} from 'uuid';
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
// import Post from "./components/Post.jsx";
import { FeedbackProvider } from "./context/FeedbackContext";
function App(){

   const[feedback, setfeedBack] = useState(FeedbackData)

   const addFeedback = (newFeedback)=>{
     newFeedback.id= uuidv4()
    //  console.log(newFeedback);
    setfeedBack([newFeedback,...feedback])

   }
  
   return (
     <FeedbackProvider>
       <Router>
         <Header />
         <div className="container">
           <Routes>
             <Route
               exact
               path="/"
               element={
                 <>
                   <FeedBackForm handleAdd={addFeedback} />
                   <FeedBackStats/>
                   <FeedbackList 
                    //  feedback={feedback}
                     handleDelete={deleteFeedback}
                   />
                 </>
               }
             ></Route>
             <Route path="/about" element={<About />} />
             {/*<Route path="/post/:id/:name" element={<Post />} />*/}
             {/*<Route path="/post/*"" element={<Post />} />*/}
           </Routes>
           {/*<Card>Hello, User</Card>*/}
           {/*<Card>
      <NavLink to='/' activeClassName='active'>
        NavLink Home
      </NavLink>
       <NavLink to='/about' activeClassName='active'>
        NavLink About
      </NavLink>
    </Card>*/}
           <AboutIconLink />
         </div>
       </Router>
     </FeedbackProvider>
   );
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
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";



const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
   const [feedback, setFeedback] = useState([
      {
         id: 1,
         text: 'feedback item 1',
         rating: 10
      },
      {
         id: 2,
         text: 'feedback item 2',
         rating: 8
      },
      {
         id: 3,
         text: 'feedback item 3',
         rating: 7
      }
   ])

   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
   })

   //add feedback
   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      //  console.log(newFeedback);
      setFeedback([newFeedback, ...feedback]);
   };

   //delete feedback
   const deleteFeedback = (id) => {
      //  console.log('App', id)
      if (window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id))
      }
   }

   //update feedback
   const updateFeedback = ((id, updItem) => {
      // console.log(id, updItem);
      setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item))

   })

   //set item to be updated
   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true

      })
   }
   return <FeedbackContext.Provider value={{
      feedback,
      updateFeedback,
      deleteFeedback,
      addFeedback,
      //fanction
      editFeedback,
      //state
      feedbackEdit,
   }}>
      {children}
   </FeedbackContext.Provider>

}

export default FeedbackContext
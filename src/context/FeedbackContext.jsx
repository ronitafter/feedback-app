import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";



const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
   //states
   //boolean
   const [isLoading, setIsLoading] = useState(true)
   //array
   const [feedback, setFeedback] = useState([])
      // {
      //    id: 1,
      //    text: 'feedback item 1',
      //    rating: 10
      // },
      // {
      //    id: 2,
      //    text: 'feedback item 2',
      //    rating: 8
      // },
      // {
      //    id: 3,
      //    text: 'feedback item 3',
      //    rating: 7
      // }
   // ])

   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
   })

   useEffect(() =>{
      // console.log(123);
      fetchFeedback()
   },[])

   //fetch feedback
   const fetchFeedback = async () =>{
      const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      // console.log(data);
      setFeedback(data)
      setIsLoading(false)
   }

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
      isLoading,
   }}>
      {children}
   </FeedbackContext.Provider>

}

export default FeedbackContext
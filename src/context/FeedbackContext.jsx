import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";



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

   useEffect(() => {
      // console.log(123);
      fetchFeedback()
   }, [])

   //fetch feedback
   //()`http://localhost:5000/feedback?_sort=id&_order=desc`)
   const fetchFeedback = async () => {
      const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      // console.log(data);
      setFeedback(data)
      setIsLoading(false)
   }

   //add feedback
   const addFeedback = async (newFeedback) => {
      const response = await fetch('/feedback', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newFeedback),
      })

      const data = await response.json()
      // newFeedback.id = uuidv4();
      //  console.log(newFeedback);
      setFeedback([data, ...feedback]);
      //setFeedback([newFeedback, ...feedback]); 

   };

   //delete feedback
   const deleteFeedback = async (id) => {
      //  console.log('App', id)
      if (window.confirm('Are you sure you want to delete?')) {
         await fetch(`/feedback/${id}`, { method: 'DELETE' })
         setFeedback(feedback.filter((item) => item.id !== id))
      }
   }

   //update feedback
    const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()


   setFeedback(feedback.map((item) => (item.id === id ? data : item)))

       setFeedbackEdit({
          item: {},
          edit: false,
       })
    }


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
   }}
   >
      {children}
   </FeedbackContext.Provider>
}
export default FeedbackContext
import { createContext, useState } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
   const [feedback, useFeedback] = useState([
      {
         id: 1,
         text: 'item from Context',
         rating: 10
      }
   ])
   return <FeedbackContext.Provider value={{
      feedback,
   }}>
      {children}
   </FeedbackContext.Provider>

}

export default FeedbackContext
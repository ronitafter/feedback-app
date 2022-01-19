import React from 'react'
import FeedBackItem from './FeedBackItem';
import PropTypes from "prop-types";


function FeedbackList({feedback, handleDelete}) {
   // console.log(feedback);
   if (!feedback || feedback.length === 0) {
      return <p>No Feedback Yet</p>
   }
   return (
      <div className='feedback-list'>
         {feedback.map((item) =>(
            <FeedBackItem key={item.id} 
            item={item} 
            handleDelete={handleDelete}/>
            // handleDelete={(id) => console.log(id)}/>
         ))}

       
      </div>
   )
}

FeedbackList.propTypes = {
   feedback: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         text: PropTypes.string.isRequired,
         rating: PropTypes.number.isRequired,


      })
   )
} 
export default FeedbackList

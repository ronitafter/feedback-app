import React from 'react';
import Card from './shared/Card';
import PropTypes from "prop-types";
import {FaTimes, FaEdit} from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
// import { useState } from 'react';

function FeedBackItem({item}) {
   const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
   return (
      <Card>
         <div className='num-display'>{item.rating}</div>
         {/* <button onClick={() => console.log(item.id)} className="close"> 
         handleDelete(item.id)} */}
         <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimes color='purple' />
         </button>
         <button onClick={() => editFeedback(item)} className="edit">
            <FaEdit color='purple'/>
         </button>
         <div className="text-display">{item.text}</div>
         {/* <button onClick={handleClick}>Submit</button>         */}
      </Card>
   )
   }
   
   FeedBackItem.propTypes = {
   item: PropTypes.object.isRequired,
   }
   export default FeedBackItem
   //function FeedBackItem({item, handleDelete}) {

   // const handleClick = (id) => {
   //    console.log(id);
   // }
   //      <div className='card'>
//      <Card reverse={true}>

   // const [rating, setRating] = useState(7);
   //    const [text, setText] = useState("feed back item example");
   //    const handleClick = () => {
   //       // setRating(10)
   //       setRating((prev) =>{
   //          console.log(prev)
   //          return prev + 1
   //       })
   //    }

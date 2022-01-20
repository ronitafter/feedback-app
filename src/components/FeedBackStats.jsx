import React from 'react';

function FeedBackStats({feedback}) {
  return <div className='feedback-stats'>
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: 20</h4>
  </div>;
 
}

export default FeedBackStats;

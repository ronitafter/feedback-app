import React from 'react';
import {FaQuestion} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function AboutIconLink() {
  return( 
  <div className='about-link'>
     <Link to="/about">
        {/* <p><Link to={{
            pathname: '/about',
            search: '?sort=name',
            hash: '#hello',
             }}> */}
          <FaQuestion size={30}/>       
          {/* Home...</Link></p> */}
     </Link>
  </div>
  )
}

export default AboutIconLink;

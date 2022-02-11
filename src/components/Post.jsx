// import React from 'react';
// //1. import {useParams} from 'react-router-dom';
// //2.Navigate - for redirecting
// import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';

// function Post() {
//    const status = 200;
//    const navigate = useNavigate()
//    const onClick = () => {
//       console.log("object");
//       navigate('/about')
//    }
//    if (status === 404) {
//       return <Navigate to='/notfound' />

//    }
//    // const params = useParams();
//    return (
//       <div>
//          <h1>POST</h1>
//          <button onClick={onClick}>Click</button>
//          <Routes>
//             <Route path='/show' element={<h1>Hey</h1>}/>
//          </Routes>
//          {/*<h1>Post {params.id}</h1>*/}
//          {/* <p>Name: {params.name}</p>*/}
//       </div>

//    )
// }

// export default Post;

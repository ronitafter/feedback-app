import React from 'react';
import Card from '../components/shared/Card';

function About() {
  return <Card>
     <div className="about">
         <h1>About This Project</h1>
         <p>this is a react app to leave feedback for a product or service</p>
         <p>version: 1.0.0</p>
         <p><a href="">Home...</a></p>
     </div>
  </Card>;
}

export default About;

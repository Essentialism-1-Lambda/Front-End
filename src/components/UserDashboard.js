
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Unit3-React-Folder/utils/axiosWithAuth';

import ValueCard from './ValueCard';
import Projects from './Projects.js';

// api will be used to pull and render user information, or we can store it into a usercontext
// will be a private route, along with onboarding

export default function UserDashboard() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosWithAuth()
          .get("https://water-my-plants-backend-vw.herokuapp.com/user")
          .then(res => {
              console.log('profile effect ', res.data)
              setUser(res.data)
            }
          )
          .catch(err => console.log(err));
          console.log("this is user from API", user);
    }, [])

    return (
        <div className="dashboard-container">
            <div className="dashboard-welcome">
                {/* Welcome {user}. View your values and add/edit your projects */}

                {
                    // user.map(user => ( 
                    //           <div key={user.id} className='projects'>
                    //               <p>Project: {user.project}</p>
                    //               <p>details: {user.details}</p>
                    //               <p>time: {user.time}</p>
                    //           </div>
                    //   )
                    // )
                }

            </div>
            <div className="dashboard-values">
                <ValueCard />
            </div>
            <div className="dashboard-projects">
                <Projects />
            </div>

        </div>
    )
}


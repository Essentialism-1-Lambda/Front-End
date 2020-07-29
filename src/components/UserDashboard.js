
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
          .get("https://essentialism-bw.herokuapp.com/api/projects")
          .then(res => {
              console.log('dashboard effect ', res.data)
              setUser(res.data)
            }
          )
          .catch(err => console.log(err));
          console.log("this is user from API", user);
    }, [])

    return (
        <div className="dashboard-container">
            <div className="dashboard-welcome">
                {/* Welcome {user.name}. View your values and add/edit your projects */}

            </div>
            <div className="dashboard-values">
                <ValueCard />
            </div>
            <div className="dashboard-projects">
                <Projects />

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

        </div>
    )
}


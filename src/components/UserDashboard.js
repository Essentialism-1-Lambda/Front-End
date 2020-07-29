
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Unit3-React-Folder/utils/axiosWithAuth';

import ValueCard from './ValueCard';
import Projects from './Projects.js';

// api will be used to pull and render user information, or we can store it into a usercontext
// will be a private route, along with onboarding

export default function UserDashboard() {
    const [user, setUser] = useState([]);

    const completeUserStub = {
        id: 99,
        name: 'Test User',
        email: 'test@test.com',
        values: [1,2,4,5,6,10],
        projects: [
          {
            name: 'Make stubs',
            desc: 'Make stubs while waiting for the backend',
            values: [1]
          }
        ],
        topValues: {
          1: 1,
          2: 2,
          3: 6
        }
      };

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
                {/* <ValueCard /> */}
            </div>
            <div className="dashboard-projects">
                {/* <Projects /> */}

                {
                    user.map(user => ( 
                              <div key={completeUserStub.id} className='projects'>
                                  <p>Project: {completeUserStub.project}</p>
                                  <p>desc: {completeUserStub.details}</p>
                                  <p>time: {completeUserStub.time}</p>
                              </div>
                      )
                    )
                }
            </div>

        </div>
    )
}


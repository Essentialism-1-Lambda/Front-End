
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { userData } from '../DataStubs/data.js';


import ValueCard from './ValueCard';
// import ProjectList from './ProjectList';
// import ProjectForm from './ProjectForm';

    // api will be used to pull and render user information, or we can store it into a usercontext
    // will be a private route, along with onboarding

export default function UserDashboard() {
    const [user, setUser] = useState(userData);
    // const [project, setProject] = useState([]);
    const [values, setValues ] = useState(userData);

    useEffect(() => {
        axiosWithAuth()
          .get("https://essentialism-bw.herokuapp.com/api/users")
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
                Welcome <span><b>{`${user.name}`}</b></span>, view your values and add or delete your projects
            </div>
            <div className="dashboard-values">
                <ValueCard
						values={values}
                        userValues={user.values}
                />
            </div>
            <div className="dashboard-projects">
                {/* <ProjectList projects={user.projects} /> */}

            </div>
            <div className="dashboard-add-projects">
                {/* <ProjectForm projects={user.projects} /> */}
            </div>

        </div>
    )
}


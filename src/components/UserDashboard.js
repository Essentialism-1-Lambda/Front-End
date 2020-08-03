
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
    // const [projects, setProjects] = useState(userData);
    const [values, setValues ] = useState(userData);

    // if context were active
    // const user = useContext(UserContext);
    // const values = useContext(ValueContext);

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
    }, [setUser, user])

    return (
        <div className="dashboard-top-container">
            <div className="dashboard-top">
                <div className="dashboard-welcome">
                        <h2>
                            Welcome <span><u>{`${user.name}`}</u></span>, view your values and add or delete your projects
                        </h2>
                </div>
                <div className="dashboard-values">
                    <ValueCard
                            values={values}
                            userValues={user.values}
                    />
                </div>
            </div>

            <br />
                
            <div className="dashboard-bot">
                <div className="dashboard-add-projects">
                    <h3>Project form here</h3>
                    {/* <ProjectForm 
                        projects={projects}
                        userProjects={user.projects} /> */}
                </div>
                <br />
                <div className="dashboard-projects">
                    <h3>Project list here</h3>
                    {/* <ProjectList projects={user.projects} /> */}
                </div>
            </div>

        </div>
    )
}


import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth';

import "../index.css";


// Users
// GET /api/users
// GET /api/users/(ID)

// Delete /api/users/(ID)
// Update PUT /api/users/(ID)

// Projects
// GET /api/users/(ID)/project
// GET (by project id) /api/users/(ID)/project/( ProjectID )

// update /api/users/(ID)/project/( ProjectID )
// Delete /api/users/(ID)/project/( ProjectID )

// Values
// GET /api/values
// GET ( users value by ID ) /api/users/(ID)/values/( ValuesID )

// Update /api/users/(ID)/values/( ValuesID )
// Delete /api/users/(ID)/values/( ValuesID )



const ProjectList = () => {
    
    const [listState, setListState] =useState([]);

    const userData = {
      id: 99,
      name: 'Test User',
      email: 'test@test.com',
      values: [1,2,4,5,6,10],
      projects: [
        {
          name: 'Make stubs',
          desc: 'Make stubs while waiting for the backend',
          time: '',
          values: [1]
        }
      ],
      topValues: {
        1: 1,
        2: 2,
        3: 6
      }
    };

    const deleteProject = project => {
        axiosWithAuth()
        .delete(`https://essentialism-bw.herokuapp.com/api/projects/${project.id}`)
        .then(response => {
            console.log('res ', response);
            setListState(listState.filter(item => item.name !== item.name));
        })
      };

    useEffect(() => {
        axiosWithAuth()
            .get("https://essentialism-bw.herokuapp.com/api/projects")
            .then(response => {
                setListState(response.data);
                console.log('list ', response.data);
        })
        .catch(err => console.log(err));
    }, [])


    return(
        <div className="projectListDiv">
          
            <h2>Your Projects</h2>
            <div className="projectContainer">
                {
                    listState.map((project, i) => {
                        return(
                          <div key={userData.projects.id} className='projects'>
                            <p>Project: {userData.projects.name}</p>
                            <p>desc: {userData.projects.desc}</p>
                            <p>time: {userData.projects.time}</p>
                            <p>values: {userData.projects.values}</p>
                          </div>
                        );
                     })
                }
            </div>  
        </div>
    );
};
export default ProjectList;
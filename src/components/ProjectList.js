// import React, { useContext, useState, useEffect } from "react";
import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { userData } from '../DataStubs/data';
import "../index.css";


// if context were used vs dummy data

// import React, { UseContext } from 'react';
// import { ProjectContext } from '../Context/ProjectContext';
// import { UserContext } from '../Context/UserContext';
    
// const ProjConsumer = ProjContext.Consumer;
// const {values, handleValueChange, setUser} = useContext(ProjectContext);


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



export default function ProjectList() {
    // const history = useHistory();
    // const {user} = useContext(UserContext);
    const [project] = useState(userData.projects);


    // const [listState] = useState({
    //   name: '',
    //   desc: '',
    //   time: '',
    //   values: '',
    // });

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get(`users/${id}/projects`)
    //         .then(response => {
    //           console.log('project list', response);
    //           setListState(response.data);
    //           // push("/Projects")
    //     })
    //     .catch(err => console.log(err));
    // }, [])

    // const deleteProject = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //       .delete(`users/${id}/projects/${project.id}`)
    //         .then(response => {
    //             console.log('deleted project', response);
    //             setListState(listState.filter(item => `${userData.projects.name}` !== userData.projects.name));
    //             push("/Projects")
    //         })
    //         .catch(err => console.log(err));
    //   };

    return(
        <div className="project-list-div">
            <div className="project-container">
                {project.map( (project, i) => {
                    return(
                      <div className='project' key={i}>
                        <p>----------------------------------</p>
                        <p>Project: {project.name}</p>
                        <p>desc: {project.desc}</p>
                        <p>time: {project.time}</p>
                        <p>value: {project.values}</p>
                          <button className="delete-proj-btn">
                          {/* <button className="delete-prop-btn" onClick={() => deleteProject(project)}> */}
                            Delete
                          </button>
                      </div>
                    );
                  })
                }
            </div>  
        </div>
    );
};

        //                   {/* <button
        //                       className="edit-btn" 
        //                       onClick={() => push(`https://essentialism-bw.herokuapp.com/api/user/${id}/projects/${project.id}`)}>
        //                         Edit
                          
        //                   </button> */}
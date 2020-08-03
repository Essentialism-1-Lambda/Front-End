// import React, {  useState, useEffect } from "react";
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



export default function ProjectList() {
    // const history = useHistory();
    // const {user} = useContext(UserContext);
    
    // const [list, setListState] = useState([]);
    const [projectList] = useState(userData.projects);

    // const deleteProject = project => {
    //     axiosWithAuth()
    //       .delete(`users/${id}/projects/${project.id}`)
    //         .then(res => {
    //             console.log('deleted project', res);
    //             setListState(listState.filter(item => item.name !== project.name))
    //         })
    //         .catch(err => console.log(err));
    // };

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get(`users/${id}/projects`)
    //         .then(res => {
    //           console.log('project list', res);
    //           setListState(res.data);
    //           // push("/Projects")
    //     })
    //     .catch(err => console.log(err));
    // }, [])

    

    return(
        <div className="project-list-div">
            <div className="project-container">
                {
                  projectList.map( (project, i) => {
                    return(
                      <div className='project' key={i}>
                        <p>-------------------------------------------------</p>
                        <p>Project: {projectList.name}</p>
                        <p>desc: {projectList.desc}</p>
                        <p>time: {projectList.time}</p>
                        <p>value: {projectList.values}</p>
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


    //                   {/* <button
    //                       className="edit-btn" 
    //                       onClick={() => push(`https://essentialism-bw.herokuapp.com/api/user/${id}/projects/${project.id}`)}>
    //                         Edit
                      
    //                   </button> */}
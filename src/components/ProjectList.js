import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { userData } from '../Datastubs/data';
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
    const { push } = useHistory();
    const [listState, setListState] =useState([]);

    const deleteProject = e => {
        e.preventDefault();
        axiosWithAuth()
          .delete(`https://essentialism-bw.herokuapp.com/api/user/${id}/projects/${project.id}`)
            .then(response => {
                console.log('deleted project', response);
                setListState(listState.filter(item => `${userData.projects.name}` !== userData.projects.name));
                push("/Projects")
            })
            .catch(err => console.log(err));
      };


    useEffect(() => {
        axiosWithAuth()
            .get("https://essentialism-bw.herokuapp.com/api/user/${id}/projects")
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
                            

                              <button className="delete-btn" onClick={deleteProject}>
                                Delete
                              </button>
            
                              {/* <button
                                  className="edit-btn" 
                                  onClick={() => push(`https://essentialism-bw.herokuapp.com/api/user/${id}/projects/${project.id}`)}>
                                    Edit
                              
                              </button> */}

                          </div>
                        );
                     })
                }
            </div>  
        </div>
    );
};
export default ProjectList;
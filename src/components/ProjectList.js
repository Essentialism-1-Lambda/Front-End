import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth';

import "../index.css";

const ProjectList = () => {
    
    const [listState, setListState] =useState([]);

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
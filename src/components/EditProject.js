import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/AxiosWithAuth";

const initialItem = {
    name: '',
    desc: '',
    time: '',
    values: '',
};

const EditProject = props => {
  const { push } = useHistory();
  const [item, setItem] = useState(initialItem);
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}/projects/${project.id}`)
      .then(res => {
        setItem(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const changeHandler = e => {
    e.persist();
    let value = 
     {[e.target.name] : e.target.value};
    }

    setItem({
      ...item,
      [e.target.name]: value
    });

    const formSubmit = e => {
      e.preventDefault();
      // make a PUT request to edit the item
      axiosWithAuth()
        .put(`/users/${id}/projects/${project.id}`, item)
        .then(res => {
          props.setItems(res.data);
          push(`/users/${id}/projects/${project.id}`);
        })
        .catch(err => console.log(err));
    };

    return (
      <div>
        <form onSubmit={formSubmit}>
                  <p  className='intake-header'>
                      Edit your project. 
                  </p>
                  <div className='form-style'>
                      <label htmlFor='name'>
                          <input 
                              type='text' 
                              name='name' 
                              id='name'
                              placeholder='Project Name'
                              value={formState.name}
                              onChange={inputChange} 
                          />
                      </label>
                          {errorState.name.length > 0 ? (
                          <p className='error'>{errorState.name}</p>
                          ) : null}
                      <label htmlFor='desc' className='descText'>
                          Describe the project you're working on:
                          <textarea 
                              name='desc' 
                              id='desc' 
                              placeholder='Describe'
                              value={formState.desc}
                              onChange={inputChange} 
                          />
                      </label>
                      <label htmlFor='time' className='timeDropdown'>
                          <select value={formState.time} onChange={inputChange}>
                              <option value="thirty">Less than 30 min</option>
                              <option value="oneHour">Less than 1 hr</option>
                              <option value="twoHours">less than 2 hrs</option>
                              <option value="fourHours">More than 4 hrs</option>
                          </select>
                      </label>
                  </div>
                  
                  <button disabled={buttonDisabled}>Save Project Form</button>
              </form>
      </div>
    );
};

export default EditProject;

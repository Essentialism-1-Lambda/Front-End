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
      .get(`https://essentialism-bw.herokuapp.com/api/users/${id}/projects/${project.id}`)
      .then(res => {
        // res.data
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
  };

  const formSubmit = e => {
    e.preventDefault();
    // make a PUT request to edit the item
    axiosWithAuth()
      .put(`https://essentialism-bw.herokuapp.com/api/users/${id}/projects/${project.id}`, item)
      .then(res => {
        // res.data
        props.setItems(res.data);
        push(`/item-list/${id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
                <p  className='intake-header'>
                    Record your projects. 
                </p>
                <div className='form-style'>
                    <label htmlFor='name' className='projectName'>
                        <input 
                            type='text' 
                            name='name' 
                            id='name'
                            placeholder='Project Name'
                            value={formState.project}
                            onChange={inputChange} 
                        />
                    </label>
                        {errorState.project.length > 0 ? (
                        <p className='error'>{errorState.project}</p>
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
                <pre>{JSON.stringify(post, null, 2)}</pre>
                
                <button disabled={buttonDisabled}>Add Project</button>
            </form>
    </div>
  );
};

export default EditProject;

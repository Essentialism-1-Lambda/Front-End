import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

// validation schema
const formSchema = yup.object().shape({
  project: yup.string().required('Project name is a required field.').min(2, 'That is not a project name.'),
  details: yup.string().required('Project details are required'),
  time: yup.string(),
});

const Projects = () => {
  // state to hold data for form inputs
  const [formState, setFormState] = useState({
    project: '',
    details: '',
    time: '',
  });

  // state for whether the button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // Every time the formState changes, check to see if it passes verification.
    //If it does, then enable the submit button, otherwise disable.
    useEffect(() => {
      formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
      });
  }, [formState]);

  // state to hold data for error messages
  const [errorState, setErrorState] = useState({
    project: '',
    details: '',
    time: '',
});

  // state to set the POST request. 
  const [post, setPost] = useState([]);

  // validation; validate event against the schema
  const validateChange = (e) => {
    let value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
        console.log('this is valid');
        setErrorState({
          ...errorState,
          [e.target.name]: ''
          });
      })
      .catch(err => {
        console.log('this is not valid');
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
    });
  };

  // onChange Function
  const inputChange = e => {
    e.persist();
    validateChange(e)
    let value = 
        e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    // console.log("name is: ", e.target.name);
    setFormState({ ...formState, [e.target.name]: value })
};

  // onSubmit Function
  // POSTs data to server
  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted!');

    axios
      .post('https://essentialism-bw.herokuapp.com/api/projects', formState)
      .then(response => {
        console.log(response)
        setPost(response.data);

        // reset form if successful
        setFormState({
            project: '',
            details: '',
            time: '',
        });
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className='project-body'>
    <form onSubmit={formSubmit}>
            <p  className='intake-header'>
                Start recording your projects! 
            </p>
            <div className='form-style'>
                <label htmlFor='project' className='projectTitle'>
                <input 
                    type='text' 
                    name='project' 
                    id='project'
                    placeholder='Project Name'
                    value={formState.project}
                    onChange={inputChange} 
                />
                </label>
                {errorState.project.length > 0 ? (
                <p className='error'>{errorState.project}</p>
                ) : null}

                 <label htmlFor='details' className='detailsText'>
                    Describe the project you're working on:
                    <textarea 
                        name='details' 
                        id='details' 
                        placeholder='Details'
                        value={formState.details}
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
                      
              </p>
            </div>
            <pre>{JSON.stringify(post, null, 2)}</pre> 
            <button disabled={buttonDisabled}>Sign Up</button> 
        </form>
      </div>
  )
}

export default Projects;
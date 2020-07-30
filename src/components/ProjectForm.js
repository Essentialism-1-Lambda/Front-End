import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';


const formSchema = yup.object().shape({
//   project: yup.string().required('Project name is a required field.').min(2, 'That is not a project name.'),
//   desc: yup.string().required('Project details are required'),
  name: yup.string(),
  desc: yup.string(),
  time: yup.string(),
  values: yup.string(),
});

const Projects = () => {

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

  
  const [formState, setFormState] = useState({
    name: '',
    desc: '',
    time: '',
    values: '',
  });


  const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
      formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
      });
  }, [formState]);


  const [errorState, setErrorState] = useState({
    name: '',
    desc: '',
    time: '',
    values: '',
});


  const [post, setPost] = useState([]);

  const validateChange = (e) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
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


  const inputChange = e => {
    e.persist();
    validateChange(e)
    let value = 
        e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value })
};

  const formSubmit = e => {
    e.preventDefault();
    console.log('Project form submitted!');
    axios
      .post('https://essentialism-bw.herokuapp.com/api/projects', formState)
      .then(response => {
        console.log(response)
        setPost(response.data);
        // props.history.push("/Projects")

        setFormState({
            name: '',
            desc: '',
            time: '',
            values: '',
        });
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className='project-body'>
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
  )
}

export default Projects;
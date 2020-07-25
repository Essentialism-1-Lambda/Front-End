import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

// validation schema
const formSchema = yup.object().shape({
  name: yup.string().required('Name is a required field.').min(2, 'That\'s not a name.'),
  email: yup.string(),
  password: yup.string(),
  family: yup.string(),
  environmental: yup.string(),
  financial: yup.string(),
  health: yup.string(),
  community: yup.string(),
  creativity: yup.string(),
  positivity: yup.string(),
  efficiency: yup.string(),
  loyalty: yup.string(),
  spirituality: yup.string(),
});

const Register = () => {
  // state to hold data for form inputs
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    family: '',
    environmental: '',
    financial: '',
    health: '',
    community: '',
    creativity: '',
    positivity: '',
    efficiency: '',
    loyalty: '',
    spirituality: ''
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
    name: '',
    email: '',
    password: '',
    family: '',
    environmental: '',
    financial: '',
    health: '',
    community: '',
    creativity: '',
    positivity: '',
    efficiency: '',
    loyalty: '',
    spirituality: ''
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
      .post('https://reqres.in/api/users', formState)
      .then(response => {
        console.log(response)
        setPost(response.data);

        // reset form if successful
        setFormState({
          name: '',
          email: '',
          password: '',
          family: '',
          environmental: '',
          financial: '',
          health: '',
          community: '',
          creativity: '',
          positivity: '',
          efficiency: '',
          loyalty: '',
          spirituality: ''
        });
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className='register-body'>
    <form onSubmit={formSubmit}>
            <p  className='intake-header'>
                Welcome to Essentialism.
                Let's get you started! 
            </p>
            <div className='form-style'>
                <label htmlFor='name' className='nameText'>
                <input 
                    type='text' 
                    name='name' 
                    id='name'
                    placeholder='Name'
                    value={formState.name}
                    onChange={inputChange} 
                />
                </label>
                {errorState.name.length > 0 ? (
                <p className='error'>{errorState.name}</p>
                ) : null}
                 <label htmlFor='email' className='emailText'>
                <input 
                    type='text' 
                    name='email' 
                    id='email' 
                    placeholder='Email'
                    value={formState.email}
                    onChange={inputChange} 
                />
                </label>
                <label htmlFor='password' className='passwordText'>
                <input 
                    type='text' 
                    name='password' 
                    id='password' 
                    placeholder='Password'
                    value={formState.password}
                    onChange={inputChange} 
                />
                </label>
                <p className='valuesCheckbox'>  Select 5 values that are most important to you.  
                <label htmlFor='family'>
                <input
                    type='checkbox'
                    id='family'
                    name='family'
                    checked={formState.family}
                    onChange={inputChange}
                    />
                    Family
                </label>
                <label htmlFor='environmental'>
                <input
                    type='checkbox'
                    id='environmental'
                    name='environmental'
                    checked={formState.environmental}
                    onChange={inputChange}
                />
                    Environmental
                </label>
                <label htmlFor='financial'>
                <input
                    type='checkbox'
                    id='financial'
                    name='financial'
                    checked={formState.financial}
                    onChange={inputChange}
                />
                    Financial
                </label>
                <label htmlFor='health'>
                <input
                    type='checkbox'
                    id='health'
                    name='health'
                    checked={formState.health}
                    onChange={inputChange}
                    />
                    Health and Wellness
                </label>
                <label htmlFor='community'>
                <input
                    type='checkbox'
                    id='community'
                    name='community'
                    checked={formState.community}
                    onChange={inputChange}
                    />
                    Community
                </label>
                <label htmlFor='creativity'>
                <input
                    type='checkbox'
                    id='creativity'
                    name='creativity'
                    checked={formState.creativity}
                    onChange={inputChange}
                    />
                    Creativity
                </label>
                <label htmlFor='positivity'>
                <input
                    type='checkbox'
                    id='positivity'
                    name='positivity'
                    checked={formState.positivity}
                    onChange={inputChange}
                    />
                    Positivity
                </label>
                <label htmlFor='efficiency'>
                <input
                    type='checkbox'
                    id='efficiency'
                    name='efficiency'
                    checked={formState.efficiency}
                    onChange={inputChange}
                    />
                    Efficiency
                </label>
                <label htmlFor='loyalty'>
                <input
                    type='checkbox'
                    id='loyalty'
                    name='loyalty'
                    checked={formState.loyalty}
                    onChange={inputChange}
                    />
                    Loyalty
                </label>
                <label htmlFor='spirituality'>
                <input
                    type='checkbox'
                    id='spirituality'
                    name='spirituality'
                    checked={formState.spirituality}
                    onChange={inputChange}
                    />
                    Spirituality
                </label>
              </p>
            </div>
            <pre>{JSON.stringify(post, null, 2)}</pre> 
            <button disabled={buttonDisabled}>Sign Up</button> 
        </form>
      </div>
  )
}

export default Register;
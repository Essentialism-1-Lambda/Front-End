import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

// validation schema
const formSchema = yup.object().shape({
  //Old Schema
  // name: yup.string().required('Name is a required field.').min(2, 'That\'s not a name.'),
  email: yup.string().required('An email is required.').email(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  password: yup.string().required('A password is required.').min(2, 'Your password must be at least 2 characters.')
});

const Register = () => {
  // state to hold data for form inputs
  const [formState, setFormState] = useState({
    // Old Schema
    // name: '',
    email: '',
    password: ''
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
    // Old Schema
    // name: '',
    email: '',
    password: ''
});

  // state to set the POST request.
  // const [post, setPost] = useState([]);

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
      .post('https://essentialism-bw.herokuapp.com/api/register', formState)
      .then(response => {
        console.log(response);
        // setPost(response.data);

        // reset form if successful
        setFormState({
          // name: '',
          email: '',
          password: ''
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
                {/* <label htmlFor='name' className='nameText'>
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
                ) : null} */}
                 <label htmlFor='email' className='emailText'>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={formState.email}
                    onChange={inputChange}
                />
                </label>
                <label htmlFor='password' className='passwordText'>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={formState.password}
                    onChange={inputChange}
                />
                </label>
            </div>
            {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
            <button disabled={buttonDisabled}>Sign Up</button>
        </form>
      </div>
  )
}

export default Register;
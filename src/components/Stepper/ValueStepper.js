import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { axiosWithAuth } from '../../utils/AxiosWithAuth';
import { ValueForm } from './AddValues';
import { Reflection } from './ReflectValues';
import {FinalValues} from './FinalForm';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

//Value stub in place until anendpoint is built
const valuesStub = [
  {
    id: 1,
    name: 'family',
  },
  {
    id: 2,
    name: 'environmental',
  },
  {
    id: 3,
    name: 'financial',
  },
  {
    id: 4,
    name: 'health',
  },
  {
    id: 5,
    name: 'community',
  },
  {
    id: 6,
    name: 'creativity',
  },
  {
    id: 7,
    name:  'positivity',
  },
  {
    id: 8,
    name: 'efficiency',
  },
  {
    id: 9,
    name: 'loyalty',
  },
  {
    id: 10,
    name: 'spirituality'
  }
];


function getSteps() {
	return [
		'Select your Values',
		'Why are these values important to you?',
		'Based on your introspection, narrow your choice to 3 values',
	];
}

export default function ValueStepper() {

	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();
	const id = useParams();
	const history = useHistory();
  const [userValues, setUserValues] = useState(valuesStub);
	const [reflection, setReflection] = useState('');
	// const [values, setValues]

  const handleValueChange = (input) => (event) =>
  setUserValues({
			...userValues,
			[input]: event.target.value,
		});

	const getStepContent = (stepIndex) => {
		switch (stepIndex) {
			case 0:
				return (
					<>
            <ValueForm
            userValues={userValues}
            handleValueChange={handleValueChange}
            />
					</>
				);
			case 1:
				return (
					<>
            <Reflection
            handleReflectChange={handleReflectChange}
            reflection={reflection}
            />
					</>
				);
			case 2:
				return (
          <>
            <FinalValues
              reflection={reflection}
              userValues={userValues}
              handleValueChange={handleValueChange}
            />
          </>
        );
			default:
				return 'Unknown stepIndex';
		}
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
  };

  const handleReflectChange = (input) => (event) =>
  setReflection({
			...reflection,
			[input]: event.target.value,
		});


	const handleSubmit = async () => {
		axiosWithAuth()
			.post(`${id}/values`, userValues)
			.then((res) => {
				console.log({ userValuesResponse: res.data });
				history.push(`/dashboard`);
			})
			.catch((err) => console.log({ userValues: err }));
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed
						</Typography>
						<Button onClick={handleSubmit}>Submit Values</Button>
						<Button onClick={handleReset}>Try again?</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>
							{getStepContent(activeStep)}
						</Typography>
						<div>
							<Button
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.backButton}>
								Back
							</Button>
							<Button variant='contained' color='primary' onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

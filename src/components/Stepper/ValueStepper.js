import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

import { axiosWithAuth } from '../../utils/AxiosWithAuth';
import { ValueForm } from './AddValues';
import { Reflection } from './ReflectValues';

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

const initialValues = {
	family: '',
	environmental: '',
	financial: '',
	health: '',
	community: '',
	creativity: '',
	positivity: '',
	efficiency: '',
	loyalty: '',
	spirituality: '',
};

function getSteps() {
	return [
		'Select your Values',
		'Why are these values important to you?',
		'Based on your introspection, narrow your choice to 3 values',
	];
}

export default function HorizontalLabelPositionBelowStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();
	const id = useParams();
	const history = useHistory();
  const [userValues, setUserValues] = useState(initialValues);
  const [reflection, setReflection] = useState('');

	const getStepContent = (stepIndex) => {
		switch (stepIndex) {
			case 0:
				return (
					<>
						<ValueForm setUserValues={setUserValues} userValues={userValues} />
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
				return 'This is the bit I really care about!';
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

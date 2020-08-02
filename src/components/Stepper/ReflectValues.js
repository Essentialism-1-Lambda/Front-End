import React from 'react';
import { TextField } from '@material-ui/core';

export const Reflection = (props) => {

	const {reflection, setReflection} = props;
	console.log(props.reflection);

	const handleChange = e => {
    setReflection(e.target.value)
	};

	return (
		<>
			<form>
				<label>What makes these values important to you?</label>
				<TextField
					placeholder='Enter your Answer'
					label='reflection'
					id='reflection'
					name='reflection'
					onChange={handleChange}
					value={reflection}
					margin='normal'
					variant='outlined'
					size='large'
				/>
			</form>
		</>
	);
};

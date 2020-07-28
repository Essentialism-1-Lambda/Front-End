import React from 'react';
import { TextField } from '@material-ui/core';

export const Reflection = (props) => {
  const {
      handleReflectChange,
      reflection,
    } = props;

	return (
		<>
			<form>
				<label>What makes these values important to you?</label>
				<TextField
					placeholder='Enter your Answer'
					label='reflection'
					onChange={handleReflectChange}
					value={reflection}
					margin='normal'
					variant='outlined'
				/>
				<input />
			</form>
		</>
	);
};

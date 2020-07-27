import React, { useState } from 'react';

export const ValueForm = (props) => {
	const [firstValues, setFirstValues] = useState(props.userValues);

	const handleChange = (input) => (event) =>
		setFirstValues({
			...firstValues,
			[input]: event.target.value,
		});

	return (
		<form>
			<div>
				<label htmlFor='family'>
					Family
					<input
						type='checkbox'
						id='family'
						name='family'
						checked={firstValues.family}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor='environmental'>
					Environmental
					<input
						type='checkbox'
						id='environmental'
						name='environmental'
						checked={firstValues.environmental}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor='financial'>
					<input
						type='checkbox'
						id='financial'
						name='financial'
						checked={firstValues.financial}
						onChange={handleChange}
					/>
					Financial
				</label>
				<label htmlFor='health'>
					<input
						type='checkbox'
						id='health'
						name='health'
						checked={firstValues.health}
						onChange={handleChange}
					/>
					Health and Wellness
				</label>
				<label htmlFor='community'>
					<input
						type='checkbox'
						id='community'
						name='community'
						checked={firstValues.community}
						onChange={handleChange}
					/>
					Community
				</label>
				<label htmlFor='creativity'>
					<input
						type='checkbox'
						id='creativity'
						name='creativity'
						checked={firstValues.creativity}
						onChange={handleChange}
					/>
					Creativity
				</label>
				<label htmlFor='positivity'>
					<input
						type='checkbox'
						id='positivity'
						name='positivity'
						checked={firstValues.positivity}
						onChange={handleChange}
					/>
					Positivity
				</label>
				<label htmlFor='efficiency'>
					<input
						type='checkbox'
						id='efficiency'
						name='efficiency'
						checked={firstValues.efficiency}
						onChange={handleChange}
					/>
					Efficiency
				</label>
				<label htmlFor='loyalty'>
					<input
						type='checkbox'
						id='loyalty'
						name='loyalty'
						checked={firstValues.loyalty}
						onChange={handleChange}
					/>
					Loyalty
				</label>
				<label htmlFor='spirituality'>
					<input
						type='checkbox'
						id='spirituality'
						name='spirituality'
						checked={firstValues.spirituality}
						onChange={handleChange}
					/>
					Spirituality
				</label>
			</div>
		</form>
	);
};

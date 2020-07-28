import React from 'react';


export const FinalValues = props => {

  const {reflection, userValues, handleValueChange} = props;

  return (
    <>
      <h2>{`Your Introspection: ${reflection}`}</h2>
      <br />
      <form>
			<div>
				<label htmlFor='family'>
					Family
					<input
						type='checkbox'
						id='family'
						name='family'
						checked={userValues.family}
						onChange={handleValueChange}
					/>
				</label>
				<label htmlFor='environmental'>
					Environmental
					<input
						type='checkbox'
						id='environmental'
						name='environmental'
						checked={userValues.environmental}
						onChange={handleValueChange}
					/>
				</label>
				<label htmlFor='financial'>
					<input
						type='checkbox'
						id='financial'
						name='financial'
						checked={userValues.financial}
						onChange={handleValueChange}
					/>
					Financial
				</label>
				<label htmlFor='health'>
					<input
						type='checkbox'
						id='health'
						name='health'
						checked={userValues.health}
						onChange={handleValueChange}
					/>
					Health and Wellness
				</label>
				<label htmlFor='community'>
					<input
						type='checkbox'
						id='community'
						name='community'
						checked={userValues.community}
						onChange={handleValueChange}
					/>
					Community
				</label>
				<label htmlFor='creativity'>
					<input
						type='checkbox'
						id='creativity'
						name='creativity'
						checked={userValues.creativity}
						onChange={handleValueChange}
					/>
					Creativity
				</label>
				<label htmlFor='positivity'>
					<input
						type='checkbox'
						id='positivity'
						name='positivity'
						checked={userValues.positivity}
						onChange={handleValueChange}
					/>
					Positivity
				</label>
				<label htmlFor='efficiency'>
					<input
						type='checkbox'
						id='efficiency'
						name='efficiency'
						checked={userValues.efficiency}
						onChange={handleValueChange}
					/>
					Efficiency
				</label>
				<label htmlFor='loyalty'>
					<input
						type='checkbox'
						id='loyalty'
						name='loyalty'
						checked={userValues.loyalty}
						onChange={handleValueChange}
					/>
					Loyalty
				</label>
				<label htmlFor='spirituality'>
					<input
						type='checkbox'
						id='spirituality'
						name='spirituality'
						checked={userValues.spirituality}
						onChange={handleValueChange}
					/>
					Spirituality
				</label>
			</div>
		</form>
    </>
  );
}
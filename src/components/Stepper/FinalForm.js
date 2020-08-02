import React from 'react';


export const FinalValues = props => {

  const {reflection, userValues, handleValueChange} = props;

  return (
    <>
      <h2>{'Based on your introspection, narrow your choices down to 3 values.'}</h2>
			<h3>{`Your Introspection: ${reflection}`}</h3>
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
					Financial
					<input
						type='checkbox'
						id='financial'
						name='financial'
						checked={userValues.financial}
						onChange={handleValueChange}
					/>

				</label>
				<label htmlFor='health'>
					Health and Wellness
					<input
						type='checkbox'
						id='health'
						name='health'
						checked={userValues.health}
						onChange={handleValueChange}
					/>

				</label>
				<label htmlFor='community'>
					Community
					<input
						type='checkbox'
						id='community'
						name='community'
						checked={userValues.community}
						onChange={handleValueChange}
					/>

				</label>
				<label htmlFor='creativity'>
					Creativity
					<input
						type='checkbox'
						id='creativity'
						name='creativity'
						checked={userValues.creativity}
						onChange={handleValueChange}
					/>

				</label>
				<label htmlFor='positivity'>
					Positivity
					<input
						type='checkbox'
						id='positivity'
						name='positivity'
						checked={userValues.positivity}
						onChange={handleValueChange}
					/>

				</label>
				<label htmlFor='efficiency'>
					Efficiency
					<input
						type='checkbox'
						id='efficiency'
						name='efficiency'
						checked={userValues.efficiency}
						onChange={handleValueChange}
					/>

				</label>
				<label htmlFor='loyalty'>
					Loyalty
					<input
						type='checkbox'
						id='loyalty'
						name='loyalty'
						checked={userValues.loyalty}
						onChange={handleValueChange}
					/>

				</label>
				<label htmlFor='spirituality'>
					Spirituality
					<input
						type='checkbox'
						id='spirituality'
						name='spirituality'
						checked={userValues.spirituality}
						onChange={handleValueChange}
					/>

				</label>
			</div>
		</form>
    </>
  );
}
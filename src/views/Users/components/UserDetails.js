import { PropTypes } from 'prop-types';
import React from 'react';

export function UserDetails({ handleContentToggle, user }) {
	return (
		<div className='table table-element'>
			<div className=''>
				{user.phones.length && user.accounts.length ? (
					<i
						className='arrow down mr-2 mb-px cursor-pointer'
						onClick={handleContentToggle}
					></i>
				) : (
					''
				)}
				<p className='inline'>{user.username}</p>
			</div>
			<div>
				<p>{user.createdAt}</p>
			</div>
			<div>
				<p>{user.phones.length}</p>
			</div>
			<div>
				<p>{user.accounts.length}</p>
			</div>
		</div>
	);
}

UserDetails.propTypes = {
	user: PropTypes.object.isRequired,
	handleContentToggle: PropTypes.func.isRequired,
};

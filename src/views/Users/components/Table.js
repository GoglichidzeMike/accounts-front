import { UserDetails } from './UserDetails';
import AccountsTable from './AccountsTable';
import PhonesTable from './PhonesTable';
import PropTypes from 'prop-types';
import React from 'react';

export const Table = ({ users }) => {
	const handleContentToggle = (e) => {
		const target = e.target;
		const parent = target.parentNode.parentNode.parentNode;
		const content = parent.querySelector('.table-content');
		content.classList.toggle('toggle-content');
		target.classList.toggle('toggle-arrow');
	};
	return (
		<>
			<div className='table table-header'>
				<div>
					<p>Name</p>
				</div>
				<div className='hidden md:block'>
					<p># of Phones</p>
				</div>
				<div className='hidden md:block'>
					<p># of Accounts</p>
				</div>
				<div>
					<p>Created At</p>
				</div>
			</div>
			<div className='rows'>
				{users.length ? (
					users.map((user) => {
						return (
							<div className='single-entry' key={user.id}>
								<UserDetails
									handleContentToggle={handleContentToggle}
									user={user}
								/>
								{user.phones.length && user.accounts.length ? (
									<div className='table-content'>
										<PhonesTable phones={user.phones} />
										<AccountsTable accounts={user.accounts} />
									</div>
								) : (
									''
								)}
							</div>
						);
					})
				) : (
					<p className='my-2 text-center font-bold'>Users not found</p>
				)}
			</div>
		</>
	);
};

Table.propTypes = {
	users: PropTypes.array.isRequired,
};

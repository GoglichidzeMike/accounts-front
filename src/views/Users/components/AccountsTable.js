import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '@/utils/formatDate';

const AccountsTable = ({ accounts }) => {
	return (
		<div className='accounts'>
			<p className='text-sm text-accent font-bold text-center'>
				Active Accounts
			</p>
			<div className='content-table-header'>
				<div>
					<p>Email</p>
				</div>
				<div>
					<p>Status</p>
				</div>
				<div className='hidden md:block'>
					<p>Created</p>
				</div>
			</div>
			{accounts.map((account) => {
				if (account.status === 'Active') {
					return (
						<div className='content-table-element' key={account.id}>
							<div>
								<p>{account.email}</p>
							</div>
							<div>
								<p>{account.status}</p>
							</div>
							<div className='hidden md:block'>
								<p>{formatDate(account.createdAt)}</p>
							</div>
						</div>
					);
				} else {
					return (
						<p className='text-center text-sm font-medium'>
							No active accounts found.
						</p>
					);
				}
			})}
		</div>
	);
};

AccountsTable.propTypes = {
	accounts: PropTypes.array.isRequired,
};

export default AccountsTable;

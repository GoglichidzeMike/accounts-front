import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '@/utils/formatDate';

const PhonesTable = (props) => {
	const { phones } = props;

	return (
		<div className='phones'>
			<p className='text-sm text-accent font-bold text-center'>Phones</p>
			<div className='content-table-header'>
				<div>
					<p>Title</p>
				</div>
				<div>
					<p>Status</p>
				</div>
				<div className='hidden md:block'>
					<p>Created</p>
				</div>
			</div>
			{phones.map((phone) => {
				if (phone.status === 'Active') {
					return (
						<div className='content-table-element' key={phone.id}>
							<div>
								<p>{phone.title}</p>
							</div>
							<div>
								<p>{phone.status}</p>
							</div>
							<div className='hidden md:block'>
								<p>{formatDate(phone.createdAt)}</p>
							</div>
						</div>
					);
				} else {
					return (
						<p className='text-center text-sm font-medium'>
							No active phones found.
						</p>
					);
				}
			})}
		</div>
	);
};

export default PhonesTable;

PhonesTable.propTypes = {
	phones: PropTypes.array.isRequired,
};

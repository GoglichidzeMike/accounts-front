import React from 'react';
import PropTypes from 'prop-types';

const Phones = (props) => {
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
				<div>
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
							<div>
								<p>{phone.createdAt}</p>
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

export default Phones;

Phones.propTypes = {
	phones: PropTypes.array.isRequired,
};

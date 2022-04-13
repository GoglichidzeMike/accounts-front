import React, { useEffect, useState } from 'react';
import { getUsers } from '@/api/userProvider';
import { Table } from './components/Table';

const Users = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const res = await getUsers();
		setUsers(res);
		console.log(users);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className='container py-5'>
			<h1 className='text-center mt-5 text-lg text-accent font-bold'>
				Users Page
			</h1>
			{/* TODO: some statistics here */}
			<Table users={users} />
		</div>
	);
};

export default Users;

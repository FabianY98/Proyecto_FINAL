import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
			setUsers(data);
		};

		fetchUsers();
	}, []);

	return (
		<div>
			<h1>Usuarios</h1>
			{users.map((user) => (
				<div key={user.id}>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
};

export default Users;

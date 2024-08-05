import React, { useState } from 'react'
import './../styles/App.css'

const App = () => {
	const [users, setUsers] = useState([])

	const handleClick = () => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((data) => setUsers(data.data))
	}

	return (
		<div>
			{/* Do not remove the main div */}
			<header>
				<h2>Blue Whales</h2>
				<button className='btn' onClick={handleClick}>
					Get User List
				</button>
			</header>

			<main>
				<table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Avatar</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.first_name}</td>
								<td>{user.last_name}</td>
								<td>{user.email}</td>
								<td>
									<img src={user.avatar} alt='avatar' />
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{users.length === 0 && <p>No data found</p>}
			</main>
		</div>
	)
}

export default App

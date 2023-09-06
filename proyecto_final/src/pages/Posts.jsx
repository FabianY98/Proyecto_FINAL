import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
			setPosts(data);
		};

		fetchPosts();
	}, []);

	return (
		<div>
			<h2>Publicaciones</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;

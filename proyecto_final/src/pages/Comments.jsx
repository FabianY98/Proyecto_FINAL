import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Comments = () => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments');
			setComments(data);
		};

		fetchComments();
	}, []);

	return (
		<div>
			<h1>Comentarios</h1>
			{comments.map((comment) => (
				<div key={comment.id}>
					<h2>{comment.name}</h2>
					<p>{comment.body}</p>
				</div>
			))}
		</div>
	);
};

export default Comments;

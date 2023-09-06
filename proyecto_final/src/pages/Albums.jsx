import React, { useState, useEffect } from 'react';
import axios from 'axios';

 export const Albums = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		const fetchAlbums = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums');
			setAlbums(data);
		};

		fetchAlbums();
	}, []);

	return (
		<div>
			<h1>Álbumes</h1>
			{albums.map((album) => (
				<div key={album.id}>
					<h2>{album.title}</h2>
				</div>
			))}
		</div>
	);
};

export default Albums;

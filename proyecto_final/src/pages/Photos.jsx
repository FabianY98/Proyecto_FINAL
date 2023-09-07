import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Photos = () => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		const fetchPhotos = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
			setPhotos(data);
		};

		fetchPhotos();
	}, []);

	return (
		<div className="box">
			<h2>Fotos</h2>
			<ul className="grid-layout">
				{photos.map((photo) => (
					<li className="rounded-container" key={photo.id}>
						<img src={photo.thumbnailUrl} alt={photo.title} />
						<p className="floating-text">{photo.title}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Photos;

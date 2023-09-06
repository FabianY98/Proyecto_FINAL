<<<<<<< HEAD
import { JsonPlaceHolderData} from '../components/JsonPlaceHolderData';

export const Photos = () => {
  return (
    <div>
        <JsonPlaceHolderData.Photos />
    </div>
  );
};
=======
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
		<div>
			<h2>Fotos</h2>
			<ul>
				{photos.map((photo) => (
					<li key={photo.id}>
						<img src={photo.thumbnailUrl} alt={photo.title} />
						<p>{photo.title}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Photos;
>>>>>>> fab.dev

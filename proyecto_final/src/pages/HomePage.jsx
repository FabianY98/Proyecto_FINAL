import { NavLink } from 'react-router-dom';

export const HomePage = () => {
	return (
		<div className="centered-layout">
			<h1> Proyecto Final Frontend React Idat - Consumo de API JSONPlaceHolder </h1>
			<div className="resource-links">
				<NavLink to="/post">Ver Post</NavLink>
				<NavLink to="/comments">Ver Comentarios</NavLink>
				<NavLink to="/albums">Ver Albumes</NavLink>
				<NavLink to="/photos">Ver Fotos</NavLink>
				<NavLink to="/todos">Ver Todos</NavLink>
				<NavLink to="/users">Ver Usuarios</NavLink>
			</div>
		</div>
	);
};
export default HomePage;

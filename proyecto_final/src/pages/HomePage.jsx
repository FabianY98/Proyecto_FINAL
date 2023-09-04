import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
        <Link to="/Users">Ir a Users</Link>
        <Link to="/Posts">Ir a Publicaciones</Link>
        <Link to="/Comments">Ir a Comentarios</Link>
        <Link to="/Albums">Ir a Albumes</Link>
        <Link to="/Photos">Ir a Fotos</Link>
        <Link to="/Todos">Ir a Listas</Link>
    </div>
  );
};

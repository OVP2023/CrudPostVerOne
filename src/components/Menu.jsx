import {NavLink, Outlet} from 'react-router-dom'

const setActive = ({isActive}) => isActive? 'link active_link':'link';

function Menu() {
  return ( 
            <>
                <nav className='links'>
                    <NavLink className={setActive} to="/">СПИСОК ПОСТОВ</NavLink>
                    <NavLink className={setActive} to="/posts/new">НОВЫЙ ПОСТ</NavLink>                   
                    <NavLink className={setActive} to="/posts/edit">РЕДАКТИРОВАТЬ ПОСТ</NavLink>  
                    <NavLink className={setActive} to="/posts/delete">УДАЛИТЬ ПОСТ</NavLink>             
                </nav>
                <Outlet/> 
            </>
  );
}

export default Menu

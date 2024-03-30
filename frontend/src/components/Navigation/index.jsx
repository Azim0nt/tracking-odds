import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/react.svg'
import './style.scss'
function Navigation() {
    return (
        <>
            <div className="navigation-wrapper">
                <nav>
                    <div className="left"><NavLink to={'/'}><img src={Logo} alt="" /></NavLink></div>
                    <div className="middle">
                        <NavLink to={'/'}>Matches</NavLink>
                        <NavLink to={'/info'}>Info</NavLink>
                        <NavLink to={'/contacts'}>Contacts</NavLink>
                    </div>
                    <div className="right">
                        <h1>Info</h1>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
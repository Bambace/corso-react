import { NavLink, useNavigate } from 'react-router'
import './Menu.css'

export default function Menu() {
const navigate = useNavigate();
    return (
    <div>
        <ul id='menu'>
            <li>
                <NavLink  to={'/'}>
                        Home page
                </NavLink>
            </li>

            <li>
                <NavLink to={'/about'}>
                        About
                </NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>
                        Contact
                </NavLink>
            </li>
            <li>
                <NavLink to={'/product'}>
                        Product
                </NavLink>
            </li>
            <li>
                <NavLink to={'/search'}>
                        Search
                </NavLink>
            </li>
        </ul>


        <button onClick={()=>navigate('/pippo')}>Vai direttamente a una pagina rotta</button>

    </div>
  )
}


import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Products</NavLink></li>
                <li><NavLink to="/new-product"><div><i className="fa-solid fa-square-plus"></i></div> <div>New product</div></NavLink></li>
            </ul>
        </nav>
)
}

export default NavBar
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
    const pathName = useLocation().pathname
    return <Nav variant="tabs" defaultActiveKey={pathName}>
        <Nav.Item>
            <NavLink className='nav-link' to="/" eventKey='/'>Home</NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink className='nav-link'  to="/image" eventKey='/image'>Image</NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink className='nav-link' to="/notification" eventKey='/notification'>Notification</NavLink>
        </Nav.Item>
    </Nav>
    
}
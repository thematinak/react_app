import { Nav } from "react-bootstrap";

export default function NavBar() {
    return <Nav variant="tabs">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/image">Image</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/notification">Notification</Nav.Link>
        </Nav.Item>
    </Nav>
    
}
import { Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "./Nav";

export default function Layout() {
    return <Card>
            <Card.Body>
                <NavBar />
                <Outlet />
            </Card.Body>
        </Card>
    
}
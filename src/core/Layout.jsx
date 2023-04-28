import { Card, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Notification from "../notifications/Notification";
import NavBar from "./Nav";

export default function Layout() {
    return (
    <div className="m-3">
        <Notification />
        <Container>
            <Card>
                <Card.Header>
                    <NavBar />
                </Card.Header>
                <Card.Body>
                    <Outlet />
                </Card.Body>
            </Card>
        </Container>
    </div>
    )
    
}
import { Button, ListGroup } from "react-bootstrap";
import { useError, useInfo, useWarn } from "./NotificationContext";



export default function TestNotification() {
    const infoDispatch = useInfo()
    const warnDispatch = useWarn()
    const errorDispatch = useError()
    return (
    <>
        <ListGroup>
            <ListGroup.Item>Wrap your application with <span className="text-success">NotificationProvider</span></ListGroup.Item>
            <ListGroup.Item>Add <span className="text-success">Notification</span> Component to your Layout</ListGroup.Item>
            <ListGroup.Item>Use methods <span className="text-success">infoDispatch</span>, <span className="text-warning">warnDispatch</span>, <span className="text-danger">errorDispatch</span> for creation of your notifications</ListGroup.Item>
            <ListGroup.Item>Enjoy notification system</ListGroup.Item>
        </ListGroup>
        <div>Try it out <br />
            <Button onClick={() => infoDispatch("Info notification")} variant="success" >push info</Button>
            <Button onClick={() => warnDispatch("Warn notification")} variant="warning" >push warn</Button>
            <Button onClick={() => errorDispatch("Error notification")} variant="danger" >push error</Button>
        </div>
    </>)
}
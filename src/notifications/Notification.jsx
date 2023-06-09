import { ToastContainer, Toast } from "react-bootstrap";
import { useNotification } from "./NotificationContext";

const mapVariant = {
    'INFO': 'success',
    'WARN': 'warning',
    'ERROR': 'danger',
}

export default function Notification() {
    const notifications = useNotification()
    return (
    <ToastContainer position='top-end' className="m-3">
        {notifications.map(i => (
        <Toast bg={mapVariant[i.severity]} key={i.id}>
            <Toast.Body>{i.message}</Toast.Body>
        </Toast>))}
    </ToastContainer>)
    
}
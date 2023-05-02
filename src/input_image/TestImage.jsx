import { useRef } from "react";
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useError, useInfo, useWarn } from "../notifications/NotificationContext";

function onUpload(file, infoDispatch, errorDispatch) {
    console.log(file);
    const formData = new FormData()
    formData.append('image', file)
    fetch('/api/v1/image', {
        method: 'POST',
        body: formData
    })
    .catch(e => errorDispatch('Error ocured while uploading image', e))
    .then((res) => {
        if (res.ok) {
            infoDispatch('Image upload successfuly')
        } else {
            errorDispatch(`Error ocured while uploading image with: status ${res.status} - ${res.statusText}`)
        }
        console.log(res);
    })
}

export default function TestImage() {
    const fileRef = useRef()
    const infoDispatch = useInfo()
    const warnDispatch = useWarn()
    const errorDispatch = useError()

    function handleUploadClick() {
        if (fileRef.current.files.length === 0 ) {
            warnDispatch("No picture to upload! Please select picture.")
            return
        }
        onUpload(fileRef.current.files[0], infoDispatch, errorDispatch)
    }

    return (
    <>
        <ListGroup className="mb-3">
            <ListGroup.Item>Wrap your application with <span className="text-success">NotificationProvider</span></ListGroup.Item>
            <ListGroup.Item>Add <span className="text-success">Notification</span> Component to your Layout</ListGroup.Item>
            <ListGroup.Item>Use methods <span className="text-success">infoDispatch</span>, <span className="text-warning">warnDispatch</span>, <span className="text-danger">errorDispatch</span> for creation of your notifications</ListGroup.Item>
            <ListGroup.Item>Enjoy notification system</ListGroup.Item>
        </ListGroup>
        <InputGroup className="mb-3">
            <Form.Control ref={fileRef} type="file" accept="image/jpeg, image/png" aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>Image to upload</InputGroup.Text>
        </InputGroup>
        <Button variant="success" onClick={handleUploadClick} >Upload</Button>
    </>)
}
import { Form, InputGroup, ListGroup } from "react-bootstrap"
import { connect } from "./ReduxContext"
import { testReduxAction, testReduxAction2 } from "./store"

function _Component1({givenProp, reduxProp}) {
    return (
        <div className="m-3">
            <div>Given prop {givenProp}</div>
            <div>From store {reduxProp}</div>
        </div>
    )
}

const Component1 = connect(state => state.testReduxState, _Component1)

function _Component2({givenProp, reduxProp, dispatcher}) {
    return (
        <div className="m-3">
            <div>Given prop: {givenProp}</div>
            <div>From store: {reduxProp}</div>
            <InputGroup className="mb-3">
                <Form.Control type="text" onChange={e => dispatcher(testReduxAction(e.target.value))} />
                <InputGroup.Text>Text</InputGroup.Text>
            </InputGroup>
        </div>
    )
}

const Component2 = connect(state => state.testReduxState, _Component2)

function _Component3({givenProp, reduxProp, dispatcher}) {
    return (
        <div className="m-3">
            <div>Given prop: {givenProp}</div>
            <div>From store: {reduxProp}</div>
            <InputGroup className="mb-3">
                <Form.Control type="text" onChange={e => dispatcher(testReduxAction2(e.target.value))} />
                <InputGroup.Text>Text</InputGroup.Text>
            </InputGroup>
        </div>
    )
}

const Component3 = connect(state => state.testReduxState2, _Component3)


export function TestRedux() {
    return (
        <>
            <ListGroup className="mb-3">
                <ListGroup.Item>Wrap your application with <span className="text-success">ReduxStore</span></ListGroup.Item>
                <ListGroup.Item>In <span className="text-success">store.js</span> set your default state</ListGroup.Item>
                <ListGroup.Item>Implement <span className="text-success">reducer</span> function with your own actions</ListGroup.Item>
                <ListGroup.Item>Use <span className="text-success">connect</span> to connect your component to redux store</ListGroup.Item>
                <ListGroup.Item><span className="text-success">Connect</span> function has 2 arguments <span className="text-success">function</span> to get concrete data from store, <span className="text-success">Component</span> that will be connected to store</ListGroup.Item>
            </ListGroup>
            <Component1 givenProp="prp"/>
            <Component2 givenProp="prp-2"/>
            <Component3 givenProp="prp-3"/>
        </>
    )
}
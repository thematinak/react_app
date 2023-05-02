

export const defaultState = {
    testReduxState: {
        reduxProp: ""
    },
    testReduxState2: {
        reduxProp: ""
    }
}


export function reducer(state, action) {
    switch (action.type) {
        case TEST_REDUX_ACTION:
            return deepCopyWithChange(state, ['testReduxState', 'reduxProp'], action.value)
        case TEST_REDUX_ACTION_2:
            return deepCopyWithChange(state, ['testReduxState2', 'reduxProp'], action.value)
        default:
            break;
    }
    return state
}

const TEST_REDUX_ACTION = 'testReduxAction'
export function testReduxAction(val) {
    return { type: TEST_REDUX_ACTION, value: val }
}

const TEST_REDUX_ACTION_2 = 'testReduxAction_2'
export function testReduxAction2(val) {
    return { type: TEST_REDUX_ACTION_2, value: val }
}

function deepCopyWithChange(obj, arr, newVal) {
    return _deepCopyWithChange(obj, 0, arr, newVal) 
}

function _deepCopyWithChange(obj, idx, arr, newVal) {
    if(idx === arr.length - 1) {
        return {...obj, [arr[idx]]: newVal}
    }
    const data = {...obj}
    data[arr[idx]] = _deepCopyWithChange(data[arr[idx]], idx + 1, arr, newVal)
    return data
}
import React, { useContext, useMemo, useReducer } from "react";
import { defaultState, reducer } from "./store";

const StoreContext = React.createContext()

export function connect(f, Component) {
    return (props) => {
        const state = useContext(StoreContext)
        const propsFromState = f(state)
        const renderedComponent = useMemo(() => <Component { ...props} {...propsFromState} dispatcher={state.dispatcher} />, [props, state.dispatcher, propsFromState])
        return renderedComponent
    }
} 


export function ReduxStore({ children }) {
    const [state, dispatcher] = useReducer(reducer, defaultState)
    const store = useMemo(() => ({...state, dispatcher}), [state, dispatcher])
    
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}
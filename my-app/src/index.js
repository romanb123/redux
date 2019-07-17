import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Rootducer from "./reducer/rootReducer"
import App from './App'

const store = createStore(Rootducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
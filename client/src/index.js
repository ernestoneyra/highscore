import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './Redux/store'
import { Provider } from 'react-redux'
import {  fetchScores } from './Redux/reducer'



store.dispatch( fetchScores)


ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    
    document.getElementById("root")
);

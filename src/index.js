import React from "react"
import ReactDOM from "react-dom"
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { Provider } from "react-redux"
import thunk from "redux-thunk"


import "./index.css"
import App from "./App"
import reducers from "./store/reducers"

const store = configureStore({reducer: reducers}, applyMiddleware({thunk}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
)


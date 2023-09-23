import * as React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import TransferList from 'components/TransferList'
import reportWebVitals from './reportWebVitals'
import {generateRandomListItems} from './data'

// In case of high number of List items, it's preferable to do virtualization of list.
const list = generateRandomListItems(500)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TransferList list={list} />
  </React.StrictMode>,
)

reportWebVitals()

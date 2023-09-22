import * as React from 'react'
import List from './List'
import {generateRandomListItems} from '../data'

function TransferList() {
  const [left, setLeft] = React.useState([])
  const [right, setRight] = React.useState([])

  React.useEffect(() => {
    const list = generateRandomListItems()
    const half = Math.ceil(list.length / 2)
    const left = list.slice(0, half)
    const right = list.slice(half)
    setLeft(left)
    setRight(right)
  }, [])

  return (
    <>
      <List items={left} />
      <List items={right} />
    </>
  )
}

export default TransferList
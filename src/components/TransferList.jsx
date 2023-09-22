import * as React from 'react'
import List from './List'
import Controller from './Controller'

function TransferList({list = []}) {
  const half = Math.ceil(list.length / 2)
  const [left, setLeft] = React.useState(() => list.slice(0, half))
  const [right, setRight] = React.useState(() => list.slice(half))

  return (
    <>
      <List items={left} />
      <Controller />
      <List items={right} />
    </>
  )
}

export default TransferList
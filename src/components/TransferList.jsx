import * as React from 'react'
import List from './List'
import Controller from './Controller'

function TransferList({list = []}) {
  const half = Math.ceil(list.length / 2)
  const [leftItems, setLeftItems] = React.useState(() => list.slice(0, half))
  const [rightItems, setRightItems] = React.useState(() => list.slice(half))
  const [checkedItems, setCheckedItems] = React.useState([])

  return (
    <>
      <List setCheckedItems={setCheckedItems} items={leftItems} />
      <Controller
        checkedItems={checkedItems}
        leftItems={leftItems}
        rightItems={rightItems}
        setLeftItems={setLeftItems}
        setRightItems={setRightItems}
        setCheckedItems={setCheckedItems}
      />
      <List setCheckedItems={setCheckedItems} items={rightItems} />
    </>
  )
}

export default TransferList
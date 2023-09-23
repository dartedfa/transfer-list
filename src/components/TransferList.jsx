import * as React from 'react'
import List from './List'
import Controller from './Controller'

function TransferList({list = []}) {
  const half = Math.ceil(list.length / 2)
  // Would definitely use context (For UI state only) here to avoid passing setCheckedItems through List -> ListItem
  // But as of requirement "Use React hooks for internal component state(useState)"
  // decided to keep it in useState.
  const [leftItems, setLeftItems] = React.useState(() => list.slice(0, half))
  const [rightItems, setRightItems] = React.useState(() => list.slice(half))
  const [checkedItems, setCheckedItems] = React.useState([])

  // We could also simulate list fetching using generateRandomListItems
  // But for testing we would need to mock fetch(not preferable) or have Mock Service Worker.
  // So decided to keep it as props.
  // React.useEffect(() => {
  //   const list = generateRandomListItems(500)
  //   const half = Math.ceil(list.length / 2)
  //   setLeftItems(list.slice(0, half))
  //   setRightItems(list.slice(half))
  // }, [])

  return (
    <>
      <List setCheckedItems={setCheckedItems} items={leftItems} testId="left" />
      <Controller
        checkedItems={checkedItems}
        leftItems={leftItems}
        rightItems={rightItems}
        setLeftItems={setLeftItems}
        setRightItems={setRightItems}
        setCheckedItems={setCheckedItems}
      />
      <List setCheckedItems={setCheckedItems} items={rightItems} testId="right" />
    </>
  )
}

export default TransferList
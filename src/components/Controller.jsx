import * as React from 'react'
import {intersection, difference} from 'helpers'

function Controller({
                      checkedItems,
                      leftItems,
                      rightItems,
                      setLeftItems,
                      setRightItems,
                      setCheckedItems,
                    }) {
  const checkedLeftItems = intersection(checkedItems, leftItems)
  const checkedRightItems = intersection(checkedItems, rightItems)

  const isLeftItemsChecked = Boolean(checkedLeftItems.length)
  const isLeftItemsEmpty = leftItems.length === 0
  const isRightItemsChecked = Boolean(checkedRightItems.length)
  const isRightItemsEmpty = rightItems.length === 0

  function moveAllToRightSide() {
    setRightItems(prevState => [...prevState, ...leftItems])
    return setLeftItems([])
  }

  function moveAllToLeftSide() {
    setLeftItems(prevState => [...prevState, ...rightItems])
    return setRightItems([])
  }

  function moveSelectedToLeftSide() {
    const itemsToMoveToLeftSide = difference(checkedItems, leftItems)
    const updatedCheckedItems = difference(checkedItems, itemsToMoveToLeftSide)
    const updatedRightItems = difference(rightItems, itemsToMoveToLeftSide)
    setLeftItems(prevState => [...prevState, ...itemsToMoveToLeftSide])
    setRightItems(updatedRightItems)
    return setCheckedItems(updatedCheckedItems)
  }

  function moveSelectedToRightSide() {
    const itemsToMoveToRightSide = difference(checkedItems, rightItems)
    setLeftItems(prevState => difference(prevState, itemsToMoveToRightSide))
    setRightItems(prevState => [...prevState, ...itemsToMoveToRightSide])
    return setCheckedItems(prevState => difference(prevState, itemsToMoveToRightSide))
  }

  return (
    <section className='controller'>
      <div className='controller--container'>
        <button
          disabled={isLeftItemsEmpty}
          onClick={moveAllToRightSide}
          className={`btn all ${isLeftItemsEmpty && 'disabled'}`}
          aria-label='move all right'
        >
          <span>&raquo;</span>
        </button>
        <button
          disabled={!isLeftItemsChecked}
          onClick={moveSelectedToRightSide}
          className={`btn single ${!isLeftItemsChecked && 'disabled'}`}
          aria-label='move selected right'
        >
          <span>&gt;</span>
        </button>
        <button
          disabled={!isRightItemsChecked}
          onClick={moveSelectedToLeftSide}
          className={`btn single ${!isRightItemsChecked && 'disabled'}`}
          aria-label='move selected left'
        >
          <span>&lt;</span>
        </button>
        <button
          disabled={isRightItemsEmpty}
          onClick={moveAllToLeftSide}
          className={`btn all ${isRightItemsEmpty && 'disabled'}`}
          aria-label='move all left'
        >
          <span>&laquo;</span>
        </button>
      </div>
    </section>
  )
}

export default Controller
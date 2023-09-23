import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TransferList from '../TransferList'
import {generateRandomListItems} from 'data'

function renderTransferList(list = []) {
  return render(<TransferList list={list} />)
}

const moveAllToRightText = 'move all right'
const moveSelectedToRightText = 'move selected right'
const moveSelectedToLeftText = 'move selected left'
const moveAllToLeftText = 'move all left'


describe('TransferList', () => {
  it('makes sure that move right buttons gets disabled after moving all items to right side', () => {
    const list = generateRandomListItems(2)
    const {getByRole} = renderTransferList(list)

    const moveAllToRightButton = getByRole('button', {name: moveAllToRightText})
    expect(moveAllToRightButton).not.toBeDisabled()
    userEvent.click(moveAllToRightButton)
    expect(moveAllToRightButton).toBeDisabled()
  })
})
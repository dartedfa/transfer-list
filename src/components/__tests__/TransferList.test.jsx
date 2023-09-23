import {render} from '@testing-library/react'
import TransferList from '../TransferList'
import {generateRandomListItems} from '../../data'

function renderTransferList(list = []) {
  return render(<TransferList list={list} />)
}


describe('TransferList', () => {
  it('makes sure that move right button gets disabled after moving all items to right side', () => {
    const list = generateRandomListItems()
    const screen = renderTransferList(list)
  })
})
import {render, within} from '@testing-library/react'
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
    const {getByRole, getByTestId} = renderTransferList(list)

    const moveAllToRightButton = getByRole('button', {name: moveAllToRightText})
    const moveSelectedToRightButton = getByRole('button', {name: moveSelectedToRightText})
    const leftList = getByTestId('list-left-container')
    const rightList = getByTestId('list-right-container')

    expect(within(rightList).getAllByRole('listitem')).toHaveLength(1)
    expect(leftList).not.toBeEmpty()
    expect(moveAllToRightButton).not.toBeDisabled()

    userEvent.click(moveAllToRightButton)

    expect(moveAllToRightButton).toBeDisabled()
    expect(moveSelectedToRightButton).toBeDisabled()
    expect(leftList).toBeEmpty()
    expect(within(rightList).getAllByRole('listitem')).toHaveLength(2)
  })
  it('makes sure that move left buttons gets disabled after moving all items to left side', () => {
    const list = generateRandomListItems(2)
    const {getByRole, getByTestId} = renderTransferList(list)

    const moveAllToLeftButton = getByRole('button', {name: moveAllToLeftText})
    const moveSelectedToLeftButton = getByRole('button', {name: moveSelectedToLeftText})
    const leftList = getByTestId('list-left-container')
    const rightList = getByTestId('list-right-container')

    expect(within(leftList).getAllByRole('listitem')).toHaveLength(1)
    expect(leftList).not.toBeEmpty()
    expect(moveAllToLeftButton).not.toBeDisabled()

    userEvent.click(moveAllToLeftButton)

    expect(moveAllToLeftButton).toBeDisabled()
    expect(moveSelectedToLeftButton).toBeDisabled()
    expect(rightList).toBeEmpty()
    expect(within(leftList).getAllByRole('listitem')).toHaveLength(2)
  })
  it('moves selected item to left side', () => {
    const list = generateRandomListItems(4)
    const {getByText, getByRole, getByTestId} = renderTransferList(list)
    const lastItem = list[list.length - 1]

    const moveSelectedToLeftButton = getByRole('button', {name: moveSelectedToLeftText})
    const leftList = getByTestId('list-left-container')
    const rightList = getByTestId('list-right-container')
    const lastListItem = getByText(lastItem)

    expect(moveSelectedToLeftButton).toBeDisabled()
    expect(within(leftList).getAllByRole('listitem')).toHaveLength(2)
    expect(within(leftList).queryByText(lastItem)).not.toBeInTheDocument()

    userEvent.click(lastListItem)
    expect(moveSelectedToLeftButton).not.toBeDisabled()
    userEvent.click(moveSelectedToLeftButton)

    expect(within(leftList).getAllByRole('listitem')).toHaveLength(3)
    expect(within(leftList).queryByText(lastItem)).toBeInTheDocument()
    expect(within(rightList).queryByText(lastItem)).not.toBeInTheDocument()
    expect(moveSelectedToLeftButton).toBeDisabled()
  })

  it('moves selected item to right side', () => {
    const list = generateRandomListItems(4)
    const {getByText, getByRole, getByTestId} = renderTransferList(list)
    const [firstItem] = list

    const moveSelectedToRightButton = getByRole('button', {name: moveSelectedToRightText})
    const leftList = getByTestId('list-left-container')
    const rightList = getByTestId('list-right-container')
    const firstListItem = getByText(firstItem)

    expect(moveSelectedToRightButton).toBeDisabled()
    expect(within(rightList).getAllByRole('listitem')).toHaveLength(2)
    expect(within(rightList).queryByText(firstItem)).not.toBeInTheDocument()

    userEvent.click(firstListItem)
    expect(moveSelectedToRightButton).not.toBeDisabled()
    userEvent.click(moveSelectedToRightButton)

    expect(within(rightList).getAllByRole('listitem')).toHaveLength(3)
    expect(within(rightList).queryByText(firstItem)).toBeInTheDocument()
    expect(within(leftList).queryByText(rightList)).not.toBeInTheDocument()
    expect(moveSelectedToRightButton).toBeDisabled()
  })
})
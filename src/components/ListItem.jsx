import * as React from 'react'

function ListItem({label = '', setCheckedItems}) {
  const [checked, setChecked] = React.useState(false)
  const handleCheck = () => {
    if (checked) setCheckedItems(prevState => prevState.filter(item => item !== label))
    else setCheckedItems(prevState => [...prevState, label])
    return setChecked(prevState => !prevState)
  }
  return (
    <div role="listitem" className='list-item' onClick={handleCheck}>
      <label className='list-item--label'>
        <span className={`list-item--checkmark ${checked && 'checked'}`}></span>
        <span className='list-item--label--text'>{label}</span>
      </label>
    </div>
  )
}

export default ListItem
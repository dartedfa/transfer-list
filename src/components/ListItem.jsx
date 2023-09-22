import * as React from 'react'

function ListItem({label}) {
  const [checked, setChecked] = React.useState(false)
  const handleCheck = () => {
    setChecked(prevState => !prevState)
  }
  return (
    <div className='list-item' onClick={handleCheck}>
      <label className='list-item--label'>
        <span className={`list-item--checkmark ${checked && 'checked'}`}></span>
        <span className='list-item--label--text'>{label}</span>
      </label>
    </div>
  )
}

export default ListItem
import * as React from 'react'

function ListItem({label}) {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  )
}

export default ListItem
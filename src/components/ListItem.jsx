import * as React from 'react'

function ListItem({label}) {
  return (
    <div className="list-item">
      <label className="list-item--label">
        <input type="checkbox" className="list-item--checkbox" />
        <span className="list-item--checkmark"></span>
        <span className="list-item--label--text">{label}</span>
      </label>
    </div>
  )
}

export default ListItem
import * as React from 'react'
import ListItem from './ListItem'

function List({items = []}) {
  return (
    <section className="list">
      <div className="list--container" role="list">
        <ListItem label="test" />
        <ListItem label="test" />
        <ListItem label="test" />
        <ListItem label="test" />
      </div>
    </section>
  )
}

export default List
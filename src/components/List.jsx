import * as React from 'react'
import ListItem from './ListItem'

function List({items = []}) {
  return (
    <section className="list">
      <div className="list--container" role="list">
        {items.map(({id, value}) => <ListItem key={id} label={value} />)}
      </div>
    </section>
  )
}

export default List
import * as React from 'react'

function List({items = []}) {
  return (
    <section role="list">
      {items.map(() => <div></div>)}
    </section>
  )
}

export default List
import * as React from 'react'
import ListItem from './ListItem'

function List({items = [], setCheckedItems, testId = ''}) {
  return (
    <section className='list'>
      <div className='list--container' role='list' data-testid={`list-${testId}-container`}>
        {items.map((item) => <ListItem key={item} label={item} setCheckedItems={setCheckedItems} />)}
      </div>
    </section>
  )
}

export default List
import React from 'react';

import './item-list.css';

const  ItemList = (props) =>  {
    const { data, onSelectItem } = props

    const renderItems = (list = []) => {
        return list?.map(item => {
            const { id } = item
            const label = props.children(item)
            return (<li
                className="list-group-item"
                onClick={() => onSelectItem(id)}
                key={id}
            >
                {label}
            </li>)
        })
    }

    const items = renderItems(data)

    return (
      <ul className="item-list list-group">
          { items }
      </ul>
    )
}

export default ItemList

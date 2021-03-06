import React, { Component } from 'react';

import './item-details.css';
import Loader from "../loader";
import {ErrorButton} from "../button-error";

export const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
      </li>
  )
}

const ItemDetails = (props) => {

    const { data: item, image} = props
    if(!item) return <h3>Select item</h3>
    return (
      <div className="item-details card">
        <img className="item-image"
          src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            { React.Children.map(props.children, (child) => {
              return React.cloneElement(child, {item})
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
}

export default ItemDetails

import React from 'react'

export default function Option(props) {
  if (props.value) {
    return (
      <option value={props.value}>{props.value}</option>
    );
  }

  return <></>
}
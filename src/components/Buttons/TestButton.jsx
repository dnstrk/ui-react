import React from 'react'
import Button from '@mui/material/Button';


export default function TestButton(props) {
  return (
    <Button disabled={props.check}>{props.children}</Button>
  )
}

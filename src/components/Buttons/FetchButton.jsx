import { Button } from '@mui/material'
import React from 'react'

export default function FetchButton(props) {
  return (
    <Button onClick={props.fetch}>{props.children}</Button>
  )
}

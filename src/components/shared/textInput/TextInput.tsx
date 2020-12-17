import React from 'react'
import { TextField } from '@material-ui/core'
import { useStyles } from './styles'

interface TextInputProps{
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function TextInput({ label, value, onChange, placeholder } : TextInputProps) {
  const classes = useStyles()
  return (
    <div>
      <TextField variant="outlined" label={label} className={classes.input} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </div>
  )
}

export default TextInput

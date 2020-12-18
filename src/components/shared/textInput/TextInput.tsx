import React from 'react'
import { Grid, TextField } from '@material-ui/core'
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
    <Grid item>
      <TextField variant="outlined" label={label} className={classes.input} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </Grid>
  )
}

export default TextInput

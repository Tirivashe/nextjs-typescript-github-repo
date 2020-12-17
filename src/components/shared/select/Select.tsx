import React from 'react'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@material-ui/core"
import { useStyles } from './styles'

interface SelectProps{
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<Option>
}

interface Option {
  value: string
  label: string
}

function Select({ label, onChange, options, value }: SelectProps) {
  const classes = useStyles()
  return (
    <FormControl className={classes.root}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect variant="outlined" value={value} onChange={(e: React.ChangeEvent<{value: any}>) => onChange(e.target.value)}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select

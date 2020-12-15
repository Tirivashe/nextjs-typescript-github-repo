import React from 'react'

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
  return (
    <div>
      {label}
      <select value={value} onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

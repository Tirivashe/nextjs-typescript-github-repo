import React from 'react'

interface TextInputProps{
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function TextInput({ label, value, onChange, placeholder } : TextInputProps) {
  return (
    <div>
      {label}
      <input value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </div>
  )
}

export default TextInput

import React from 'react'
import Select from './shared/Select'
import TextInput from './shared/TextInput'
import LANGUAGES from './constants/languages.constants'

interface SearchProps {
  language: string
  searchText: string
  onSearchTextChange: (value: string) => void
  onLanguageChange: (value: string) => void
}

const Search = ({ language, searchText, onLanguageChange, onSearchTextChange }: SearchProps) => {

  const languages = [{ value: "", label: 'ALL' }, ...LANGUAGES]

  return (
    <div>
      <TextInput 
        label="Search Repo" 
        value={searchText} 
        onChange={value => onSearchTextChange(value)}
        />

      <Select 
        label="Language" 
        value={language} 
        options={languages} 
        onChange={value => onLanguageChange(value)}
        />

    </div>
  )
}

export default Search

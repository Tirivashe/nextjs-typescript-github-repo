import React from 'react'
import Select from '../shared/select/Select'
import TextInput from '../shared/textInput/TextInput'
import LANGUAGES from '../constants/languages.constants'
import { Grid } from '@material-ui/core'

interface SearchProps {
  language: string
  searchText: string
  onSearchTextChange: (value: string) => void
  onLanguageChange: (value: string) => void
}

const Search = ({ language, searchText, onLanguageChange, onSearchTextChange }: SearchProps) => {

  const languages = [{ value: "", label: 'ALL' }, ...LANGUAGES]

  return (
    <Grid container justify="center">
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

    </Grid>
  )
}

export default Search

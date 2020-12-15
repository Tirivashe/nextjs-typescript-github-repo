import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import RepoList from '../components/repoList/RepoList'
import Search from '../components/Search'
import { randomWord } from '../helpers/randomWord'
import { searchRepos } from '../services/githubServices'

const Index = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [searchText, setSearchText] = useState<string>(props.searchText)
  const [language, setLangauge] = useState<string>("")
  const [repos, setRepos] = useState<[]>(props.repos)
  const [loading, setLoading] = useState<boolean>(false)

  const onLanguageChange = (text: string) => {
    setLangauge(text)
    loadRepos(searchText, text)
  }

  const onSearchTextChange = (text: string) => {
    setSearchText(text)
    if(text){
      loadRepos(text, language)
    }
  }

  const loadRepos = async (searchText: string, langauge: string) => {
    setLoading(true)
    const res = await searchRepos(searchText, langauge)
    if(res && res.data){
      setLoading(false)
      setRepos(res.data.items)
    }
  }

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Search searchText={searchText} language={language} onLanguageChange={onLanguageChange} onSearchTextChange={onSearchTextChange} />
      <RepoList repos={repos} loading={loading} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const searchText = randomWord()

  try {
    const res = await searchRepos(searchText)
    return{
      props: {
        repos: res?.data.items,
        searchText
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {}
    }
  }
}

export default Index
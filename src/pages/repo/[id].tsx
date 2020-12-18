import { Button, Typography } from '@material-ui/core'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { getRepo } from '../../services/githubServices'
import { useStyles } from './styles'

function Repo({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Head>
        <title>GitHub Repositories | User Repo</title>
      </Head>
      <Link href="/">
        <Button variant="contained" size="large" className={classes.button}>Back</Button>
      </Link>
      
      <div>
        <Typography variant="h3">{repo.name}</Typography>
        <img src={repo.owner.avatar_url} width="50" height="50" alt="Picture"/>
        <Typography variant="body1">{repo.description}</Typography>
        <Typography variant="h5" style={{ color: "#00bfa5" }}>{repo.language}</Typography>
      </div>

      <a href={repo.owner.html_url} target="_blank" style={{ textDecoration: "none"}}>
        <Button variant="contained" size="large" className={classes.buttonLink}>View On GitHub</Button>
      </a>
    </div>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const res = await getRepo(query.id)
    return {
      props: {
        repo: res.data
      }
    }
    
  } catch (error) {
    console.error(error)
    return{
      props: {}
    }
  }
}

export default Repo

import { Button, Typography } from '@material-ui/core'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { getProfile } from '../../services/githubServices'
import { useStyles } from '../../components/pageStyles/profile.styles'

function Profile({ profile }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Head>
        <title>GitHub Repositories | User Profile</title>
      </Head>
      <Link href="/">
        <Button variant="contained" size="large" className={classes.button}>Back</Button>
      </Link>
      <div>
        <Typography variant="h3">{profile.name}</Typography>
        <img src={profile.avatar_url} width="50" height="50" alt="Picture"/>
        { profile.bio &&<Typography variant="body1"> Bio: {profile.bio}</Typography>}
        { profile.email &&<Typography variant="body1"> Email: {profile.email}</Typography>}
        { profile.blog &&<Typography variant="body1"> Blog: {profile.blog}</Typography>}
        { profile.location &&<Typography variant="body1"> Location: {profile.location}</Typography>}
      </div>
      <div>
        <Typography variant="body1"> Followers: {profile.followers}</Typography>
        <Typography variant="body1"> Following: {profile.following}</Typography>
      </div>
      <a href={profile.html_url} target="_blank" style={{ textDecoration: "none"}}>
        <Button variant="contained" size="large" className={classes.buttonLink}>View On GitHub</Button>
      </a>
    </div>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const res = await getProfile(query.id)
    return {
      props: {
        profile: res.data
      }
    }
    
  } catch (error) {
    console.error(error)
    return{
      props: {}
    }
  }
}

export default Profile

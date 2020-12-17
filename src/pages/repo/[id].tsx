import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import React from 'react'
import { getProfile, getRepo } from '../../services/githubServices'

function Profile({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h3>{repo.name}</h3>
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

export default Profile

import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import React from 'react'
import { getProfile } from '../../services/githubServices'

function Profile({ profile }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h3>{JSON.stringify(profile, null , 2)}</h3>
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

import { Grid } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { Repo } from '../repoList/RepoList'

interface RepoItemProps {
  repo: Repo
}

function RepoItem({ repo }: RepoItemProps) {
  return (
    <Grid item>
      <Link href={`/repo/${repo.id}`}>
        <a>{repo.name}</a>
      </Link>
      <p>{repo.description}</p>
    </Grid>
  )
}

export default RepoItem

import { Avatar, Card, CardActions, CardContent, CardHeader, Chip, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { Repo } from '../repoList/RepoList'
import { useStyles } from './styles'
import { Share, Star } from '@material-ui/icons'

interface RepoItemProps {
  repo: Repo
}

function RepoItem({ repo }: RepoItemProps) {
  const classes = useStyles()
  const truncateDescription = (description : string) => {
    if(description && description.length > 80){
      return description.slice(0, 80) + "..."
    }
    return description
  }

  return (
    <Grid item lg={4} md={6} xs={12}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader} 
          title={
            <Link href={`/repo/${repo.id}`}>
              <a className={classes.repoName}>{repo.name}</a>
            </Link>
            } 
          avatar={
              <Link href={`/profile/${repo.owner.login}`}>
                <Avatar className={classes.avatar} sizes="sm">
                  <img src={repo.owner.avatar_url} width="40px" height="40px" alt="Picture"/>
                </Avatar>
              </Link>
            }
          />
        <CardContent>
          <Typography>{truncateDescription(repo.description)}</Typography>
        </CardContent>
        <CardActions>
          <Grid container justify="flex-start" spacing={1} className={classes.chipContainer} >
            <Grid item>
              <Chip size="small" label={repo.stargazers_count} icon={<Star />}/>
            </Grid>
            <Grid item>
              <Chip size="small"label={repo.forks_count} icon={<Share />}/>
            </Grid>
          </Grid>
          <Typography className={classes.typography} variant="subtitle2" align="right">{repo.language}</Typography>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default RepoItem

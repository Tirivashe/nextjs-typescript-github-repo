import { Grid, CircularProgress } from '@material-ui/core'
import RepoItem from '../repoItem/RepoItem'
import { useStyles } from './styles'


export interface Repo {
  id: number
  name: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  language: string,
  owner: any
}


interface RepoListProps {
  loading: boolean,
  repos: Repo[]
}

function RepoList({ repos, loading }: RepoListProps) {
  const classes = useStyles()
 if(loading){
   return <CircularProgress size={100} className={classes.loader}/>
 }

 if(!repos || repos.length < 1){
   return <span>Repos Not Found</span>
 }

 return (
   <Grid container spacing={3} className={classes.listItems}>
     {repos && repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)}
   </Grid>
 )
}

export default RepoList

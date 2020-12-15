import { Grid, CircularProgress } from '@material-ui/core'
import RepoItem from '../repoItem/RepoItem'


export interface Repo {
  id: number
  name: string,
  description: string
}


interface RepoListProps {
  loading: boolean,
  repos: Repo[]
}

function RepoList({ repos, loading }: RepoListProps) {
 if(loading){
   return <CircularProgress />
 }

 if(!repos || repos.length < 1){
   return <span>Repos Not Found</span>
 }

 return (
   <Grid container justify="space-between" spacing={3}>
     {repos && repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)}
   </Grid>
 )
}

export default RepoList

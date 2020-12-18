import { AppBar,Toolbar, Typography } from '@material-ui/core'
import { useStyles } from './styles'

function NavBar() {
  const classes= useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography>Github Repos 📦</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
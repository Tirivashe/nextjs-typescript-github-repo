import { AppBar, Button, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import { useStyles } from './styles'

function NavBar() {
  const classes= useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <nav className={classes.nav}>
            <Link href="/">
              <Button className={classes.link}>Github Repos 📦</Button>
            </Link>
            <Link href="/">
              <Button className={classes.link}>Home</Button>
            </Link>
            <Link href="/about">
              <Button className={classes.link}>About</Button>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar


{/* <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav> */}
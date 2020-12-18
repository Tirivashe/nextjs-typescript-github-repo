import { makeStyles } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'


 export const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },

  appbar: {
    backgroundColor: teal["A700"],
    boxShadow: "none",
    marginBottom: "1rem"
  }
 })
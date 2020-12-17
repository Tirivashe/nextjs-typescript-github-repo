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
  },

  link: {
    color: "white",
    fontFamily: "Andika New Basic"
  },

   nav: {
     display: "flex",
     width: "25%",
     justifyContent: "space-around",
     alignItems: "center"
   }
 })
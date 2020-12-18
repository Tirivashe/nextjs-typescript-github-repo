import { makeStyles } from "@material-ui/core";
import { teal } from '@material-ui/core/colors'

export const useStyles = makeStyles({
  input: {
    width: "400px",
    marginBottom: "1rem",
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':{
      borderColor: teal["A700"]
    },
    '& label.Mui-focused':{
      color: teal["A700"]
    }
  },

})
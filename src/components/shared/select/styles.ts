import { makeStyles } from "@material-ui/core";
import { teal } from '@material-ui/core/colors'

const primaryColor = teal["A700"]

export const useStyles = makeStyles({
  root: {
    width: "200px",
    '& .MuiInputLabel-root':{
      marginLeft: "10px",
      "&.Mui-focused": {
        color: primaryColor
      }
    },
    '& .MuiOutlinedInput-root': {
      "& fieldset":{
        borderColor: primaryColor
      },
      "&.Mui-focused fieldset":{
        borderColor: primaryColor
      }
    },
  },

  select: {
    '& fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: primaryColor,
      '&:hover': {
        borderColor: primaryColor
      }
    }
  }
})
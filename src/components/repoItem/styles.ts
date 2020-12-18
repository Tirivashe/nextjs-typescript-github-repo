import { makeStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

export const useStyles = makeStyles(() => ({
  card: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    '& .MuiCardContent-root': {
      flexGrow: 1
    }

  },
  cardHeader: {
    '& .MuiCardHeader-content .MuiCardHeader-title:hover': {
      color: teal["A700"]
    }
  },
  chipContainer: {
    flexGrow: 1
  },

  typography: {
    color: teal["A700"]
  },

  repoName: {
    textDecoration: "none",
    textTransform: "capitalize",
    color: "black",
    '&:hover':{
      color: teal["A700"]
    },
  },

  avatar: {
    cursor: "pointer",
    transition: "transform .2s",
    '&:hover': {
      transform: "scale(1.3)"
    }
  },

  label: {
    marginLeft: "20px", 
    marginTop: "10px", 
    textDecoration: "none",
    textTransform: "capitalize",
    cursor: "pointer",
    color: "black",
    '&:hover':{
      color: teal["A700"]
    },
  }
}))
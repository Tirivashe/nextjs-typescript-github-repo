import { makeStyles } from "@material-ui/core";
import { grey, teal } from "@material-ui/core/colors";

export const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
    height: "50vh",
    margin: "0 auto",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  button: {
    backgroundColor: teal["A700"],
    color: "white",
    '&:hover': {
      backgroundColor: teal["A400"]
    }
  },

  buttonLink: {
    backgroundColor: grey["800"],
    color: "white",
    '&:hover': {
      backgroundColor: grey["700"]
    }
  }
}))
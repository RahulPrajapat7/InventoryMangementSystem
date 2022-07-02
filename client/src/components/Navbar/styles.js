import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px", 
  },
  heading: {
    color: "rgb(255 0 155)",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent:"space-between",
    width: "350px",
  },
  userName: {
    display: "flex",
    margin:"0 10px",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    margin:"0 5px",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[300],
  },
}));

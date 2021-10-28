import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 845,
    margin: "0 0 2em 0",
  },
  media: {
    height: "200px",
  },
  divider: {
    marginTop: "40px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    float: "right",
    display: "flex",
    alignItems: "right",
    borderRadius: "5px",
    width: `${theme.spacing(10)}px`,
    height: `${theme.spacing(10)}px`,
  },
  bullet: {
    listStyleType: "circle",
  },
}));

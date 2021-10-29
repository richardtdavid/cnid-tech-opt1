import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useStyles } from "./utils.styles";
import { IconButton } from "@material-ui/core";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export const IsLoading = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export const Regions = () => {
  const { setAppState } = useContext(AppContext);
  const { regions, regionOptions } = useStyles();

  return (
    <div className={regionOptions}>
      <IconButton
        className={regions}
        color="inherit"
        onClick={() =>
          setAppState((prevState) => ({ ...prevState, region: "uk" }))
        }
      >
        U.K.
      </IconButton>
      <IconButton
        className={regions}
        color="inherit"
        onClick={() =>
          setAppState((prevState) => ({ ...prevState, region: "us" }))
        }
      >
        U.S.
      </IconButton>
      <IconButton
        className={regions}
        color="inherit"
        onClick={() =>
          setAppState((prevState) => ({ ...prevState, region: "" }))
        }
      >
        World
      </IconButton>
    </div>
  );
};

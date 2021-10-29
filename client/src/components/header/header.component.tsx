import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Filter } from "../filter/filter.component";
import { useStyles } from "./header.styles";
import { Regions } from "../utils/utils.component";

export const Header = () => {
  const { title } = useStyles();
  return (
    <>
      <AppBar color="default">
        <Toolbar>
          <Typography variant="h6" className={title} noWrap>
            CNID News
          </Typography>
          <Regions />
          <Filter />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

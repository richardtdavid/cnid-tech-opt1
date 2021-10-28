import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Filter } from "../filter/filter.component";
import { useStyles } from "./header.styles";

export const Header = () => {
  const { menuButton, title } = useStyles();
  return (
    <>
      <AppBar color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={title} noWrap>
            CNID News
          </Typography>
          <Filter />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

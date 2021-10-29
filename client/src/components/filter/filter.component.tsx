import { useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles, options } from "./filter.styles";
import { AppContext } from "../../AppContext";
import shortid from "shortid";

export const Filter = () => {
  const { formControl } = useStyles();
  const { appState, setAppState } = useContext(AppContext);
  const isDisabled = appState.region !== "" ? true : false;

  const handleChange = (event: any) => {
    const value = event.target.value;
    setAppState((prevState) => ({ ...prevState, sortBy: value }));
  };

  return (
    <FormControl className={formControl} disabled={isDisabled}>
      <InputLabel id="mutiple-select-label">SortBy</InputLabel>
      <Select
        labelId="mutiple-select-label"
        value={appState.sortBy}
        onChange={handleChange}
        renderValue={() => appState.sortBy}
      >
        {options.map((option) => (
          <MenuItem key={shortid.generate()} value={option}>
            <ListItemIcon>
              <Checkbox checked={option === appState.sortBy} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

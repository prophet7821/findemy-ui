// @ts-ignore
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {changeState} from '../../features/filter/filterSlice';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from "react";


const FIlterDrawer = ({ toggleFilterMenu,searchQuery}) => {

  const dispatch = useDispatch();
  const filterState = useSelector((state:any)=>state.filter);

  const handleChange = (event) => {
    dispatch(changeState(event.target.name));
  };
  
  return (
    <Grid
      role="presentation"
      container
      spacing={2}
      onKeyDown={toggleFilterMenu}
      sx={{ p: 1 }}
      direction="column"
      justifyContent="center"
    >
      <Grid item>
        <IconButton size="large" onClick={toggleFilterMenu}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>

      <Grid item container justifyContent="center">
        <Typography sx={{ fontWeight: "700" }}>Level</Typography>
      </Grid>

      <Grid item container justifyContent="center">
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.beginner}
                    onChange={handleChange}
                    name="beginner"
                  />
                }
                label="Beginner"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.intermediate}
                    onChange={handleChange}
                    name="intermediate"
                  />
                }
                label="Intermediate"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.advanced}
                    onChange={handleChange}
                    name="advanced"
                  />
                }
                label="Advanced"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.alllevels}
                    onChange={handleChange}
                    name="alllevels"
                  />
                }
                label="All Levels"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FIlterDrawer;

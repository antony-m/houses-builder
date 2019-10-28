import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {removeHouseConfig} from '../../actions/cityBuilderActions';
import {updateHouseConfigAction} from '../../actions/cityBuilderActions';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: 165,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 120,
  },
  numberInput: {
    width: 30,
    marginLeft: theme.spacing(1),
  },
  floorsInputRow: {
    textAlign: 'left',
    margin: theme.spacing(1),
  },
  floorsSlider: {
    margin: theme.spacing(1),
    maxWidth: 165
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  gridItem: {
    maxWidth: '100%'
  }
});

const floorsLimitsConfig = {
  min:0,
  max:10
};

class HouseConfigItem extends PureComponent {
  render () {

    const {
      name,
      color,
      floorsNumber,
      id,
      classes,
      removeHouseConfig,
      updateHouseConfig
    } = this.props;

    const handleChange = name => event => {
      let targetValue = event.target.value;
      if (name === 'floorsNumber') {
        let value = Number(event.target.value);

        if (value < floorsLimitsConfig.min) {
          value = floorsLimitsConfig.min;
        }
        if (value > floorsLimitsConfig.max) {
          value = floorsLimitsConfig.max;
        }
        targetValue = Number(value);
      }
      updateHouseConfig({name, targetValue, id});
    };

    const handleSliderChange = name => (event, value) => {
      if (value < floorsLimitsConfig.min) {
        value = floorsLimitsConfig.min;
      }
      if (value > floorsLimitsConfig.max) {
        value = floorsLimitsConfig.max;
      }
      event.target.value = value;
      handleChange(name)(event);
    };

    console.log('render');

    return <Grid container spacing={3}>
      <Grid item md={5} className={classes.gridItem}>
        <TextField
          id="houseName"
          className={classes.textField}
          value={name}
          onChange={handleChange('name')}
        />
        <div className={classes.floorsInputRow}>
          <label>Floors:</label>
          <input
            type="number"
            value={floorsNumber}
            className={classes.numberInput}
            onChange={handleChange('floorsNumber')}
          />
        </div>
        <Slider
          defaultValue={floorsNumber}
          value={floorsNumber}
          color="primary"
          aria-labelledby="discrete-slider"
          marks
          step={1}
          min={1}
          max={10}
          className={classes.floorsSlider}
          onChangeCommitted={handleSliderChange('floorsNumber')}
        />
      </Grid>
      <Grid item xs={5} className={classes.gridItem}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="color">
            Color
          </InputLabel>
          <Select
            value={color}
            onChange={handleChange('color')}
            inputProps={{
              name: 'color',
              id: 'color'
            }}
          >
            <MenuItem value={'DarkGrey'}>DarkGrey</MenuItem>
            <MenuItem value={'orange'}>Orange</MenuItem>
            <MenuItem value={'Brown'}>Brown</MenuItem>
            <MenuItem value={'SteelBlue'}>SteelBlue</MenuItem>
            <MenuItem value={'SeaGreen'}>SeaGreen</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} className={classes.gridItem}>
        <IconButton aria-label="delete" onClick={() => removeHouseConfig(id)}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  }
}

//HouseConfigItem.whyDidYouRender = true;

HouseConfigItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  floorsNumber: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  removeHouseConfig: PropTypes.func.isRequired,
  updateHouseConfig: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  removeHouseConfig: id => dispatch(removeHouseConfig(id)),
  updateHouseConfig: configPart => dispatch(updateHouseConfigAction(configPart))
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(HouseConfigItem));

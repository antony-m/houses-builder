import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  }
}));

const InfoPopover = (props) => {
  const classes = useStyles();

  const {
    name,
    color,
    floorsNumber,
    open,
    anchorEl,
    handlePopoverClose
  } = props;
  return (
    <Popover
      id="mouse-over-popover"
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography>Name: {name}</Typography>
      <Typography>Color: {color}</Typography>
      <Typography>Number of floors: {floorsNumber}</Typography>
    </Popover>
  );
};

InfoPopover.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  floorsNumber: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  handlePopoverClose: PropTypes.func.isRequired,
};

export default InfoPopover;
import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import HouseConfigItem from './HouseConfigItem';
import { makeStyles } from '@material-ui/core/styles';
import {addHouseConfig} from '../../actions/cityBuilderActions';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardHeader: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.grey[100],
  },
  cardActions: {
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[100],
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const defaultConfig = {
  id: new Date().getTime(),
  name: '',
  color: 'DarkGrey',
  floorsNumber: 2
};

const HousesConfig = ({housesList, addHouseConfig}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card>
        <CardHeader
          title='Houses List'
          className={classes.cardHeader}
          titleTypographyProps={{ align: 'left', variant: 'h6' }}
        />
        <CardContent>
          {housesList.map((house) => (
            <HouseConfigItem key={house.id} {...house}/>
          ))}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<HomeIcon />}
            onClick={addHouseConfig}
          >
            Build a new house
          </Button>
        </CardActions>
      </Card>
    </Paper>
  )
};

HousesConfig.propTypes = {
  housesList: PropTypes.array.isRequired,
  addHouseConfig: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  housesList: state.housesList
});

const mapDispatchToProps = (dispatch) => ({
  addHouseConfig: () => dispatch(addHouseConfig(defaultConfig))
});

export default connect(mapStateToProps, mapDispatchToProps)(HousesConfig);


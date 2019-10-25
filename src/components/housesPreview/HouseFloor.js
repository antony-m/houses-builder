import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WindowBlock from './WindowBlock';
import DoorBlock from './DoorBlock';


const FloorContainer = styled.div`
  background: ${props => (props.color)};
  height: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HouseFloor = ({color, floorNumber}) => {
  return <FloorContainer color={color}>
    <WindowBlock/>
      { floorNumber === 1 ? <DoorBlock/> : <WindowBlock/> }
  </FloorContainer>

};

HouseFloor.propTypes = {
  color: PropTypes.string.isRequired,
  floorNumber: PropTypes.number.isRequired,
};

export default HouseFloor;
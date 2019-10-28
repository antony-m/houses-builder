import React from 'react';
import styled from 'styled-components';
import House from './House';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

const Container = styled.section`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1rem;
`;

const HousesPreview = ({housesList}) => {
  return <Container>
    {housesList.map(house => (
      <House key={house.id} {...house}/>
    ))}
  </Container>
};

HousesPreview.propTypes = {
  housesList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    housesList: state.housesList
  }
};

export default connect(mapStateToProps)(HousesPreview);

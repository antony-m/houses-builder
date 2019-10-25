import React, {useContext} from 'react';
import styled from 'styled-components';
import House from './House';
import CityBuilderContext from "../../context/cityBuilderContext";

const Container = styled.section`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1rem;
`;

const HousesPreview = () => {
  const cityBuilderContext = useContext(CityBuilderContext);

  const {housesList} = cityBuilderContext;

  return <Container>
    {housesList.map(house => (
      <House key={house.id} {...house}/>
    ))}
  </Container>
};

export default HousesPreview;

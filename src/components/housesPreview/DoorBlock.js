import React from 'react';
import styled from 'styled-components';

const Door = styled.div`
  border: 4px solid #3c464c;
  width: 40%;
  height: 85px;
  margin-left:20px;
  background: #fff;
  align-self: end;
  justify-self: center;
`;

const DoorBlock = () => {
  return <Door/>
};

export default DoorBlock;
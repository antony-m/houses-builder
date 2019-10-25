import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseFloor from './HouseFloor';
import InfoPopover from './infoPopover';

const HouseRoof = styled.div`
  width: 100%;
  height: 0;    
  padding-left:50%;
  padding-bottom: 50%;
  overflow: hidden;
  :before{
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left:-500px;
    border-left: 500px solid transparent;
    border-right: 500px solid transparent;
    border-bottom: 500px solid #ccc;
  }
`;

const AlignedBottom = styled.div`
  display: grid;
  align-content: end;
  justify-self: center;
  max-width: 300px;
`;

const HouseContainer = styled.div`
  display: grid;
`;


const House = ({name, color, floorsNumber}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const popoverProps = {name, color, floorsNumber, open, anchorEl};

  return <AlignedBottom>
    <HouseContainer aria-owns={open ? 'mouse-over-popover' : undefined}
         aria-haspopup="true"
         onMouseEnter={handlePopoverOpen}
         onMouseLeave={handlePopoverClose}>
        <HouseRoof />
        {
          Array.from({ length: floorsNumber }, (_, k) => (
            <HouseFloor key={k} color={color} floorNumber={k+1}/>
          )).reverse()
        }
    </HouseContainer>
    <InfoPopover {...popoverProps}
                 handlePopoverClose={handlePopoverClose}/>
  </AlignedBottom>
};

House.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  floorsNumber: PropTypes.number.isRequired
};

export default memo(House);
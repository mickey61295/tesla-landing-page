import React from "react";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade'
import CloseIcon from '@material-ui/icons/Close';

const Section = ({ title, description = undefined, background, rightBtn }) => {
  return (
    <Wrap background={background}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {" "}
            {description !== undefined
              ? description
              : "Order Online for Touchless Delivery"}
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            {!rightBtn && <RightButton>Existing Inventory</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  /* background-image: url("images/model-3.jpg"); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("images/${props.background}")`}  
  /* object-fit: cover; */
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom:20px;

  @media(max-width:768px){
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
cursor: pointer;
align-items: center;
border-radius:100px;
opacity: 0.85;
text-transform:uppercase;
font-size: 12px;
margin:8px;
`

const RightButton = styled(LeftButton)`
  opacity: 0.65;
  color: black;
  background-color: white;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  cursor: pointer;
`;

const Buttons = styled.div`

`;
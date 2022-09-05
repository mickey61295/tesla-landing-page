import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" style={{ cursor: "pointer" }} />
      </a>
      <Menu>
        {/* {cars && cars.map((car, index) => <a key={index} href="#">{car}</a>)} */}
        <a href="#">Model X</a>
        <a href="#">Model S</a>

        <a href="#">Model Y</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop Now</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerOpen(true)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerOpen(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)``;

const CustomClose = styled(CloseIcon)``;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

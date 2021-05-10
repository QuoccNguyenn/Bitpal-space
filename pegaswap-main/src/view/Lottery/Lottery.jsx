import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import HeadTitle from "./components/HeadTitle";
import StyleText from "./components/StyleText";
import PageHead from "./components/PageHead";
import MainLottery from "./components/MainLottery"
import Popup from "../../components/Popup/Popup";

const Lottery = () => {
  


  return (
    <StyledLottery>
      <PageHead/>
      <MainLottery/>
    </StyledLottery>
  );
};

// const styleCake = 
//   `"font-size: 40px;
//   font-weight: 600;
//   line-height: 1.1;
//   color: rgb(69, 42, 122);"
//   `
const StyledText = styled.div`

`


const StyledLottery = styled.div`
  min-height: calc(100vh - 152px);
  font-family: Kanit, sans-serif;
`;

// const StyledHeadPage = styled.div`

// `

const StyledLink = styled.a`
  color: #d16c00;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
  &:hover {
    color: #805e49;
  }
`;

export default Lottery;

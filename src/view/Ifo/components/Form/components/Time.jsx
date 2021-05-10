import React from "react";
import styled from "styled-components";

const Time = ({ time, blocks }) => {
  return (
    <StyledDittoTime>
      <StyledDittoTimes>{time}</StyledDittoTimes>
      <StyledDittoTimeBlock href="https://bscscan.com/block/countdown/3342745">
        {blocks}
      </StyledDittoTimeBlock>
    </StyledDittoTime>
  );
};

const StyledDittoTime = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 24px;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 24px;
`;
const StyledDittoTimes = styled.div`
  color: #DE3055;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const StyledDittoTimeBlock = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color:#477AB9;
  width: fit-content;
  font-weight: 600;
  text-decoration: underline;
  margin-left: 8px;
  :hover {
    color:#000 ;
  }
`;

export default Time;

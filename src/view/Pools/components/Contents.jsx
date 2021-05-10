import React, { Component } from "react";
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import panceke from '../../assets/img/logo-panceke.png'

const Contents = () => {
  
    return (
      <div className="col-lg-6 col-12">
        <Box_content>
          <Title_content color="#DE3055" size="55px">SYRUP Pool</Title_content>
          <Drep_content>
            <li>Stake CAKE to earn new tokens.</li>
            <li>You can unstake at any time.</li>
            <li>Rewards are calculated per block.</li>
          </Drep_content>
        </Box_content>
    </div>
    );
  }






const Box_content = styled.div`
@media screen and (min-width: 768px){
  position: absolute;
  min-width: 353px;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
}
  
`

const Title_content = styled.h2`
  color: ${(props) => props.color};
  font-size:${(props) => props.size};
  text-align: center;
  font-weight: 900;
  margin-bottom: 50px;
  text-align: left;
  margin-bottom: 10px;
`

const Drep_content = styled.ul`
  padding-left:0;
  li{
    font-size: 16px;
    font-weight: 700;
    color: #99378E;
    list-style: none;
   
  }
`



export default Contents;

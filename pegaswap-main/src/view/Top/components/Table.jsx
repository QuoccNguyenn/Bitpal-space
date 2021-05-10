import React, { Component } from "react";
import styled from 'styled-components';
import CountUp from 'react-countup';
// import ProgressBar from 'react-bootstrap/ProgressBar'


class Table extends Component {
  render() {
    return (
        <Box_bottom>
          <Title_item>PGS Stats</Title_item>
          <Line_total>Total PGS Supply <CountUp className="pra-total" start={110000000} end={114353737} /></Line_total>
          <Line_total>Total PGS Burned <CountUp className="pra-total" start={0.000} end={0.00} /></Line_total>
          <Line_total>New PGS/block <CountUp className="pra-total" start={0} end={25} /></Line_total>
        
        </Box_bottom>
    );
  }
}






const Box_bottom = styled.div`
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    border-radius: 32px;
    box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
    color: rgb(69, 42, 122);
    overflow: hidden;
    position: relative;
    padding: 25px;
    @media (max-width:576px){
        max-width:350px;
    }
`


const Title_item = styled.h3`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 15px;
    color: #99378E;
`

const Line_total = styled.p`
    color: #3D3D3D;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pra-total{
        font-weight:bold;
        font-size:16px
    }
`








export default Table;

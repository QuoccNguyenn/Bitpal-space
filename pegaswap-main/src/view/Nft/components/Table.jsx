

import React, { Component } from "react";
import styled from 'styled-components';


class Contents extends Component {
  render() {
    return (
        <Table_ntf>
            <Line_nft>
                <p>Total NFT's claimed: <span>409/600</span></p>
            </Line_nft>
            <Line_nft>
                <p>Total NFT's burned: <span>110/600</span></p>
            </Line_nft>
      </Table_ntf>
    );
  }
}






const Table_ntf = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
  color: rgb(69, 42, 122);
  overflow: hidden;
  position: relative;
  padding: 25px;
  margin-bottom: 25px;
`

const Line_nft = styled.div`
    position:relative;
    p{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        color: #477AB9;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 0;
        span{
            font-weight: bold;
        }
    }
`

const Drep_content = styled.ul`
  

`



export default Contents;

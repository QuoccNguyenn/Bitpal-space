import React, { Component } from "react";
import styled from 'styled-components';


class Title extends Component {
  render() {
    return (
        <Head_ntf>
            <Title_ntf>NFTs</Title_ntf>
            <Drep_ntf>Trade in for CAKE, or keep for your collection!</Drep_ntf>
        </Head_ntf>
    );
  }
}






const Head_ntf = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #99378E;
  margin-bottom: 25px;
`

const Title_ntf = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.1;
  color: #477AB9;
  margin-bottom: 15px;
`

const Drep_ntf = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.1;
  color: #99378E;
`



export default Title;

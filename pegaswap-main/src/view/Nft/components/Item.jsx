import React, { Component } from "react";
import styled from 'styled-components';


class Contents extends Component {
  render() {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <Item_nft>
            <a href="/" className="thum-ntf">
                <img src="images/sb1.png" alt="" />
            </a>
            <Title_item_nft>Swapsies</Title_item_nft>
            <Btn_detail id="btn-detail-ntf">Details <span><i className="fa fa-chevron-down" /></span></Btn_detail>
            <Box_hide_ntf>
                <p>These bunnies love nothing more than swapping pancakes. Especially on BSC.</p>
                <p className="line-ntf">Value if traded in: <span>10 CAKE</span></p>
                <p className="line-ntf">Number minted: <span>133</span></p>
                <p className="line-ntf">Number burned: <span>63</span></p>
            </Box_hide_ntf>
            </Item_nft>
        </div>
    );
  }
}






const Item_nft = styled.div`
  max-width: 290px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
  color: rgb(69, 42, 122);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-bottom: 35px;
`

const Title_item_nft = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  color: #477AB9;
  padding-left: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: solid 1px rgb(207, 204, 204);
  padding-bottom: 10px;
`

const Btn_detail = styled.p`
 color: #99378E;
 cursor: pointer;
 font-size: 16px;
 font-weight: 600;
 text-align: center;
`
const Box_hide_ntf = styled.div`
 padding: 20px;
 text-align: center;
 display: none;
`


export default Contents;

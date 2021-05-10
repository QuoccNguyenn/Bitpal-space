import React, { Component } from "react";
import styled from 'styled-components';



class Contents extends Component {
  render() {
    return (
        <div className="col-12">
            <Box_work>
              <Title_work>How it works</Title_work>
              <List_work>
                  <li><span><i className="fa fa-arrow-right" /></span>Winners will be able to claim an NFT on this page once the claiming period starts.</li>
                  <li><span><i className="fa fa-arrow-right" /></span>If you’re not selected, you won’t be able to claim. Better luck next time!</li>
                  <li><span><i className="fa fa-arrow-right" /></span>Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don't trade in your NFT by then, don’t worry: you’ll still keep it in your wallet!</li>
              </List_work>
              <Title_work>How are winners selected?</Title_work>
              <List_work>
                  <li><span><i className="fa fa-arrow-right" /></span>Winners are selected at random! Good luck!</li>
              </List_work>
              <Button_work path="/">Register for a chance to win</Button_work>
            </Box_work>
    </div>
    );
  }
}






const Box_work = styled.div`
  border-top: 1px solid rgb(174, 160, 214);
  padding-top: 30px;
`

const Title_work = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 25px;
`

const List_work = styled.ul`
  color: #99378E;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 15px;
  margin-bottom: 25px;
  li{
    margin-bottom: 10px;
    list-style:none;
    span{
      margin-right: 10px;
    }
  }
`



const Button_work = styled.a`
    align-items: center;
    background: linear-gradient(59deg,rgba(71,122,185,1) 0%,rgba(153,55,142,1) 35%,rgba(222,48,85,1) 64%,rgba(217,128,87,1) 100%);
    border: 0px;
    border-radius: 16px;
    box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
    color: #fff!important;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: max-content;
    height: 48px;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    padding: 0px 24px;
    transition: background-color 0.2s ease 0s;
    text-decoration: none!important;
`


export default Contents;

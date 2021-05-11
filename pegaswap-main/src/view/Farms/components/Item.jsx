import React, {  useState } from "react";
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Popup from "../../../components/Popup";

const Item = () => {

  const [Status, setStatus] = useState(false);
    return (
      
        <div className="col-lg-4 col-md-6 col-12">
          <Item_cake>
              <Item_cake_thum>
                <div className="icon-cake">
                  <Cake_mutiply><span>0.5X</span></Cake_mutiply>
                  <Cake_tick><span><img src={"images/Stick.png"} alt="" /></span>Core</Cake_tick>
                </div>
                <Thumbani_cake>
                  <p><img src={"images/sp3.png"} alt="" /></p>
                </Thumbani_cake>
              </Item_cake_thum>
              <Item_cake_title>
                <Title>
                  <span>Deposit</span>
                  <Item_right_cake>XTZ-BNB LP</Item_right_cake>
                </Title>
                <Title>
                  <span>Earn</span>
                  <Item_right_cake>EarnCAKE</Item_right_cake>
                </Title>
              </Item_cake_title>
              <Item_cake_btn>
                <Cake_btn onClick={() => setStatus(true)}>Unlock Wallet</Cake_btn>
              </Item_cake_btn>
              <div className={`box ${Status ? "active" : ""}`}>
                <Popup onClose={() => setStatus(false)} />
              </div>
          </Item_cake>
      </div>
    );
  }







const Item_cake = styled.div`
  cursor:pointer;
  max-width: 290px;
  margin: 0 auto;
  background: #fff;
  border-radius: 32px;
  box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
  padding: 35px 25px;
  position: relative;
  text-align: center;
  margin-bottom: 35px;
  transition: ease-in-out .5s all;
  &:hover{
    ::after{
      opacity:1;
    }
  }
  &::after{
    transition: ease-in-out .5s all;
    opacity: 0;
    filter: blur(6px);
    position: absolute;
    content:"";
    top: 0px;
    right: 0px;
    bottom: -2px;
    left: -2px;
    z-index: -1;
    background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;
    animation: 2s linear 0s infinite normal none running bzhXFX;
    border-radius: 16px;
  }
  .box{
    display:none;
  }
  .active{
    display:block;
  }
`


const Item_cake_thum = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const Item_cake_title = styled.div`
  position:relative;
`

const Thumbani_cake = styled.div`
  max-width: 80px;
  overflow: hidden;
  p{
    width:100%;
    img{
      width:100%;
      overflow:hidden;
    }
  }
`

const Title = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: #477AB9;
  margin-bottom: 5px;
  span{

  }
`

const Item_cake_btn = styled.div`
  margin-top: 30px;
`

const Item_right_cake = styled.span`
  color: #99378E;
  font-weight: 700;
`


const Cake_btn = styled.button`
  cursor: pointer;
  -webkit-box-align: center;
  align-items: center;
  background: linear-gradient(59deg,rgba(71,122,185,1) 0%,rgba(153,55,142,1) 35%,rgba(222,48,85,1) 64%,rgba(217,128,87,1) 100%);
  border: 0px;
  border-radius: 16px;
  box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 48px;
  letter-spacing: 0.03em;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none!important;
  padding: 0px 24px;
  transition: ease-in-out .5s all;
  &:hover{
    background: #000;
  }
`
const Cake_mutiply = styled.p`
  padding: 3px 7px;
  border-radius: 11px;
  color: rgb(250,249,250);
  font-weight: bold;
  background: #99378E;
  font-size: 14px;
  width: 70%;
`

const Cake_tick = styled.p`
  border: 2px solid #477AB9;
  border-radius: 16px;
  color: #477AB9;
  font-size: 14px;
  font-weight: 400;
  /* padding: 0 8px; */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  padding-top: -5px;
  height: 27px;
  width: 65px;
  justify-content: center;
  span{
    max-width:18px;
    display:block;
    height:19px;
    img{
      width:100%;
      margin-top:-4px;
    }
  }
`


export default Item;

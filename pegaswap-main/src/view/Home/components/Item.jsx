import React, {  useState } from "react";
import styled from 'styled-components';


const Item = () => {

    const [Status, setStatus] = useState(false);

    return (
        <React.Fragment> 
            <Box_item>
                <Title_item>Farms &amp; Staking</Title_item>
                <Thum_item to="/">
                    <img src="./images/circle-1.png" alt="" />
                </Thum_item>
                <Title_locked>Locked <span>PGS to Harvest</span></Title_locked>
                <Title_locked>Locked <span>PGS in Wallet</span></Title_locked>
                <Btn_locked onClick={() => setStatus(true)}>Unlock Wallet</Btn_locked>
                
            </Box_item>
            <Box_item>
                <Title_item>Your Lottery Winnings</Title_item>
                <Thum_item to="/">
                    <img src="./images/circle-1.png" alt="" />
                </Thum_item>
                <Price_locked>0.000 <span>PGS to Collect</span></Price_locked>
                <Price_locked>0<span>Total jackpot this round</span></Price_locked>
                <Btn_group_locked>
                    <Btn_locked disabled>Collect Winnings</Btn_locked>
                    <Btn_locked disabled>Buy Tickets</Btn_locked>
                </Btn_group_locked>
            </Box_item>
      </React.Fragment>
    );
  }







const Box_item = styled.div`
    cursor:pointer;
    position: relative;
    max-width: 450px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    border-radius: 32px;
    box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
    color: rgb(69, 42, 122);
    overflow: hidden;
    position: relative;
    padding: 25px;
    .box{
        display:none;
        }
    .active{
        display:block;
        }
    ::after{
        content:"";
        opacity:0.3;
        position:absolute;
        width:200px;
        height:180px;
        top:35px;
        right:10px;
        background:url('../images/blackpull.png');
        background-size:200px 180px;
        background-repeat: no-repeat;
    }
    ::before{
        content:"";
        opacity:0;
        position:absolute;
        width:200px;
        height:180px;
        top:0px;
        right:-10px;
        background:url('../images/blackpull.png');
        background-size:200px 180px;
        background-repeat: no-repeat;
        transition: ease-in-out .5s all;
    }
    &:hover{
        ::before{
            opacity:1;
            top:35px;
            right:10px;
        }
    }
    @media (max-width:768px){
        max-width: 280px;
    }
    @media (max-width:576px){
        margin-bottom:25px;
        max-width:100%;
    }
`


const Title_item = styled.h3`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 25px;
    color: #99378E;
`

const Thum_item = styled.a`
    display: block;
    max-width: 75px;
    position:relative;
    overflow: hidden;
    width: 100%;
    margin-bottom: 15px;
    img{
        width:100%;
        object-fit:cover;
    }
`

const Title_locked = styled.p`
    color: #3D3D3D;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 15px;
    span{
        color: #99378E;
        display: block;
        font-weight:bold;
    }
`



const Price_locked = styled.p`
   font-size: 18px;
   color: #3D3D3D;
   font-weight:bold;
    span{
        display: block;
        color: #99378E;
        font-size: 14px;
        font-weight:500;
    }
`

const Btn_locked = styled.button`
   -webkit-box-align: center;
    align-items: center;
    background-color: #fff;
    border: 0px;
    border-radius: 16px;
    box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
    color: #fff;
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
    padding: 0px 15px;
    transition: ease-in-out 0.5s all;
    background: rgb(71,122,185);
    background: linear-gradient(59deg, rgba(71,122,185,1) 0%, rgba(153,55,142,1) 35%, rgba(222,48,85,1) 64%, rgba(217,128,87,1) 100%);
    &:hover{
        background:#000;
    }
`



const Btn_group_locked = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  button{
    width:48%;
    cursor:not-allowed;
    @media (max-width:770px){
        font-size:12px;
    }
  }
`

export default Item;

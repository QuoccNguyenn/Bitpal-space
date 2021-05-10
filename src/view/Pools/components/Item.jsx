import React, {  useState } from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup';
import Popup from "../../../components/Popup";


const Item = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };

    const [Status, setStatus] = useState(false);
  return (
    <div className="col-lg-4 col-md-6 col-12">
    <Box_item>
        <Title_item>CAKE Pool</Title_item>
        <Thumbnail_item><img src="images/sr1.png" alt="" /></Thumbnail_item>
        <Pramester_item>
            <p className="title-pramester-cake">0.000
            <span>CAKE prizes to be claimed!</span>
            </p>
        </Pramester_item>
        <Button_item>
            <button onClick={() => setStatus(true)}>Unlock Wallet</button>
        </Button_item>
        <div className={`box ${Status ? "active" : ""}`}>
            <Popup onClose={() => setStatus(false)} />
        </div>
        <Price_item>
            <p>APY: <CountUp className="pools-right" start={150} end={19990606} /></p>
            <p>🥞 Your Stake: <CountUp className="pools-right" start={0} end={0} /></p>
        </Price_item>
        <Detail_item>
            <div className="icon-cake">
                <Cake_tick><span><img src={"images/Stick.png"} alt="" /></span>Core</Cake_tick>
            </div>
            <Detail_show_item onClick={handleToggle} className={isActive ? "n-rotay" : "rotay"} >Details <span><i className="fa fa-chevron-down" /></span></Detail_show_item>
        </Detail_item>
        <Detail_hide_item className={isActive ? "hide" : "show"}>
            <Total_hide_item>🥞 Total <CountUp className="pools-right" start={1000} end={23800} /></Total_hide_item>
            <View_item><a href="/">View project site</a></View_item>
        </Detail_hide_item>
    </Box_item>
</div>
  )
}


const Box_item = styled.div`
    max-width: 262px;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    border-radius: 32px;
    box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
    padding: 24px;
    position: relative;
    margin-bottom: 35px;
    transition: ease-in-out .5s all;
    .box{
    display:none;
    }
    .active{
        display:block;
    }
`
const Title_item = styled.h3`
    color: #DE3055;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.1;
    margin-bottom: 15px;
`

const Thumbnail_item = styled.p`
    max-width: 65px;
    overflow: hidden;
    img{
        width:100%;
        object-fit:cover;
    }
`

const Pramester_item = styled.div`
    p{
        text-align: left;
        color: #DE3055;
        font-size: 22px;
        font-weight: bold;
        span{
            font-size: 14px;
            color: #99378E;
            display: block;
        } 
    }
`


const Button_item = styled.div`
    margin-bottom: 15px;
    button{
        outline:none!important;
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
        outline: 0px;
        padding: 0px 24px;
        transition: background-color 0.2s ease 0s;
        &:hover{
            background:#000;
        }
    }
`

const Cake_tick = styled.p`
  border: 2px solid #477AB9;
  border-radius: 16px;
  color: #477AB9;
  font-size: 14px;
  font-weight: 400;
  margin-top:3px;
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

const Price_item = styled.div`
    margin-bottom: 15px;
    p{
        font-weight: 500;
        color: #477AB9;
        margin-bottom: 2px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        .pools-right{
            color: #DE3055!important;
            font-weight: bold;
        } 
    }
`


const Detail_item = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::before{
        position: absolute;
        top: -5px;
        content: "";
        width: 260px;
        height: 0.5px;
        background: #e6e2e2;
        left: -25px;
        max-width: 260px; 
    }
`


const Detail_show_item = styled.p`
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #99378E;
    &.rotay{
       i{
        transform: rotate(180deg);
       } 
    }
`

const Detail_hide_item = styled.div`
    display:none;
    transition: ease-in-out .5s all;
    height:0; 
    &.show{
        display:block;
        height:100%;
    }
`
const Total_hide_item = styled.p`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    color: rgb(118, 69, 217);
`

const View_item = styled.p`
    a{
        font-size: 14px;
        color: rgb(18, 170, 181);
        font-weight: 400;
    }
`

export default Item

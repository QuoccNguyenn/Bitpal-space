import React, { useState }  from "react";
import styled from "styled-components";
import Popup from "../../../../../components/Popup";


const TopMain = () => {

  const [Status, setStatus] = useState(false);

  return (
    <StyleBox>
      <StyledContentFrist>
        <StyledBoxFrist>
          <div className="HeadBoxFrist">
            <div className="MainHead">
              <HeadLeft>
                <div className="thum-lottery">
                    <img src="./images/round.png" alt="" />
                </div>
                <HeadLeftText>
                  <div className="TextTotal">Total Pot:</div>
                  <h2>0 CAKE</h2>
                </HeadLeftText>
              </HeadLeft>
              <HeadRight>
                <div className="Detail">
                  <div className="textDetail">Details</div>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-hBEYos ivTGBL"
                  >
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                  </svg>
                </div>
              </HeadRight>
            </div>
          </div>
          <div className="FootBoxFrist">
            <MainFoot className="MainFoot">
              <div className="FootContent">
                <FootGird className="FGC">
                  <div>No. Matched</div>
                </FootGird>
                <FootGird className="FGC right">
                  <div>Prize Pot</div>
                </FootGird>
                <FootGird className="">
                  <div>4</div>
                </FootGird>
                <FootGird className="right">
                  <div>0</div>
                </FootGird>
                <FootGird>
                  <div>3</div>
                </FootGird>
                <FootGird className="right">
                  <div>0</div>
                </FootGird>
                <FootGird>
                  <div>2</div>
                </FootGird>
                <FootGird className="right">
                  <div>0</div>
                </FootGird>
                <FootGird>
                  <div>To burn:</div>
                </FootGird>
                <FootGird className="right">
                  <div>0</div>
                </FootGird>
              </div>
            </MainFoot>
          </div>
        </StyledBoxFrist>
      </StyledContentFrist>
      <StyledContentFrist>
        <div className="BoxSecond">
          <MainBoxSecond>
            <BoxSecondDiv>
                <img src="./images/ticket.png" alt="" />
            </BoxSecondDiv>
            <h2>Unlock wallet to access lottery</h2>
            <button onClick={() => setStatus(true)}>Unlock Wallet</button>
            <div className={`box ${Status ? "active" : ""}`}>
              <Popup onClose={() => setStatus(false)} />
            </div>
          </MainBoxSecond>
        </div>
      </StyledContentFrist>
    </StyleBox>
  );
};
const BoxSecondDiv = styled.div`
  img {
    width: 80px;
  }
`;

const MainBoxSecond = styled.div`
  padding: 24px;
  position:relative;
  display: flex;
  z-index:10;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
 
  > h2 {
    margin: 16px 0px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.1;
    color: #99378E;
  }
  > button {
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
    width: max-content;
    height: 48px;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    padding: 0px 24px;
    transition: ease-in-out .5s all;
    &:hover{
      background:#000;
    }
  }
  .box{
    display:none;
  }
  .active{
    display:block;
  }
`;

const FootGird = styled.div`
margin-bottom: 10px;
>div{
    color: rgb(69, 42, 122);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
}
}
`;
const MainFoot = styled.div`
  border-top: 1px solid rgb(233, 234, 235);
  padding: 24px;
  .FootContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    .right div {
      text-align: right;
    }
  }
  .FGC div {
    color: rgb(174, 160, 214);
  }
`;

const HeadRight = styled.div`
  display: none;
  .Detail {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

    @media screen and (min-width: 576px) {
      
      
      }
      .textDetail {
        color: rgb(31, 199, 212);
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
    }
      > svg {
        fill: rgb(31, 199, 212);
      }
    }
  }
`;

const HeadLeftText = styled.div`
display: flex;
flex-direction: column;
.TextTotal{
    color: rgb(174, 160, 214);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
}
>h2{
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
    color: rgb(69, 42, 122);
}
}
`;

const HeadLeft = styled.div`
  display: flex;
  .thum-lottery{
    max-width:80px;
  }
  > div {
    margin-right: 16px;
    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

const StyledBoxFrist = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px,
    rgba(25, 19, 38, 0.05) 0px 1px 1px;
  color: rgb(69, 42, 122);
  overflow: hidden;
  position: relative;
  .HeadBoxFrist {
    padding: 24px;
    padding-bottom: 5px;
  }
  .FootBoxFrist {
    height: 100%;

    @media screen and (min-width: 576px) {
      height: 100%;
    }
  }
  .MainHead {
    padding: 24px;
    padding-bottom: 5px;
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`;

const StyledContentFrist = styled.div`
  grid-column: span 6 / auto;
  @media screen and (min-width: 576px) {
    grid-column: span 12 / auto;
  }
  @media screen and (min-width: 968px) {
    grid-column: span 4 / auto;
  }
  .BoxSecond {
    background-color: #fff;
    border-radius: 32px;
    color: rgb(69, 42, 122);
    position: relative;
    &:hover{
      &::after{
        opacity:1;
      }
    }
    &::after{
      -webkit-transition: ease-in-out .5s all;
      transition: ease-in-out .5s all;
      opacity: 0;
      -webkit-filter: blur(6px);
      filter: blur(6px);
      position: absolute;
      content: "";
      top: 0px;
      right: 0px;
      bottom: -2px;
      left: -2px;
      z-index: -1;
      background: linear-gradient(45deg,rgb(255,0,0) 0%,rgb(255,154,0) 10%,rgb(208,222,33) 20%,rgb(79,220,74) 30%,rgb(63,218,216) 40%,rgb(47,201,226) 50%,rgb(28,127,238) 60%,rgb(95,21,242) 70%,rgb(186,12,248) 80%,rgb(251,7,217) 90%,rgb(255,0,0) 100%) 0% 0% / 300% 300%;
      -webkit-animation: 2s linear 0s infinite normal none running bzhXFX;
      animation: 2s linear 0s infinite normal none running bzhXFX;
      border-radius: 16px;
    }
  }
`;

const StyleBox = styled.div`
  -webkit-box-align: start;
  align-items: start;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  @media screen and (min-width: 968px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 32px;
  }
  @media screen and (min-width: 852px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
  }
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
  }
`;

export default TopMain;

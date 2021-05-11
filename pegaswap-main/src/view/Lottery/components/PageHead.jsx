import React from 'react'
import styled from 'styled-components'
import ProgressBar from 'react-bootstrap/ProgressBar'; 


const PageHead = () => {
    return (
      <StyledBg>
        <StyledHeadPage>
          <StyledHPRight>
            <h2>The CAKE Lottery</h2>
            <div>Buy tickets with CAKE</div>
            <div>Win if 2, 3, or 4 of your ticket numbers match!</div>
          </StyledHPRight>
          <StyledHPLeft>
            <StyledLeftMain>
            {/* <ProgressBar now={60} /> */}
              <div className="line">
                <div className="line-icon">
                    <img src="images/hore_icon.png" />
                </div>
                <div className="line-width"></div>
              </div>
              <div className="MainSale">
                <div className="time">0h, 21m</div>
                <div className="until">Until ticket sale</div>
                
              </div>
              <div className="MainBot">4h, 17m Until lottery draw</div>
            </StyledLeftMain>
          </StyledHPLeft>
        </StyledHeadPage>
      </StyledBg>
    );
}

const StyledLeftMain = styled.div`

  display: block;
  width: 100%;
  text-align: center;
  color: white;

  .MainSale{
    margin-top: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    .time{
        color: rgb(25, 19, 38);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-right: 16px;
    }
    .until{
        color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    }
  }

    .line {
    width: 100%;
    position: relative;
    background-color: rgb(238, 234, 244);
    border-radius: 32px;
    box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
    height: 16px;
    &-icon {
      left: 50%;
      display: flex;
      z-index: 2;
      top: -16px;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: left 200ms ease-out 0s;
      max-width:36px;
    }
    &-width {
      width: 50%;
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: #DE3055;
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
      height: 16px;
      transition: width 200ms ease 0s;
    }
  }
`;
const StyledHPLeft = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 0%;
  padding-left: 0px;
  margin-top: 16px;
  
  @media screen and (min-width: 576px) {
    padding-right: 24px;
    margin-top:30px;
  }
  @media screen and (max-width: 576px) {
    margin-top:33px;
  }
  @media screen and (min-width: 968px) {
    padding-right: 32px;
  }
  
`;




const StyledHPRight = styled.div`
  flex: 1 1 0%;
  padding-right: 0px;
  font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
    color: rgb(255, 255, 255);
  @media screen and (min-width: 576px) {
    padding-right: 24px;
  }
  @media screen and (min-width: 968px) {
    padding-right: 32px;
  }
  > h2 {
    color:#DE3055 ;
    margin-bottom: 15px;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
  }
  div{
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
  }
`

const StyledBg = styled.div`
  background: linear-gradient(59deg,rgba(71,122,185,0.300455216266194) 0%,rgba(153,55,142,0.300455216266194) 35%,rgba(222,48,85,0.3) 64%,rgba(217,128,87,0.3) 100%);
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`;

const StyledHeadPage = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  max-width: 968px;
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (min-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: row;
  }
  @media screen and (min-width: 968px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
export default PageHead
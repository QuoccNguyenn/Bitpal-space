import React, {  useState } from "react";
import styled from 'styled-components'
import Container from '../../../../components/Container'
import Line from './components/Line'
import DittoHeader from './components/DittoHeader'
import Liner from './components/Liner'
import Time from './components/Time'
import ButtonForm from '../../../../components/ButtonForm'
// import StyleText from '../TextStyle'
import ButtonHide from './components/ButtonHide'
import GroupRow from './components/GroupRow'
// import StyleA from '../StyleA'
import StyleAImg from '../StyeAImg'
 

const Form = () => {
    
  const handleToggle = () => {
    if ( !document.getElementById('active').classList.contains('none')){
        document.getElementById('active').classList.add("none");
    }else{
      document.getElementById('active').classList.remove("none");
    }
  }
    
    return (
      <Container>
        <StyledForm>
          <StyledMain>
            <Line />
            <StyledDitto className="aaaaaa">
              {/* <StyleHeadBox>
                <img src="images/ditto.svg" alt=""/>
                <DittoHeader /> 
              </StyleHeadBox> */}
              <DittoHeader />

              <Liner />

              <Time blocks="(blocks)" time="0d, 14h, 48m until start"/>
              
              {/* <Button></Button> */}
              <StyledDittoText>
                <ButtonForm width="100%" height="46px" title=" Unlock Wallet"> </ButtonForm>
                <StyleMagin>
                  <StyledDittoTextLine ></StyledDittoTextLine>
                  <StyleHide onClick = {handleToggle} >Hide</StyleHide>
                  <StyledText id="active" className="none"
                  >Ditto is the first elastic supply token on the Binance Smart Chain. Its goal is to maintain a stable price of $1, where its supply will adapt to changes in demand. All supply changes will apply equally to every wallet holding Ditto,
                  and holders should always have the same % of the total supply</StyledText>
                  
                </StyleMagin>
              </StyledDittoText>
              <GroupRow></GroupRow>
              <StyleAImg title="View project site" href="https://ditto.money/"/>
              
              {/* <StyledDittoView></StyledDittoView> */}
            </StyledDitto>
          </StyledMain>
        </StyledForm>
      </Container>
    );
  }

  const StyleHide = styled.div`
    background: transparent;
    border: none;
    color: #477AB9;
    cursor: pointer;
    display: block;
    font-weight: 600;
    outline: 0px;
    padding: 24px 16px;
    width: 100%;
    front-size: 20px;
    text-align: center
`
  const BoxTime = styled.div`
  div {
    bakground: red;
  }
 `
  const StyledText = styled.div`
    color: #477AB9;
    opacity:0.6;
    &.none{
      display:none;
    }
  `
 
  
  const StyleMagin = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
  `
 
  // const StyledDittoDetail = styled.div`
    
  // `
  // const StyledDittoTexts = styled.div`
  //   color: rgb(174, 160, 214);
  //   display: block;
  //   font-size: 16px;
  //   font-weight: 400;
  //   line-height: 1.5;
  // `StyleHeadBox
  const StyleHeadBox = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin-bottom: 32px;
  `
  
  const StyledDittoText = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
   
  `
  const StyledDittoTextLine = styled.div`
  background-color: rgb(233, 234, 235);
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
`

 
 
// const StyledSubtitle = styled.div`
//     color: rgb(174, 160, 214);
//     font-size: 14px;
//     text-align: right;
//     font-weight: 400;
//     line-height: 1.5;
// `



  const StyledForm = styled.div`
    padding-bottom: 40px;
    padding-top: 40px;
  `

  const StyledMain = styled.div`
    background-image: url('/images/ditto-bg.svg');
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 112px;
    margin-left: auto;
    margin-right: auto;
    max-width: 437px;

    background-color: rgb(255, 255, 255);
    border-radius: 32px;
    box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
    color: rgb(69, 42, 122);
    overflow: hidden;
    position: relative;
  `

  
  
  // const StyledLineTitle = styled.div`
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  //   width: 96px;
  // `
  const StyledDitto = styled.div`
    padding: 24px;
  `

  export default Form
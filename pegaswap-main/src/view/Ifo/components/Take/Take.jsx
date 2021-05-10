import React , {useState}from 'react'
import styled from 'styled-components'
import TextStyle from '../TextStyle'
import StyeAImg from '../StyeAImg'
import ContentSale from './components/ContentSale'
import Container from '../../../../components/Container'
import HeadTitle from '../../../Lottery/components/HeadTitle'
import StyleSale from './components/StyteSale'
import ButtonForm from '../ButtonForm'
import { Button } from 'bootstrap'

const Take = () => {
    return(
        <Container>
        <StyleBox>
            <ContentTake>
                <HeadTitle title="How to take part"/>
                <StyleSale title="Before Sale:"/>
                <ContentSale title="Buy CAKE and BNB tokens"/>
                <ContentSale title="Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity"/>
                <StyledFlex>
                    <StyeAImg title="Buy cake " href="https://exchange.pancakeswap.finance/#/swap"/>
                    <StyeAImg title="Get LP tokens " href="https://exchange.pancakeswap.finance/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"/>
                </StyledFlex>
                
                <StyleSale title="During Sale:"/>
                <ContentSale title="While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens"/>
                
                <StyleSale title="After Sale:"/>
                <ContentSale title="Claim the tokens you bought, along with any unspent funds."/>
                <ContentSale title="Done!"/>
                <StyledTop/>
                <ButtonRead>Read more</ButtonRead>
            </ContentTake>
            <ContentTake>
                <img width="334px" src="/images/ifo-bunny.svg" alt=""/>
                <ContentTake>
                    <HeadTitle title="Want to launch your own IFO?"/>
                    <TextStyle title="Launch your project with PancakeSwap, Binance Smart Chain’s most-used AMM project and liquidity provider,
                     to bring your token directly to the most active and rapidly growing community on BSC."/>
                     <StyledBot/>
                     <ButtonA href="https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform">Apply to launch</ButtonA>
                </ContentTake>
            </ContentTake>
        </StyleBox>
        </Container>
        
    )
}

const StyledTop = styled.div`
    padding-top: 16px;
`
const ButtonRead = styled.a`
    webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid #DE3055;
    border-radius: 16px;
    box-shadow: none;
    color: #DE3055;
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
    text-decoration: none;
    :hover:not(:disabled):not(:active) {
        background-color: transparent;
        border-color: rgb(83, 222, 233);
    }
    :focus:not(:active) {
        box-shadow: rgb(118, 69, 217) 0px 0px 0px 2px;
    }
    :active {
        background-color: transparent;
        box-shadow: none;
    }
    :hover{
        color: rgb(31, 199, 212);
        text-decoration: none;
    }
`

const ButtonA = styled.a`
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
    transition: background-color 0.2s ease 0s;
    &:active {
        background-color: rgb(0, 152, 161);
        box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
    }
    :hover {
        color: rgb(255, 255, 255);
        text-decoration: unset;
    }
    :focus:not(:active) {
        box-shadow: rgb(118, 69, 217) 0px 0px 0px 2px;
    }
    :hover:not(:disabled):not(:active) {
        background-color: rgb(83, 222, 233);
        border-color: currentcolor;
    }
`

const StyledBot = styled.div`
    margin-bottom: 16px;

`

const ContentTake = styled.div`
    position: relative
   > img{
       absolute
       width: 100%;
   }

`
const StyleBox = styled.div`
    border-top: 2px solid rgb(174, 160, 214);
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin: 0px auto;
    max-width: 700px;
    padding: 32px 0px;
    @media screen and (min-width: 576px){
        grid-template-columns: 1fr 1fr;
    }

`

const StyledFlex = styled.div`
    display: flex;
    margin-bottom: 16px;
    >div:first-child{
        margin-right: 16px;
    }
`

export default Take
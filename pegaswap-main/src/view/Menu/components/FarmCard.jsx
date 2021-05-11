import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Spacer from '../../../components/Spacer'
import {supportedPools} from '../../../constants'



const FarmCard = () => {
  // const array = [FarmCards, FarmCards, FarmCards, FarmCards, FarmCards]
  // const rows = farms.reduce<FarmWithStakedValue[][]>(
  //   (farmRows, farm, i) => {
  //     const farmWithStakedValue = {
  //       ...farm,
  //       ...stakedValue[i],
  //       apy: stakedValue[i]
  //         ? sushiPrice
  //             .times(SUSHI_PER_BLOCK)
  //             .times(BLOCKS_PER_YEAR)
  //             .times(stakedValue[i].poolWeight)
  //             .times(3)
  //             .div(stakedValue[i].totalWethValue)
  //         : null,
  //     }
  //     const newFarmRows = [...farmRows]
  //     if (newFarmRows[newFarmRows.length - 1].length === 3) {
  //       newFarmRows.push([farmWithStakedValue])
  //     } else {
  //       newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
  //     }
  //     return newFarmRows
  //   },
  //   [[]],
  // )

  return (
    <StyledCards>

      <StyledRow>

        <React.Fragment>
            {supportedPools.map((item,i)=>{
                return (
                  <FarmCards key={`card_${i}`} card={item} />
                )
            })}

          
          {/* <FarmCards />
          <StyledSpacer /> */}
        </React.Fragment>
  
      </StyledRow>
      

    </StyledCards>
  )
}

const FarmCards = ({card}) => {
  

  return (
    <StyledCardWrapper>
      <StyledCardAccent />
      <Card>
        <CardContent>
          <StyledContent>
            <CardIcon>{card.icon}</CardIcon>
            <StyledTitle>{card.name}!</StyledTitle>
            <StyledDetails>
              <StyledDetail>Deposit {card.symbol}</StyledDetail>
              <StyledDetail>Earn SHUSHI</StyledDetail>
            </StyledDetails>
            <Spacer />
            <Button
              // disabled={!poolActive}
              text={'Select' }
              to={`/farm?symbol=${card.tokenSymbol}`}
            >
            </Button>
            <StyledInsight>
              <span>APY</span>
              <span>
                45.74%
              </span>
              {/* <span>
                {farm.tokenAmount
                  ? (farm.tokenAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                {farm.tokenSymbol}
              </span>
              <span>
                {farm.wethAmount
                  ? (farm.wethAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                ETH
              </span> */}
            </StyledInsight>
          </StyledContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>
  )
}

const RainbowLight = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledGrid = styled.div`{
  
}
`
const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const StyledCards = styled.div`
  width: 900px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px 10px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: unset;
    grid-gap: 20px 0;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - 24px * 2) / 3);
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledTitle = styled.h4`
  color: #5b3926;
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledSpacer = styled.div`
  height:24px;
  width:24px;
`

// const StyledSpacerTop = styled.div`
//   height:24px;
//   width:24px;
// `

const StyledDetails = styled.div`
  margin-top: 8px;
  text-align: center;
`

const StyledDetail = styled.div`
  color: #805e49;
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fffdfa;
  color: #aa9584;
  width: 100%;
  margin-top: 12px;
  line-height: 32px;
  font-size: 13px;
  border: 1px solid #e6dcd5;
  text-align: center;
  padding: 0 12px;
`

export default FarmCard

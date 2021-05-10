import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'

import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'

import Harvest from './components/Harvest'
import Stake from './components/Stake'

import {getParam } from '../../utils'
import {supportedPools} from '../../constants'
import Page from '../../components/Page'

const Farm = () => {
  // const { farmId } = useParams()
  // const {
  //   pid,
  //   lpToken,
  //   lpTokenAddress,
  //   tokenAddress,
  //   earnToken,
  //   name,
  //   icon,
  // } = useFarm(farmId) || {
  //   pid: 0,
  //   lpToken: '',
  //   lpTokenAddress: '',
  //   tokenAddress: '',
  //   earnToken: '',
  //   name: '',
  //   icon: '',
  // }
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  // {
  //   supportedPools.map((item, i) => {
  //     return (
        
  //     )
  //   })
  // }

//   {supportedPools.map((item,i)=>{
//      if(item.tokenSymbol === symbol)
//     return (
//       <FarmCards key={`card_${i}`} card={item} />
//     )
// })}

  const symbol = getParam('symbol') ;

  // const card = () => {
  //   supportedPools.map((item) => {
  //     if (item.tokenSymbol === symbol) {
  //       return item;
  //     }
  //   })
  // }
  
  const card = supportedPools.find( item => item.tokenSymbol === symbol);

  return (
    <Page>
      <PageHeader
        icon={card.icon}
        subtitle={`Deposit ${card.symbol} Tokens and earn  ${card.tokenSymbol}`}
        title={`${card.name}`}
      />
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <Harvest />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Stake 
              tokenName={`${card.symbol}`}
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <StyledInfo>
          ⭐️ Every time you stake and unstake LP tokens, the contract will
          automagically harvest SUSHI rewards for you!
        </StyledInfo>
        <Spacer size="md" />
        <StyledLink
          target="__blank"
          href={`https://sushiswap.vision/pair/`}
        >
          {`${card.symbol}`} Info
        </StyledLink>
        <StyledLink
          target="__blank"
          href={`https://lite.sushiswap.fi/#/migrate`}
        >
          UNI to SLP 1 Click Migration
        </StyledLink>
      </StyledFarm>
    </Page>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: #aa9585;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyledLink = styled.a`
  color: #d16c00;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
  &:hover {
    color: #805e49;
  }
`

export default Farm

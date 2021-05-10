import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'

import Spacer from '../../components/Spacer'

// import {getContract} from '../../utils/erc20'
import UnstakeXSushi from './components/UnstakeXSushi'
import StakeSushi from "./components/StakeSushi";

// import {getBalanceNumber} from "../../utils/formatBalance";

const StakeXSushi = () => {

  

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXSushi
              
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeSushi
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees based on the amount
              of xSushi held relative the weight of the staking. xSushi can be minted
              by staking Sushi. To redeem Sushi staked plus swap fees convert xSushi
              back to Sushi.  
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
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

export default StakeXSushi

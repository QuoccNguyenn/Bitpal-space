import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
// import {getBalanceNumber} from '../../../utils/formatBalance'



const UnstakeXSushi = () => {

  
  // const tokenName = "xSUSHI"


  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>🍣</CardIcon>
            <Value value='0.00000000'/>
            <Label text="xSUSHI (SushiBar) Available"/>
          </StyledCardHeader>
          <StyledCardActions>
            <Button
             
              text={'Converting to SUSHI'}
              
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  width: 100%;
`

const StyledSpacer = styled.div`
  height: 24px;
  width: 24px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default UnstakeXSushi

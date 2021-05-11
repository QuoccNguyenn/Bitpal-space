import React from 'react'
import styled from 'styled-components'
// import Container from '../../../components/Container'

const PageHeader = ({ subtitle, title }) => {
    return (
     
        <StyledPageHeader >
          <StyledTitle >{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledPageHeader>
      
    )
  }

  const StyledPageHeader = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 968px;
    padding-left: 16px;
    padding-right: 16px;
    @media screen and (min-width: 576px){
      padding-left: 24px;
      padding-right: 24px;
    }
    @media screen and (min-width: 968px){
      padding-left: 32px;
      padding-right: 32px;
    }

`
const StyledTitle = styled.h2`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
    color: #477AB9;
    margin-bottom: 15px;
`

const StyledSubtitle = styled.div`
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
`

export default PageHeader
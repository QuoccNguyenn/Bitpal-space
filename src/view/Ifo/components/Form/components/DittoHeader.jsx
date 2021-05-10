import React from 'react'
import styled from 'styled-components'

const DittoHeader = () => {
    return (
      <StyledDittoHeader>
        {/* <StyledThumbBox>
        <img src="images/ditto.svg" alt=""/>
        </StyledThumbBox> */}

        <img src="images/ditto.svg" alt=""/>

        <StyledTitle>
          Ditto (DITTO)
          <StyledSubtitle>Next-gen elastic supply token</StyledSubtitle>
        </StyledTitle>
      </StyledDittoHeader>

    );
}

const StyledDittoHeader = styled.div`
  
  align-items: center;
  display: flex;
  margin-bottom: 32px;
`
// const StyledThumbBox = styled.div`
//     max-width: 65px;
//     width: 100%;
//     overflow: hidden;
//     > img{
//         width: 100%;
//         object-fit: cover;
//     }
// `
const StyledSubtitle = styled.span`
    display: block;
    font-size: 14px;
    color: #477AB9;
    opacity:0.6;
`
const StyledTitle = styled.div`
    flex: 1 1 0%;
    font-size: 24px;
    font-weight: bold;
    color: #477AB9;
    text-align: right;
`

export default DittoHeader
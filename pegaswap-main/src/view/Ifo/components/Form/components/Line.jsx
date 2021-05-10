import React from 'react'
import styled from 'styled-components'

const Line = () =>{
    return (
      <StyledLine>
        <StyledTitle> Coming Soon </StyledTitle>
      </StyledLine>
    );
}
const StyledLine = styled.div`
    background-color: #DE3055;
    color: white;
    margin: 0px;
    padding: 4px 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    text-align: center;
    transform: translateX(30%) translateY(0%) rotate(45deg);
    transform-origin: left top;
    width: 96px;
    &::after{
        left: 100%;
        background-color: #DE3055;
        content: "";
        height: 100%;
        margin: 0px -1px;
        position: absolute;
        top: 0px;
        width: 100%;
    }
    &::before{
        right: 100%;
        background-color: #DE3055;
        content: "";
        height: 100%;
        margin: 0px -1px;
        position: absolute;
        top: 0px;
        width: 100%;
    }
  `
  const StyledTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
`
export default Line
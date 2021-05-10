import React from 'react'
import styled from 'styled-components'

const Liner = () =>{
    return (
      <StyledDittoLiner>
        <StyledDot></StyledDot>
      </StyledDittoLiner>
    );
}

const StyledDittoLiner = styled.div`
position: relative;
background-color: rgb(238, 234, 244);
border-radius: 32px;
box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
height: 16px;
margin-bottom: 16px;
`
const StyledDot = styled.div`
position: absolute;
width: 5%;
top: 0px;
left: 0px;
background-color: rgb(118, 69, 217);
border-top-left-radius: 32px;
border-bottom-left-radius: 32px;
height: 16px;
transition: width 200ms ease 0s;
`

export default Liner
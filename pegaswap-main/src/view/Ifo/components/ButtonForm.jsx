import React from 'react'
import styled from 'styled-components'


const ButtonForm = ({width, title}) =>{
    return (
        <StyledDittoTextButton width={width} >{title}</StyledDittoTextButton>
    );
}
const StyledDittoTextButton = styled.div`
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
    
    height: 48px;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    padding: 0px 24px;
    transition: background-color 0.2s ease 0s;
`

export default ButtonForm
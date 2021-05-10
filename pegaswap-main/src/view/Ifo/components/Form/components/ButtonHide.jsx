import { Button } from 'bootstrap'
import React from 'react'
import styled from 'styled-components'

const ButtonHide = () => {
    return(
        <StyleHide>Hide</StyleHide>
    )
}

const StyleHide = styled.div`
    background: transparent;
    border: none;
    color: #477AB9;
    cursor: pointer;
    display: block;
    font-weight: 600;
    outline: 0px;
    padding: 24px 16px;
    width: 100%;
    front-size: 20px;
    text-align: center
`

export default ButtonHide
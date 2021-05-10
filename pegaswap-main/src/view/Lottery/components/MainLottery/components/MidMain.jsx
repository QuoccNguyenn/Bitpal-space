
import React from 'react'
import styled from 'styled-components'
import StyleA from '../../StyleA'

const MidMain = ({title}) => {
    return(
        <StyleBox>
            <img src="images/pancake-lottery-bunny.png" alt=""/>
            <h3>How it works</h3>
            <div>Spend CAKE to buy tickets, contributing to the lottery pot.
                 Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!</div>
            <span><StyleA title="Read more"></StyleA></span>
            
        </StyleBox>
        
    )
}

const StyleBox = styled.div`
max-width: 500px;
margin: 0px auto 40px;
display: flex;
flex-direction: column;
img{
    align-self: center;
}
h3{
    margin: 16px 0px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
    color: rgb(118, 69, 217);
}
div{
    color: rgb(69, 42, 122);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}
span{
    align-self: center;
    margin-top: 16px;
}
`

export default MidMain
import React from 'react'
import styled from 'styled-components'



const StyleSale = ({title}) => {
    return(
        <StyleBox>
            {title}
        </StyleBox>
        
    )
}

const StyleBox = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: rgb(69, 42, 122);
    transition: ease-in-out .5s all;
    margin-bottom: 16px;

`

export default StyleSale
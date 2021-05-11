import React from 'react'
import styled from 'styled-components'


const ContentSale = ({title}) => {
    return(
        <StyleBox>
            {title}
        </StyleBox>
        
    )
}

const StyleBox = styled.li`
    font-size: 16px;
    font-weight: 500;
    color: rgb(69, 42, 122);
    margin-bottom: 8px;
    list-style: inside;
`

export default ContentSale
import React from 'react'
import styled from 'styled-components'


const StyleText = ({title, style}) => {
    return(
        <StyleBox style={style}>
            {title}
        </StyleBox>
        
    )
}

const StyleBox = styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
    color: rgb(255, 255, 255);
`

export default StyleText
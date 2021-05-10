import React from 'react'
import styled from 'styled-components'


const HeadTitle = ({title}) => {
    return(
        <StyleBox>
            {title}
        </StyleBox>
        
    )
}

const StyleBox = styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
    color: #DE3055;
    margin-bottom: 15px;
`

export default HeadTitle
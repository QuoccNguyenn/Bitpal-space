import React from 'react'
import styled from 'styled-components'
import TextStyle from '../../TextStyle'

const Row = ({name, value, add}) => {
    return (
        <StyledDivRow>
            <StyledFlex>
            <TextStyle title={name}></TextStyle>
            </StyledFlex>
            <TextStyle title={value}></TextStyle>{add}
        </StyledDivRow>
    )
}

const StyledDivRow = styled.div`
    -webkit-box-align: center;
    align-items: center;
    color: rgb(118, 69, 217);
    display: flex;
    > a{
        margin-left: 5px;
        color:#477AB9;
    }
`

const StyledFlex = styled.div`
    flex: 1 1 0%;
`

export default Row
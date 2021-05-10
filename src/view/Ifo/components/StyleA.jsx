import React from 'react'
import styled from 'styled-components'


const StyleA = ({title, add, href}) => {
    return (
        <StyledA href={href}>
            {title}{add}
        </StyledA>
    )
}
const StyledA = styled.a`
    align-items: center;
    color: #477AB9;
    width: fit-content;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    :hover {
        text-decoration: underline;
        color: rgb(31, 199, 212);
    }
`

export default StyleA
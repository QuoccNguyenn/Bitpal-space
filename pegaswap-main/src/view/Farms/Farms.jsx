import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Inactive from './components/Inactive'
import Item from './components/Item'


const Farms = ({title}) => {
  return (
    <H_cake>
    <div className="container">
      <Title_cake color="#477AB9">{title}</Title_cake>
      <div className="row">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Inactive></Inactive>
      </div>
    </div>
  </H_cake>
  )
}


const H_cake = styled.section`
  position: relative;
  padding: 50px 0;
`


const Title_cake =styled.h2`
  color:${(props) => props.color};
  font-size: 29px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 50px;
`

export default Farms

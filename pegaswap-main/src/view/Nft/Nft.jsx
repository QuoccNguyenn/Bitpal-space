import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Item from './components/Item'
import Title from './components/Title'
import List from './components/List'
import Table from './components/Table'


const Nft = () => {

  return (
    <Section_cake>
    <div className="container">
      <Title/> 
      <Table></Table>
      <div className="row">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <List/>
      </div>
    </div>
  </Section_cake>
  )
}


const Section_cake = styled.section`
  position: relative;
  padding: 50px 0;
`

export default Nft

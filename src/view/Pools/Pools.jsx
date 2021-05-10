import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Contents from './components/Contents'
import Thumbnail from './components/Thumbnail'
import Item from './components/Item'


const Pools = () => {
  return (
    <Box_pools>
    <div className="container">
      <div className="row">
        <Contents/>
        <Thumbnail/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  </Box_pools>
  )
}


const Box_pools = styled.section`
  position: relative;
  padding: 50px 0;
`

export default Pools

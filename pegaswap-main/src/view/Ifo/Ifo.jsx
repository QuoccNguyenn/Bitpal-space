import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import PageHeader from './components/PageHeader'
import ButtonForm from './components/ButtonForm'
import Form from './components/Form'
import Take from './components/Take'

const Ifo = () => {
  return (
    <StyledIfo>
      <StyledBg>
      <PageHeader
        title="IFO: Initial Farm Offerings"
        subtitle="Buy new tokens with a brand new token sale model."
      />
      </StyledBg>
      <Form/>
      <Take/>
    </StyledIfo> 
      
  )
}


const StyledIfo = styled.div`
  font-family: Kanit, sans-serif;
`
const StyledBg = styled.div`
  background: linear-gradient(59deg, rgba(71,122,185,0.300455216266194) 0%, rgba(153,55,142,0.300455216266194) 35%, rgba(222,48,85,0.3) 64%, rgba(217,128,87,0.3) 100%);
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
  background-attachment: fixed;
`


export default Ifo

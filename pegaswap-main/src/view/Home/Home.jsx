import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import TableCate from '../../components/TableCate/TableCate'
import TableLastest from '../../components/TableLastest';




const Home = ({title}) => {
  return (
    <Box_home>
      <BoxTable>
        <Container>
          <Row>
            <Col md="12" lg="6">
              <TableCate/>
            </Col>
            <Col md="12" lg="6">
              <TableLastest/>
            </Col>
          </Row>
        </Container>
      </BoxTable>
    </Box_home>
  )
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  padding: 45px 0;
`

const BoxTable = styled.section`
  position: relative;
  
`
const Title_home = styled.h2`
  color:${(props) => props.color};
  font-size: 40px;
  margin-bottom: 24px;
  font-weight: bold;
  line-height: 1.1;
`



export default Home

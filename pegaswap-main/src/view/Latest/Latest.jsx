import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';





const Latest = ({title}) => {
  return (
    <Box_home>
        <Container>
          <Table>
            <tbody><tr>
                <th>Topic</th>
                <th />
                <th>Replies</th> 
                <th>Views</th>
                <th>Activity</th>
              </tr>
              <tr>
                <td>
                  <h3><a href="/">Start Here</a></h3>
                  <p><span />Announcements</p>
                  <p><a href="/">
                      For an overview of everything going on in the Yearn Ecosystem, check out this week’s Yearn Finance Weekly Newsletter. Highlights this week include a yVault alert bot developed in collaboration with HAL Team, and teasers …</a></p>
                </td>
                <td>
                  <ul className="listuser">
                    <li><span className="thumuser"><img src="./images/2763_2.jpeg" alt="" /></span></li>
                    <li><span className="thumuser"><img src="./images/947_2.jpeg" alt="" /></span></li>
                  </ul>
                </td>
                <td>2</td>
                <td>89</td>
                <td>3d</td>
              </tr>
            </tbody>
          </Table>
        </Container>
    </Box_home>
  )
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  padding: 45px 0;
`

const Table = styled.table`
  position: relative;
  width:100%;
`
const Title_home = styled.h2`
  color:${(props) => props.color};
  font-size: 40px;
  margin-bottom: 24px;
  font-weight: bold;
  line-height: 1.1;
`



export default Latest

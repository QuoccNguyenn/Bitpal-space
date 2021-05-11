import React, { Component } from "react";
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import panceke from '../../assets/img/logo-panceke.png'

class Inactive extends Component {
  render() {
    return (
        <div className="col-12">
        <Box_inatice>
          <p><a href="/">Inactive Pools</a></p>
          <Thum_inatice><img src="images/thor.png" alt="" /></Thum_inatice>
        </Box_inatice> 
      </div>
    );
  }
}






const Box_inatice = styled.div`
  text-align: center;
  margin-top: 30px;
`
const Thum_inatice = styled.p`
  width:100%;
  overflow:hidden;
  img{
    width:100%;
    object-fit:cover;
  }
`

export default Inactive;

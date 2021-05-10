import React, { Component } from "react";
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import panceke from '../../assets/img/logo-panceke.png'

class Thumbnail extends Component {
  render() {
    return (
        <div className="col-lg-6 col-12">
            <Thum_pools>
                <p><img src="images/3Horse-01.png" alt="syrup" /></p>
            </Thum_pools>
      </div>
    );
  }
}






const Thum_pools = styled.div`
  width:100%;
  p{
    width: 100%;
    overflow: hidden;
    img{
        width: 80%;
        margin: 0 auto;
        object-fit: cover; 
        display: block;
        @media screen and (min-width: 768px){
          margin: unset
        }
    }
  }
`


export default Thumbnail;

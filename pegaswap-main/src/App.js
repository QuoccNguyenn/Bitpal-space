import React from 'react'
import styled from 'styled-components'
import NavBar from './components/nav/nav';
import Home from './view/Home/Home';

const App = () => {

  return(
    <Box_app>
      <Boxline>
            <div className="item-line"></div>
            <div className="item-line"></div>
            <div className="item-line"></div>
            <div className="item-line"></div>
        </Boxline>

          <NavBar></NavBar>
          <Home></Home>
    </Box_app>
  ) ;
}

const Box_app = styled.div`
  width:100%;
  position: relative;
  overflow: hidden;
  background:#171819;
  .container{
    max-width:1469px;
    @media screen and (max-width:1550px){
      max-width:1140px;
    }
  }
  
`
const  Boxline = styled.div`
    position:absolute;
    top:0;
    float:left;
    width:100%;
    height:100%;
    z-index:0;
    
    .item-line{
        width:25%;
        height:100%;
        position:relative;
        float:left;
        ::before{
          content:"";
          width:1px;
          height:100%;
          background:rgba(253,252,248,.15); 
          position:absolute;
          top:0;
          left:0;
        }
        :last-child::after{
          content:"";
          width:1px;
          height:100%;
          background:rgba(253,252,248,.15); 
          position:absolute;
          top:0;
          right:0;
        }
    }
` 

export default App;

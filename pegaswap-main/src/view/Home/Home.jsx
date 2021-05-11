import React from 'react'
import styled from 'styled-components'
import Team from '../../components/Team/Team'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Home = ({title}) => {
  return (
    <Box_home>
        <Boxline>
            <div className="item-line"></div>
            <div className="item-line"></div>
            <div className="item-line"></div>
            <div className="item-line"></div>
        </Boxline>

        <WrapperHome>

           {/* cong */}

          {/* A. nguyen */}
          <Team/>


        </WrapperHome>

    </Box_home>
  )
}

const Box_home = styled.section`  
  width:100%;
  height:1000px;
  position: relative;
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

const WrapperHome = styled.div`
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  z-index:1;
`





export default Home
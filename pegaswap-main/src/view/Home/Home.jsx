import React from 'react'
import styled from 'styled-components'
import Team from '../../components/Team/Team'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OurTeam from '../../components/OurTeam/OurTeam';
import Feature from '../../components/Feature/Feature';
import Header from '../../components/header/header';
import Introduce from '../../components/introduce/introduce';
import About from '../../components/about/about';
import Token from '../../components/Token/Token';
import Partner from '../../components/Partner/Partner';




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
            <Header></Header>
            <Introduce></Introduce>
            <About></About>
            <Token></Token> 

          {/* A. nguyen */}
          <Team/>

          <OurTeam/>

          <Feature/>

          <Partner/>


        </WrapperHome>

    </Box_home>
  )
}

const Box_home = styled.section`  
  width:100%;
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

const WrapperHome = styled.div``





export default Home
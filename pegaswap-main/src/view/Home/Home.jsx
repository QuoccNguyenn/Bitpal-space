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




const Home = ({title}) => {
  return (
    <Box_home>
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


        </WrapperHome>

    </Box_home>
  )
}

const Box_home = styled.section`  
  width:100%;
  overflow:hidden;

`



const WrapperHome = styled.div``





export default Home
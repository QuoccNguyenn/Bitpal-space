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
import News from '../../components/News/News';
import Footer from '../../components/Footer/Footer';
import Quality from '../../components/Quality/Quality';
<<<<<<< HEAD
import Roadmap from '../../components/Roadmap/Roadmap';
=======
import Video from '../../components/video2/video';
>>>>>>> 68ba953a53a5a95e6c8f7de4cd15bf13fb217ddb




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

          <Quality/>

          {/* Cho nay cua Roadmap */}
          <Roadmap/>

          <Team/>

          <OurTeam/>

          <Feature/>

          <Video></Video>

          <Partner/>

          <News/>

          <Footer/>

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
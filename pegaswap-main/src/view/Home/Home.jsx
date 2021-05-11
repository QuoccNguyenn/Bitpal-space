import React from 'react'
import styled from 'styled-components'




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
          
        </WrapperHome>

    </Box_home>
  )
}

const Box_home = styled.section`  
  width:100%;
  height:5000px;
  overflow: hidden;
`

const  Boxline = styled.div`
    float:left;
    width:100%;
    height:100%;
    
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

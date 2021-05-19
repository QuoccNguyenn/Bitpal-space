import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from'aos'
import "aos/dist/aos.css"


const Introduce=()=> {

    useEffect(()=>{
        Aos.init({duration:2000 })
        
    })

    return(
        <Box_intro>
            <div className="container">
                <WrapperItro>

                    <Item className=" wow fadeInUp" data-aos="fade-up" data-aos-delay="100"  data-aos-once="true">
                        <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-custom-icon-img-1.png" alt="" />
                        <Intro_h4>Virtual Database</Intro_h4>
                        <Intro_p>Lorem ipsum dolor sit amet, consectetuer adi piscing elit. Aenean commodo ligula eget dolor. Aenean massa cum</Intro_p>
                    </Item>

                    <Item className=" wow fadeInUp" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                        <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-custom-icon-img-2.png" alt="" />
                        <Intro_h4>Secured Money</Intro_h4>
                        <Intro_p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Pha sel lus viverra nullaut metus var ius laret. Iuiue rut ruman nan</Intro_p>
                    </Item>

                    <Item className=" wow fadeInUp"  data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                        <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-custom-icon-img-3.png" alt="" />
                        <Intro_h4>Private Legal</Intro_h4>
                        <Intro_p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo</Intro_p>
                    </Item>

                </WrapperItro>
            </div>
        </Box_intro>
    );
}

const Box_intro = styled.section`
    width:100%;
    position:relative;
    

    @media screen and (max-width:1024px){
        top: -50px;
    }
`

const WrapperItro =  styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width:768px){
        flex-direction: column;
    }
`

const Item = styled.div`
width:100%;
display: flex;
align-items: center;
flex-direction: column;
`

const Intro_h4 = styled.div`
    color: #ffffff;
    margin: 27px 0;
`

const Intro_p = styled.div`
    width:80%;
    text-align:center;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    color: #888;

    @media screen and (max-width:415px){
        width:100%;
    }
`

export default Introduce
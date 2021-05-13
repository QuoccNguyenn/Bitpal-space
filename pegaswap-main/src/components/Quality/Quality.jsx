import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import Parallaxie from '../Parallax/Parallax';

function Quality() {

    const state = {
        item:[
            {
                src:'../../images/h1-custom-icon-img-12.png',
                percent:'75%',
                ability:'Sercurity'
            },
            {
                src:'../../images/h1-custom-icon-img-13.png',
                percent:'150%',
                ability:'Transparency'
            },
            {
                src:'../../images/h1-custom-icon-img-14.png',
                percent:'220%',
                ability:'Professional'
            }
        ]
    }

    return(
        <QualitySection>
            <ParallaxProvider>

                <QualityContainer>
                    <Parallaxie src='../../images/h1-parallax-img-1.jpeg'/>

                    <BodyContainer>

                        <ContentHolder>
                            <Content>
                                <Title>Grow Your Capital</Title>
                                <Paragraph>
                                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
                                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. 
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero
                                </Paragraph>
                                <Button>WHITE PAPER</Button>
                            </Content>
                        </ContentHolder>

                        <ContentHolder>
                            <ContentFlex>
                                {state.item.map(item => (
                                    <ContentItem>
                                        <Image src={item.src}/>
                                        <Percent>{item.percent}</Percent>
                                        <Ability>{item.ability}</Ability>
                                    </ContentItem>
                                ))}
                                

                            </ContentFlex>
                        </ContentHolder>
                    </BodyContainer>

                </QualityContainer>
            </ParallaxProvider>
        </QualitySection>
    );
}

const QualitySection = styled.section`
    max-height: 450px;
    overflow: hidden;

    @media screen and (max-width: 1024px){
        max-height: 875px;
    }

    @media screen and (max-width: 415px){
        max-height: 1180px;
    }
`

const QualityContainer = styled.div `
    position: relative;
    @media screen and (max-width: 1024px){
        img{
            max-width: 175%;
            margin-top: 50%;
            margin-left: -55%;
        }
    }
    @media screen and (max-width: 768px){
        img{
            max-width: 183%;
            margin-top: 10%;
            margin-left: -70%;
        }
    }
    @media screen and (max-width: 415px){
        img{
            max-width: 400%;
            margin-top: 70%;
            margin-left: -150%;
        }
    }
    @media screen and (max-width: 375px)
    img {
        max-width: 512%;
        margin-left: -325%;
    }
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;

    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    transform: translateY(-10%);

    @media screen and (max-width: 1024px){
        flex-direction: column;

        top: 14%;
    }
`

const ContentHolder = styled.div`
    width: 50%;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`

const Content = styled.div`
    padding: 0 5%;
    
    @media screen and (max-width: 1024px){
        padding-bottom: 15%;
    }
    
    @media screen and (max-width: 415px){
        padding: 0 15% 15%;
    }
`

const Title = styled.div`
    font-size: 40px;
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;

    @media screen and (max-width: 415px){
        text-align: center;
    }
`

const Paragraph = styled.div`
    font-size: 14px;
    color: #fff;
    font-weight: 100;
    font-family: sans-serif;
    padding: 8% 20px 8% 0;

    @media screen and (max-width: 1024px){
        padding: 3% 0 8% 0;
        text-align: justify;
    }

    @media screen and (max-width: 1024px){
        padding: 3% 0 8% 0;
    }

    @media screen and (max-width: 415px){
        text-align: justify;
    }
`

const Button = styled.div`
    border: 1.3px solid #fff;
    font-family: sans-serif;
    font-size: 15px;
    color: #fff;
    width: fit-content;
    padding: 10px 17px;
    border-radius: 20px;

    @media screen and (max-width: 415px){
        margin: auto
    }
`

const ContentFlex = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    @media screen and (max-width: 415px){
        flex-direction: column;
    }
`

const ContentItem = styled.div`  
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    max-width: 100% !important;
    margin: 0!important;
`

const Percent = styled.div`
    color: #fff;
    font-size: 60px;
    font-family: Montserrat;
    line-height: 1;
`

const Ability = styled.div`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
    color: #fff;
`


export default Quality;
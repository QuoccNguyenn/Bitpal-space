import React from 'react';
import styled from 'styled-components';
import HeaderTitle from '../HeaderTiltle/HeaderTitle';

function Feature() {

    const state = {
        contentLeft:[
            {
                src:'../../images/h1-custom-icon-img-15.png',
                title: 'Predictions'
            },
            {
                src:'../../images/h1-custom-icon-img-16.png',
                title: 'Innovation'
            },
            {
                src:'../../images/h1-custom-icon-img-16.png',
                title: 'Network'
            }
        ],
        contentRight:[
            {
                src:'../../images/h1-custom-icon-img-18.png',
                title: 'Trafficking'
            },
            {
                src:'../../images/h1-custom-icon-img-19.png',
                title: 'Sercurity'
            },
            {
                src:'../../images/h1-custom-icon-img-20.png',
                title: 'Sell and buy'
            }
        ]
    }
    return(
        <FeatureSection>

            <BannerTeam>
                <BannerLetter>w</BannerLetter>
                <BannerLetter>a</BannerLetter>
                <BannerLetter>l</BannerLetter>
                <BannerLetter>l</BannerLetter>
                <BannerLetter>e</BannerLetter>
                <BannerLetter>t</BannerLetter>
            </BannerTeam>

            <FeatureContainer>

                <HeaderTitle header='ICO Wallet Feature'/>

                <BodyContainer>
                    <BodyInner>

                        <ContentHolderLeft>
                            <ContentLeft>
                                {state.contentLeft.map(item => (
                                    <SubContent>
                                    <Image src={item.src}/>
                                    <Title>{item.title}</Title>
                                    <Content>
                                        Donec quam felis, ultricies nec, pellentesque eu pret ium quis, sem. Nulla consequat massa quis justo fri
                                    </Content>
                                </SubContent>
                                ))}
                                
                            </ContentLeft>
                        </ContentHolderLeft>

                        <ImageHolder>
                            <CenterImage src="../../images/h1-img-7.png"/>
                        </ImageHolder>


                        <ContentHolderRight>
                            <ContentRight>
                                {state.contentRight.map(item => (
                                    <SubContentRight>
                                    <Image src={item.src}/>
                                    <Title>{item.title}</Title>
                                    <InnerContentRight>
                                        Donec quam felis, ultricies nec, pellentesque eu pret ium quis, sem. Nulla consequat massa quis justo fri
                                    </InnerContentRight>
                                </SubContentRight>
                                ))}
                                
                            </ContentRight>
                        </ContentHolderRight>

                    </BodyInner>
                </BodyContainer>

            </FeatureContainer>

        </FeatureSection>
    );
}

const FeatureSection = styled.section`
    position: relative;
    padding: 10% 15px 3%;
`

const BannerTeam = styled.div`
    position: absolute;
    top: -3%;
    left: 5%;
`

const BannerLetter = styled.span`
    color: #ffffff05;
    font-size: 50px;
    z-index: -1;

    font-size: 250px;
    font-weight: 900;
    font-family: sans-serif;
    letter-spacing: 10px;
    line-height: normal;
`

const FeatureContainer= styled.div``

const BodyContainer = styled.div``

const BodyInner = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;

    @media screen and (max-width: 1024px){
        display: block!important;
    }


    @media screen and (max-width: 415px){
        display: block!important;

        margin-top: 25%;
    }
`

const ContentHolderLeft = styled.div`
    max-width: 35%;
    z-index: 2;

    @media screen and (max-width: 1024px){
        float: right;
    }

    @media screen and (max-width: 768px){
        float: none;
        max-width: 100%;
        padding: 0 15%;
    }
`

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
`

const SubContent = styled.div`
    max-height: 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10%;
    @media screen and (max-width: 1024px){
        align-items: flex-start;
    }
`

const Image = styled.img`
    max-width: 50px;
`
const Title = styled.div`
    color: #fff;
    font-size: 20px;
    text-align: right;
    line-height: 3;
`
const Content = styled.p`
    text-align: right;
    color: #fff;

    font-family: sans-serif;
    font-weight: 100;
    font-size: 13px;
    margin: 12px 0;
    @media screen and (max-width: 1024px){
        text-align: left;
    }
`

const ImageHolder = styled.div`
    max-width: 30%;
    z-index: 2;
    padding: 0 1%;

    @media screen and (max-width: 1024px){
        float: left;
        max-width: 40%;
        transform: translate(50%, 40%);
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`

const CenterImage = styled.img``

const ContentHolderRight = styled.div`
    max-width: 35%;
    z-index: 2;

    @media screen and (max-width: 1024px){
        float: right;
    }

    @media screen and (max-width: 768px){
        float: none;
        max-width: 100%;
        padding: 0 15%;
    }
`

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
`

const SubContentRight = styled.div`
    max-height: 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10%;
`

const InnerContentRight = styled.p`
    color: #fff;

    font-family: sans-serif;
    font-weight: 100;
    font-size: 13px;
    margin: 12px 0;
`
export default Feature;
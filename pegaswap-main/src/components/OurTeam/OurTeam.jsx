import React from 'react';
import styled from 'styled-components';

function OurTeam() {

    const state= {
        team: [
            {
                src:'../../images/team-img-1.png',
                fullName:'Steven Gonzalez',
                pos:'Founder & CEO'
            },
            {
                src:'../../images/team-img-2.png',
                fullName:'Paul Ward',
                pos:'Chief Operational Officer'
            },
            {
                src:'../../images/team-img-3.png',
                fullName:'Walter Perry',
                pos:'Lead Software Developer'
            },
            {
                src:'../../images/team-img-4.png',
                fullName:'Gregory Silva',
                pos:'Software Architect'
            },
            {
                src:'../../images/team-img-5.png',
                fullName:'Patrick Richardson',
                pos:'Chief Operational Officer'
            },
            {
                src:'../../images/team-img-6.png',
                fullName:'Jeffrey Payne',
                pos:'Founder & CEO'
            },
            {
                src:'../../images/team-img-7.png',
                fullName:'Jean Parker',
                pos:'Software Architect'
            },
            {
                src:'../../images/team-img-8.png',
                fullName:'Samantha Andrews',
                pos:'Lead Software Developer'
            }
        ],
        advistors:[
            {
                src:'../../images/team-img-9 (1).png',
                fullname:'James Walsh',
                pos:'Founder & CEO'
            },
            {
                src:'../../images/team-img-10.png',
                fullname:'Nancy Ray',
                pos:'Chief Operational Officer'
            },
            {
                src:'../../images/team-img-11.png',
                fullname:'Peter Obrien',
                pos:'Lead Software Developer'
            },
            {
                src:'../../images/team-img-12.png',
                fullname:'George Medina',
                pos:'Software Architect'
            },
            {
                src:'../../images/team-img-13 (1).png',
                fullname:'Andrea Kim',
                pos:'Software Architect'
            }
        ]
    };

    return(
        <OurTeamSection>
            <BannerTeam>
                <BannerLetter>t</BannerLetter>
                <BannerLetter>e</BannerLetter>
                <BannerLetter>a</BannerLetter>
                <BannerLetter>m</BannerLetter>
            </BannerTeam>

            <OurTeamContainer className='container'>
                <HeaderContainer className='row'>
                    <HeaderContent>Our Team</HeaderContent>
                    <Line/>
                </HeaderContainer>

                <BodyContainer>
                    {state.team.map(item => (
                        <TeamMembers>
                            <TeamInner>

                                <TeamImage>
                                    <Image src={item.src}/>
                                </TeamImage>

                                <TeamContent>

                                    <TeamName>{item.fullName}</TeamName>
                                    <TeamPos>{item.pos}</TeamPos>
                                    <TeamDesc>
                                        Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius
                                    </TeamDesc>

                                </TeamContent>

                            </TeamInner>
                        </TeamMembers>
                        ))}
                    
                </BodyContainer>

                <HeaderContainer className='row'>
                    <HeaderContent>Advisors Board</HeaderContent>
                    <Line/>
                </HeaderContainer>

                <BodyContainer>
                    {state.advistors.map(item => (
                        <TeamMembers>
                            <TeamInner>

                                <TeamImage>
                                    <Image src={item.src}/>
                                </TeamImage>

                                <TeamContent>

                                    <TeamName>{item.fullName}</TeamName>
                                    <TeamPos>{item.pos}</TeamPos>
                                    <TeamDesc>
                                        Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius
                                    </TeamDesc>
                                    
                                </TeamContent>

                            </TeamInner>
                        </TeamMembers>
                        ))}
                    
                </BodyContainer>

            </OurTeamContainer>
        </OurTeamSection>
    );
}

const OurTeamSection = styled.section`
    position: relative;
    padding: 10% 15px 0;
`

const BannerTeam = styled.div`
    position: absolute;
    top: 0;
    left: 5%;
`

const BannerLetter = styled.span`
    font-size: 50px;
    z-index: -1;

    font-size: 250px;
    font-weight: 900;
    font-family: sans-serif;
    letter-spacing: 10px;
    line-height: normal;
`

const OurTeamContainer = styled.div``

const HeaderContainer = styled.div``

const HeaderContent = styled.div`
    width: 100%;
    color: #fff;
    font-size: 40px;
    font-family: sans-serif;

    text-align: center;
    z-index: 1;
`
const Line = styled.div`
    width: 40px;
    height: 2px;
    background: #aceb2f;

    margin: auto;
    z-index: 1;
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 10%;
`

const TeamMembers = styled.div`
    max-width: 25%;
    z-index: 2;

    padding: 0 2%;
    margin-bottom: 4%;
    
    @media screen and (max-width: 1024px){
        max-width: 33%;
    }
`

const TeamInner = styled.div``

const TeamImage = styled.div``

const Image = styled.img``

const TeamName = styled.div`
    width: 100%;
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;

    text-align: center;

`
const TeamContent = styled.div``

const TeamPos = styled.div`
    color: #aceb2f;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 100;

    width: 100%;
    text-align: center;
`
const TeamDesc = styled.p`
    color: #fff;
    text-align: center;
    font-family: sans-serif;
    font-size: 13px;
    font-weight: 100;
`

export default OurTeam;
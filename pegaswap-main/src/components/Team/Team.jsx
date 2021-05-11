import React, { Component } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaxie from '../Parallax/Parallax';
import TeamSlick from './TeamSlick';

function Team() {
    return(
        <TeamSection>
            <ParallaxProvider>
                <TeamContainer>

                    <Parallaxie src="../../images/h1-parallax-img-2.jpeg"/>
                    <TeamSlickContainer>
                        <TeamSlick/>
                    </TeamSlickContainer>    

                </TeamContainer>
            </ParallaxProvider>
        </TeamSection>
    );
}

const TeamSection = styled.section`
    overflow: hidden;
`

const TeamSlickContainer = styled.div`
    margin-top: -80%;
    padding: 3% 10%;
`

const TeamContainer = styled.div`
    overlow: hidden;
    position: relative;
`


export default Team;

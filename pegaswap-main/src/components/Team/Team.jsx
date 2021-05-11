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

                    <Parallaxie src="../../images/h1-parallax-img-2.jpeg" className="paralaxie"/>
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
    max-height: 450px;
`

const TeamSlickContainer = styled.div`
    position:absolute;
    top:13%;
    left:0;
    right:0;
    padding: 3% 10%;
    transform: translateY(-13%);
`

const TeamContainer = styled.div`
    overflow: hidden;
    position: relative;
    
    &.parallaxie{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
`


export default Team;

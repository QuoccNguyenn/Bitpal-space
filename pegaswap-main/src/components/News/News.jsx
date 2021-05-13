import React from 'react';
import styled from 'styled-components';

function News() {
    return(
        <NewsSection>
            <BannerTeam>
                <BannerLetter>n</BannerLetter>
                <BannerLetter>e</BannerLetter>
                <BannerLetter>w</BannerLetter>
                <BannerLetter>s</BannerLetter>
            </BannerTeam>
        </NewsSection>
    );
}

const NewsSection = styled.section`
    position: relative;
    padding: 10% 15px 3%;
`

const BannerTeam = styled.div`
    position: absolute;
    top: -3%;
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

export default News;
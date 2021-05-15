import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

function Roadmap() {
    var settings = {
            arrow: true,
            infinite: false,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 1
        };

    return (
        <RoadmapSection>
            <RoadmapContainer>
                <div>
                    <h2>Adaptive height</h2>
                    <Slider {...settings}>
                        <div>
                            <RoadmapItemHolder className="roadmap-bottom">
                                <RoadmapItem>
                                    <Circle/>
                                    <RoadmapHorizontal/>
                                    <RoadmapContent style={{background: 'url(../../images/h1-img-8.png)'}}>
                                        <h3>Future is Now</h3>
                                        <p>Aliquam lorem ante, dapi bus in, viverra quis, feugi at a, tel lus. Phaselus vive</p>
                                    </RoadmapContent>
                                </RoadmapItem>    
                            </RoadmapItemHolder>
                        </div>
                        <div>
                            <RoadmapItemHolder className="roadmap-top">
                                <RoadmapItem>
                                    <RoadmapContent style={{background: 'url(../../images/h1-img-4.png)'}}>
                                        <h3>Future is Now</h3>
                                        <p>Aliquam lorem ante, dapi bus in, viverra quis, feugi at a, tel lus. Phaselus vive</p>
                                    </RoadmapContent>

                                    <RoadmapHorizontal/>
                                    <Circle/>

                                    <h3 style={{textAlign:'center', fontFamily:'sans-serif'}}>Q2 2017</h3>
                                </RoadmapItem>    
                            </RoadmapItemHolder>
                        </div>
                        <div>
                            <h3>3</h3>
                            <p>See ....</p>
                            <p>Height is adaptive</p>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </RoadmapContainer>

            <RoadmapLine/>

        </RoadmapSection>
    );
}

const RoadmapSection = styled.section`
    color: #fff;
    background: #141515;

    padding: 0 10%;

    min-height: 550px;
    position: relative;
`

const RoadmapContainer = styled.div`
    height: 50%;
    .roadmap-top{
    }

    .roadmap-bottom{
        margin-top: 80.05%;
    }
`

const RoadmapItemHolder = styled.div`
`

const RoadmapItem = styled.div``

const RoadmapContent = styled.div`
    font-size: 14px;
    font-family: sans-serif;
    padding: 25px 35px 27px;
    border-radius: 10px;
`

const RoadmapHorizontal = styled.div`
    height: 30px;
    background: #aceb2f;
    width: 3px;
    margin: auto;
`

const Circle = styled.div`
    height: 20px;
    width: 20px;
    background: #888;
    border: 6px solid #aceb2f;
    border-radius: 5rem;

    margin: auto;
`

const RoadmapLine = styled.div`
    height: 3px;
    width: 80%;
    background: #888;

    position: absolute;
    top: 46.7%;
    z-index: 0;
`

export default Roadmap;
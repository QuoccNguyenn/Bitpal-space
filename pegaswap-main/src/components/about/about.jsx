import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {  Modal,  ModalBody } from 'reactstrap';
import Iframe from 'react-iframe'
import Content_box from '../content_box/content_box';

const arr_content={
    h1:"About",
    h5:"Aliquam lorem ante, dapibus in, viverra quis, feugiat tellus. Phasellus viverra nulla ut metus varius laore.",
    p:`About Aliquam lorem ante, dapibus in, viverra quis, feugiat tellus. Phasellus viverra nulla ut metus varius laore.
    Lorem ipsum dolor sit amet, consetuer adipiscing elit. Aenean com modo ligula eget dolor. Aenean massa. Cum sociis
    Theme natoque penatibus etmagnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit consectetuer 
    adipiscing sociis theme`
}

const About = () =>{
    const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
    const[content_box,SetContentBox] = useState(arr_content);

return(
    <Box_ab>
        <BannerTeam>
            <BannerLetter>a</BannerLetter>
            <BannerLetter>b</BannerLetter>
            <BannerLetter>o</BannerLetter>
            <BannerLetter>u</BannerLetter>
            <BannerLetter>t</BannerLetter>
        </BannerTeam>
        <div className="container">
            <div className="row">
                <Ab_left className="col-xl-5">
                    <Text_left>
                        <Content_box content={content_box}></Content_box>
                    </Text_left>

                    <List_ab>
                        <ul>
                            <li><span>Blockchain Strategy</span></li>
                            <li><span>ICO Progress</span></li>
                            <li><span>Financial Services</span></li>
                        </ul>
                        <ul>
                            <li><span>Financial Services</span></li>
                            <li><span>Blockchain Strategy</span></li>
                            <li><span>ICO Progress</span></li>
                        </ul>
                    </List_ab>
                    
                </Ab_left>
                <Ab_right className="col-xl-7">
                    <Video>
                        <div className="img_video">
                            <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-img-1.png" alt="" />
                        </div>
                        
                        <a onClick={toggle}>
                                <span></span>
                        </a>

                        <Modal isOpen={modal} fade={false} toggle={toggle} className="as" style={{maxWidth: '100vw', width: '100%',height:"100vh",margin:"0px",display:"flex", justifyContent: "center",alignItems:"center"}}>
                        <ModalBody className="modal-video"  style={{width: '100%',height:"60vh" ,padding:"0px"}}>
                        <Iframe url="https://player.vimeo.com/video/267777924?title=0&byline=0&portrait=0&autoplay=1;"
                            width="100%"
                            height="100%"
                            />
                        </ModalBody>
                         </Modal>
                    </Video>
                </Ab_right>
            </div>
        </div>
    </Box_ab>
);
}

const Box_ab = styled.section`
    width:100%;
    overflow:hidden;
    padding:7.5rem 0;
    position: relative;

    .row{
        align-items:center;
    }
`
const BannerTeam = styled.div`
    position: absolute;
    top: 0;
    left: 5%;
    @media screen and (max-width: 768px){
        display: none;
    }
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
const Ab_left = styled.div`
    width:100%;

    @media screen and (max-width:1024px){
        width: 80%;
        margin: 0 auto;
    }

    @media screen and (max-width:415px){
        width: 100%;
        margin: 0 auto;
    }

`

const Text_left = styled.div`
    text-align:left;    
    padding-bottom:28px;
`
const List_ab = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width:600px){
        flex-direction: column;

        ul{
            margin:0;
        }
    }

    ul{
        
        width:100%;


       li{
        padding: 5px 0;
        color: #aceb2f;
        padding-left: 15px;
        list-style-type:square;

        span {
            color: #ffffff;
        }
       }
    }
`

const Ab_right = styled.div`

`

const Video = styled.div`
    width:100%;
    position: relative;

    @media screen and (max-width: 1024px){
        width: 90%;
        margin: 0 auto;
        padding:2rem 0;
    }
    a{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items: center;

        span{
            border-bottom: 35px solid transparent;
            border-top: 35px solid transparent;
            border-left: 50px solid #aceb2f;
            transition: ease all 1s;
        }

        :hover span{
            transform: scale(1.2);
        }
    }
`

export default About
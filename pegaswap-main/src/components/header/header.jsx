import react from 'react'
import styled from 'styled-components'
import { Progress } from 'reactstrap';
import Button from '../Buttons/Button';

const Header=() =>{
    return(
        <Box_hd>

            <BannerTeam>
                <BannerLetter>c</BannerLetter>
                <BannerLetter>r</BannerLetter>
                <BannerLetter>y</BannerLetter>
                <BannerLetter>p</BannerLetter>
                <BannerLetter>t</BannerLetter>
                <BannerLetter>o</BannerLetter>
            </BannerTeam>
            <Content_hd>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <Left_content>
                                <div className="text_content"> First Mining ICO Token StartUp</div>
                                <p>Regarded as a synonym to cryptocurrency, blockchain is much more than a payment option.</p>  
                                <div className="box_btn">
                                    <div className="btn">
                                        <Button name='WHITE PAPER'/>
                                    </div>
                                    
                                    

                                    <div className="btn">
                                        <Button name='FIND OUT MORE'/>
                                    </div>
                                </div>  
                            </Left_content>    
                           
                        </div>
                        <div className="col-xl-6">
                            <Right_content>
                                <Box_right>
                                    <div className="title_box">Edge ICO Ends in</div>
                                    <div className="box_time">
                                        <div className="item_time">
                                            <div className="num_time">00</div>
                                            <div className="text_time">Days</div>
                                        </div>

                                        <div className="item_time">
                                            <div className="num_time">00</div>
                                            <div className="text_time">Hours</div>
                                        </div>

                                        <div className="item_time">
                                            <div className="num_time">00</div>
                                            <div className="text_time">Minutes</div>
                                        </div>

                                        <div className="item_time">
                                            <div className="num_time">00</div>
                                            <div className="text_time">Seconds</div>
                                        </div>
                                    </div>
                                    <div className="btn">
                                        <Button  name='Buy Edge Tokens'/>
                                    </div>


                                    <div className="box_pro">
                                        <div className="text_pro">
                                            <span className="tl">Reached: $19,550,000</span>
                                            <span className="tr">$70,000,000</span>
                                        </div>
                                        <Progress className="clear" value={30} />
                                        <div className="text_pro">
                                            <span className="tl">Softcap</span>
                                            <span className="tr">Hardcap</span>
                                        </div>
                                    </div>
                                   
                                </Box_right>
                            </Right_content>    
                        </div>
                    </div>
                </div>
            </Content_hd>
        </Box_hd>
    );
}


const Box_hd = styled.section`
    background:url('images/bg_header.png');
    width:100%;
    min-height:1000px;
    position:relative;
`

const BannerTeam = styled.div`
    position: absolute;
    top: 17%;
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
const Content_hd = styled.div`  
    padding:10.5rem 0;
`

const Left_content = styled.div`
    width:100%;
    padding 2.5rem 0;
    @media screen and (max-width:1024px){
        width: 70%;
        margin: 0 auto;
    }

    .text_content{
        max-width:100%;
        font-size:75px;
        font-family: 'Roboto', sans-serif;
        font-weight:bold;
        letter-spacing:3px;
        color:white;
        padding:15px 0;
    }
    p{
        max-width:100%;
        color: #ffffff;
        font-size: 22px;
        font-weight: 400;
        line-height: 35px;
        margin: 19px 0 40px 0;
        font-family: 'Montserrat', sans-serif;
    }
`

const Right_content = styled.div`
    width:100%;
    padding: 2.5rem 0;

    @media screen and (max-width: 1024px){
        width: 80%;
        margin: 0 auto;
    }
`

const Box_right = styled.div`
    width:85%;
    height:100%;
    background:#232323;
    margin:0 auto;
    padding:45px 40px;
    border-radius: 10px;
    
    .title_box{
        color:#aceb2f;
        font-size: 24px;
        font-family: 'Montserrat', sans-serif;
        font-weight:600;
        margin-bottom:40px;
    }

    .box_time{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom:40px;
    }

    .item_time{
        width: 25%;
        margin: 0 7px;
       
    }

    .num_time{
        width:100%;
        text-align:center;
        font-size:55px;
        font-weight:600;
        font-family: 'Montserrat', sans-serif;
        border-radius: 10px;
        background: white;
    }
    .text_time{
        width:100%;
        text-align: center;
        margin-top:7px;
        color:white;
        font-family: 'Roboto', sans-serif;
    }

    .btn{
        width:100%;
    }
    .box_pro{
        margin:40px 0;

        .text_pro{
            width:100%;
            color:white;
            span{
                width:50%;
                float:left;
                margin-bottom:10px;
                &.tl{
                    text-align:left;
                }
                
                &.tr{
                    text-align:right;
                }
            }
        }
        .clear{
            clear:both;
        }

        .progress{
            margin-bottom:10px;
            background:black;
            height:13px;
            border-radius:20px;

            .progress-bar{
                background-color:#aceb2f;
            }
        }

       
    }
`



export default Header
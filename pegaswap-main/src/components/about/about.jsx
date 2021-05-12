import React from 'react'
import styled from 'styled-components'

const About = () =>{

return(
    <Box_ab>
        <div className="container">
            <div className="row">
                <Ab_left className="col-md-5">
                    <div className="text_left">
                        <h1>About</h1>
                        <h5>Aliquam lorem ante, dapibus in, viverra quis, feugiat tellus. Phasellus viverra nulla ut metus varius laore.</h5>
                        <p>About Aliquam lorem ante, dapibus in, viverra quis, feugiat tellus. Phasellus viverra nulla ut metus varius laore.
                            Lorem ipsum dolor sit amet, consetuer adipiscing elit. Aenean com modo ligula eget dolor. Aenean massa. Cum sociis
                            Theme natoque penatibus etmagnis dis parturient montes, <span>nascetur ridiculus</span> mus. Lorem ipsum dolor sit consectetuer 
                            adipiscing <span>sociis theme</span></p>
                    </div>

                    <List_ab>
                        <ul>
                        <li>Blockchain Strategy</li>
                            <li>ICO Progress</li>
                            <li>Financial Services</li>
                        </ul>
                        <ul>
                        <li>Financial Services</li>
                            <li>Blockchain Strategy</li>
                            <li>ICO Progress</li>
                        </ul>
                    </List_ab>
                    
                </Ab_left>
                <Ab_right className="col-md-7">
                    <Video>
                        <div className="img_video">
                            <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-img-1.png" alt="" />
                        </div>
                    </Video>
                </Ab_right>
            </div>
        </div>
    </Box_ab>
);
}

const Box_ab = styled.section`
    width:100%;
    padding:7.5rem 0;
`

const Ab_left = styled.div`
    width:100%;

    .text_left{
        text-align:left;    
        padding-bottom:28px;
        h1{
            color:white;
            font-weight:600;
            font-family: 'Montserrat', sans-serif;
        }

        h5{
            color: #ffffff;
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
            line-height: 28px;
            margin: 11px 0 0 0;
            
        }

        p{
            display: block;
            margin: 14px 0 0;
            font-family: "Open Sans",sans-serif;
            line-height: 26px;
            font-weight: 400;
            margin-top: 28px;
            color: #888;

            span{
                color: #d4d4d4;
            }
        }

    }

`
const List_ab = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    ul{
        padding:0;
        width:100%;

       li{
        padding: 5px 0;
        color: #ffffff;
        padding-left: 15px;
       }
    }
`

const Ab_right = styled.div`

`

const Video = styled.div`
    width:100%;
    height:500px;
    background:red;
`

export default About
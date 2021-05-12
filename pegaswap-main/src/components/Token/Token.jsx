import React from 'react'
import styled from 'styled-components'


const Token=() => {
    return(
        <Box_tk>
            <Content_tk className="container">
                <Box_left_tk></Box_left_tk>
                <Box_right_tk>
                    <div className="text_right">
                        <h1>Token Distribution</h1>
                        <h5>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</h5>
                        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus <span>varius laoreet</span>.
                                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullam corper ultricies nisi. Nam eget dui.
                                Etiam rhoncus. <span>Maecenas tem pus</span>, tellus eget condimentum rhoncus, sem quam semper fabul</p>
                        <div className="btn">
                            <a href="">PURCHASE</a>
                        </div>
                    </div>

                </Box_right_tk>
            </Content_tk>
        </Box_tk>
    );
}

const Box_tk = styled.section`
    width:100%;
    padding:7.5rem 0;
`

const Content_tk = styled.div`
    display: flex;
    height: 500px;
    flex-direction: row;
    align-items: center;
    padding: 0;
`
const Box_left_tk = styled.div`
    width:100%;
    height: 500px;
    
`

const Box_right_tk = styled.div`
    width:100%;

    .text_right{
        width:100%;
        text-align:left;    
        padding-bottom:28px;
        padding-left:20%;
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
            margin: 14px 0 28px ;
            font-family: "Open Sans",sans-serif;
            line-height: 26px;
            font-weight: 400;
            color: #888;

            span{
                color: #d4d4d4;
            }
        }

            .btn{
    
                a{
                    display:block;
                    text-decoration:none;
                    color:white;
                    font-family: 'Montserrat', sans-serif;
                    font-weight:600;
                    padding:15px 25px;
                    border-radius:50px;
                    border:2px solid #aceb2f;
                    font-size:14px;
                }
            }

    }

`

export default Token
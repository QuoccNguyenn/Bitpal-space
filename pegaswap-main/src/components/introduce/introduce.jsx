import React from 'react'
import styled from 'styled-components'


const Introduce=()=> {
    return(
        <Box_intro>
            <div className="container">
                <WrapperItro>

                    <div className="item">
                        <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-custom-icon-img-1.png" alt="" />
                        <h4>Virtual Database</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adi piscing elit. Aenean commodo ligula eget dolor. Aenean massa cum</p>
                    </div>

                    <div className="item">
                        <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-custom-icon-img-2.png" alt="" />
                        <h4>Secured Money</h4>
                        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Pha sel lus viverra nullaut metus var ius laret. Iuiue rut ruman nan</p>
                    </div>

                    <div className="item">
                        <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/07/h1-custom-icon-img-3.png" alt="" />
                        <h4>Private Legal</h4>
                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo</p>
                    </div>

                </WrapperItro>
            </div>
        </Box_intro>
    );
}

const Box_intro = styled.section`
    width:100%;
    position:relative;
    top:-200px;
`

const WrapperItro =  styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    .item{
        width:100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        h4{
            color: #ffffff;
            margin: 27px 0;
        }
        p{
            width:80%;
            text-align:center;
            font-size: 14px;
            font-weight: 400;
            line-height: 26px;
            color: #888;
        }
    }
`

export default Introduce
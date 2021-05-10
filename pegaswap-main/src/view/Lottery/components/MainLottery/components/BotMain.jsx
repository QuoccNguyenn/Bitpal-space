import React from "react";
import styled from "styled-components";
import Container from "../../../../../components/Container";

const BotMain = () => {
  return (
    <StyleBox>
      <MainBot>
        <div>
          <ContentMain>
            <div className="title">Latest Winning Numbers</div>
            {/* <div className="img"> */}
            <Box_wan>
              <div className="item-winning">
                <div className="box-num-win">0</div>
                <p className="thum-win">
                <img src="images/signbunny1.png" alt=""/>
                </p>
              </div>
              <div className="item-winning">
                <div className="box-num-win">0</div>
                <p className="thum-win">
                <img src="images/signbunny2.png" alt=""/>
                </p>
              </div>
              <div className="item-winning">
                <div className="box-num-win">0</div>
                <p className="thum-win">
                <img src="images/signbunny3.png" alt=""/>
                </p>
              </div>
              <div className="item-winning">
                <div className="box-num-win">0</div>
                <p className="thum-win">
                    <img src="images/signbunny4.png" alt=""/>
                </p>
              </div>
            </Box_wan>
            <Box_Tickets>
                <div className="row">
                    <div className="text">Tickets matching 4 numbers:</div>
                    <div className="number">0</div>
                </div>
                <div className="row">
                    <div className="text">Tickets matching 4 numbers:</div>
                    <div className="number">0</div>
                </div>
                <div className="row">
                    <div className="text">Tickets matching 4 numbers:</div>
                    <div className="number">0</div>
                </div>
            </Box_Tickets>
            <a href="https://api.pancakeswap.com/api/lottery?page=0&pageSize=25" className="export">
            Export recent winning numbers
            </a>
          </ContentMain>
        </div>
      </MainBot>
    </StyleBox>
  );
};

const Box_Tickets = styled.div`
.row{
    line-height: 1.1;
    .number{
        font-weight: 600;
        margin-left: 5px;
    }
}
`

const StyleBox = styled.div``

const ImgBunny = styled.div`
margin-top: -2.3em;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    .ImgItem{
        border-radius: 12px;
        margin: 30px 0;
        
        width: 60px;
        @media (min-width: 768px) {
            margin: 16px 20px;
          }
        img{
            width:100px;
        }
    }
`

const MainImg = styled.div`
  margin-top: 1em;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;

  .ImgItem {
    padding: 10px;
    border-radius: 12px;
    background: linear-gradient(rgb(84, 218, 222) 0%, rgb(36, 199, 214) 76.22%);
    color: white;
    font-size: 20px;
    font-weight: 900;
    margin: 10px 10px 7px;
    width: 40px;
    height:40px;
    display: flex;
      align-items: center;
      justify-content: center;
    @media (min-width: 768px) {
      font-size: 40px;
      margin: 20px;
      width: 40px;
      height: 40px;
    }
    div {
      text-align: center;
      -webkit-box-align: center;
      align-items: center;
    }
  }
`;

const ContentMain = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  .title {
    color: rgb(118, 69, 217);
    font-size: 24px;
    line-height: 1.1;
    width: 50vw;
    text-align: center;
    font-weight: 1000;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin:20px 0;
  }
  .export{
    margin: 1em 0;
    text-decoration: none;
    color: rgb(37, 190, 202);
  }
`;

const MainBot = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  color: rgb(118, 69, 217);
  flex: 1 1 0%;
  box-shadow: rgba(171, 133, 115, 0.21) 0px 2px 8px;
  border-radius: 20px;
  flex-direction: column;
`;


const Box_wan = styled.div`
display: flex;
align-items: center;
width: 100%;
margin: 15px 0;
justify-content: center;
.box-num-win{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(rgb(84, 218, 222) 0%, rgb(36, 199, 214) 76.22%);
    color: #fff;
    font-size: 32px;
    margin: 0 10px;
    @media (min-width: 768px) {
        width: 60px;
        height: 60px;
      }
  }
  .thum-win{
    max-width: 40px;
    overflow: hidden;
    margin-left: 10px;
    width: 100%;
    @media (min-width: 768px) {
        max-width: 60px;
        
      }
    
  }
  .thum-win img{
    width: 100%;
    object-fit: cover;
    
  }
`;


export default BotMain;

import React from 'react'
import styled from 'styled-components'

const NavBar=()=>{
   return(
        <Box_nav>
            <Nav className="container">
                <Menu>
                    <Logo_nav>
                        <img src="images/logo.png" alt="" />
                    </Logo_nav>
                    <Contents_nav>

                        <ul>
                            <li className="active"><a href="">HOME</a></li>
                            <li><a href="">PAGES</a></li>
                            <li><a href="">CURRENCIES</a></li>
                            <li><a href="">PORTFOLIO</a></li>
                            <li><a href="">BLOG</a></li>
                            <li><a href="">SHOP</a></li>
                            <li><a href="">ELEMENTS</a></li>
                        </ul>

                        <Btn_menu>
                            <div className="btn">
                                Login
                            </div>
                        </Btn_menu>
                    </Contents_nav>
                </Menu>
            </Nav>
        </Box_nav>
   );
}

const Box_nav= styled.nav`
    padding:0;
    
`

const Nav = styled.div`
    display:block;
    with:100%;
    padding:0;
`
const Menu = styled.div`
    width:100%;
    height:100px;
    line-height:90px;
    display:flex;
    flex-direction:row;
    flex-grow:1;
`

const Logo_nav = styled.div`
    height: 100%;
    flex-grow:1;

    img{
        width:91px;
        height:27px;
    }
`

const Contents_nav = styled.div`
    height: 100%;
    flex-grow:3;
    display:flex;
    flex-direction:row;

    ul{
    height: 100%;
    flex-grow:4;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;   
    }

    li a{
        color:white;
        text-decoration:none;
        font-weight:bold;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 2px;
    }

    li.active a{
        color:#aceb2f;
    }

   
`
const Btn_menu = styled.div`
    height: 100%;
    flex-grow:2;
    .btn{
        width:70%;
        padding:13px 0;
        border:2px solid #aceb2f;
        border-radius: 50px;
        color:white;
    }
`


export default NavBar
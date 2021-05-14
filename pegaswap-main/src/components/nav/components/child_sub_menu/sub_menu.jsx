import React from 'react'
import styled from 'styled-components'

const Submenu = () =>{

    return(
        <Box_sub></Box_sub>
    );

}

const Box_sub= styled.ul`
    position: absolute;
    background: #151515;
    border: 1px #303030;
    border-top: 2px solid #aceb2f;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0;
    text-aglin: left;
    top: 0;
    left:-109%;
    width: 235px;
    padding: 20px 0 0 20px  !important;
    height:auto !important;
    display:none !important;

    &.right{
        li{
            :hover{
            
                
                    a.a_sub{
                        transform: translateX(-40px);
                        color:white;
                    }
        
                    i{
                        right: 100%;
                        color:white;
                    }
                    
                }
        }
        }
    }

    li{
        a.a_sub{
            color:#989898!important;
            display:inline-block;
        }


        :hover{
            
            ::before{
                display:block;
            }
            
                a.a_sub{
                    transform: translateX(40px);
                    color:white;
                }

                i{
                    right: 0;
                    color:white;
                }
                .sub{
                    display: block !important;
                }
            }
    }
    }
`

export default Submenu
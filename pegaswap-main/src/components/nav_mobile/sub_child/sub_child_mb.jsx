import React from 'react'
import styled from 'styled-components'



const SubChild_mb = (props) =>{
    let{sub} = props;

    return(
        <Box_sub className="sub">
            {sub.map((chl,idx)=>(
                <li key={idx}><a href="" className="a_sub">{chl}</a></li>
            ))}
        </Box_sub>
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
    bottom:0 ;
    width: 255px;
    padding: 20px 0 0 20px  !important;
    height: auto !important;
    left: 100%;
    background: #151515;
    z-index: 2;
    list-style: none;
    display:none;

    li{
        a.a_sub{
            display:inline-block;
            color:#888;
            transition: all .5s;
        }
        :hover{
            a.a_sub{
                transform: translateX(40px);
                color:white;
            }
        }
    }
`

export default SubChild_mb
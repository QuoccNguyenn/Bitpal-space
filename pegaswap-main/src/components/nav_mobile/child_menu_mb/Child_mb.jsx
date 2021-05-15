import React from 'react'
import styled from 'styled-components'
import SubChild_mb from '../sub_child/sub_child_mb';



const Child_mb = (props) =>{

    let{child_arr}= props;

    return(
        <Box_child className="child">
            {child_arr.filter(chl => typeof(chl) =="string").map((chl,idx)=>(
                 <li key={idx}><a href="" className="a_child">{chl}</a></li>    
            ))}

            {child_arr.filter(chl => typeof(chl) =="object").map((chl,idx)=>(
                <li key={idx} ><a href="" className="a_child">{chl.name}</a> {chl.sub?<i class="fas fa-arrow-right"></i>:""}
                    {chl.sub ? 
                        <SubChild_mb sub={chl.sub} >
                            
                        </SubChild_mb>
                    :    
                    ""
                }
                </li> 
            ))}
        </Box_child>
    );
}

const Box_child = styled.ul`
    position: absolute;
    background: #151515;
    border: 1px #303030;
    border-top: 2px solid #aceb2f;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0;
    top: 0;
    width: 255px;
    padding: 20px 0 0 20px  !important;
    height: auto !important;
    left: 100%;
    background: #151515;
    z-index: 2;
    list-style: none;
    display:none;

    li{
        cursor: pointer;
        font-size: 12px;
        line-height: 40px !important;
        position: relative;

        ::after{
            content: "";
            width: 7px;
            height: 7px;
            background: #aceb2f;
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            animation: run_left .5s;
            display:none;
        }

        a.a_child{
            color:#888;
            transition:all .5s;
            display:inline-block;
        }   

        

        :hover{
           
            ::after{
                display:block;
            }

            a.a_child{
                transform: translateX(40px);
                color:white;
            }

            i{
                right: 10px;
                color:white;
            }

            .sub{
                display:block;
            }

        }

            i{
                position: absolute;
                right: 50px;
                top: 50%;
                transform: translateY(-50%);
                transition: all .5s;
            }
    }

       

        

    
`

export default Child_mb
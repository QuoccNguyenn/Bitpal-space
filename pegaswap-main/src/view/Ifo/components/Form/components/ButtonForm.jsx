import React, {  useState } from "react";
import styled from 'styled-components'
import Popup from "../../../components/Popup";

const ButtonForm = ({width}) =>{
    const [Status, setStatus] = useState(false);
    return (
        <React.Fragment> 
            <StyledDittoTextButton onClick={() => setStatus(true)}  width={width} ></StyledDittoTextButton>
            <Box_mdal>
                <div className={`box ${Status ? "active" : ""}`}>
                    <Popup onClose={() => setStatus(false)} />
                </div>
            </Box_mdal>
        </React.Fragment> 
    );
}
const StyledDittoTextButton = styled.div`
background: transparent;
border: none;
color: rgb(31, 199, 212);
cursor: pointer;
display: block;
font-weight: 600;
outline: 0px;
padding: 24px 16px;
width: 100%;
`

const Box_mdal = styled.div`
    position:relative;
    .box{
    display:none;
    }
    .active{
      display:block;
    }

`

export default ButtonForm
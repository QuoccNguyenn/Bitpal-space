import React from 'react'
import styled from 'styled-components'

    
// } color: ${TextStyle.color};
// class TextStyle = ({ title, color}) =>{
class TextStyle extends React.Component {
    // this.color = {color};
   
    // constructor(){
    //     super();
    //     this.color = this.props.color color: ${props => props.color ?  props.color : "rgb(69, 42, 122);"};
    // }
    render () {
        return <StyledText >{this.props.title}</StyledText>;
    }
  
}

const StyledText = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(69, 42, 122);
    &-color{
        color: rgb(174, 160, 214);
    }
    
`

export default TextStyle
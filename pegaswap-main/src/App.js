import React from 'react'
import styled from 'styled-components'
import NavBar from './components/nav/nav';
import Home from './view/Home/Home';

const App = () => {

  return(
    <Box_app>
          <NavBar></NavBar>
          <Home></Home>
    </Box_app>
  ) ;
}

const Box_app = styled.div`
  width:100%;
  overflow: hidden;
  background:#171819;
  .container{
    max-width:1300px;
  }
  
`

export default App;

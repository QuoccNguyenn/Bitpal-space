import React from 'react'
import styled from 'styled-components'
import Home from './view/Home/Home';

const App = () => {

  return(
    <Box_app>
          <Home></Home>
    </Box_app>
  ) ;
}

const Box_app = styled.div`
  width:100%;
  overflow: hidden;
  background:#171819;
`

export default App;

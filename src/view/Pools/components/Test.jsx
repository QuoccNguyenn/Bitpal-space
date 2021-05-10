import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const Pools = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
  return (
    <div className={isActive ? "app" : "container"}>
    <h1>Hello react</h1>
    <button onClick={handleToggle}>Toggle class</button>
  </div>
  )
}


const Box_pools = styled.section`
  position: relative;
  padding: 50px 0;
`

export default Pools
